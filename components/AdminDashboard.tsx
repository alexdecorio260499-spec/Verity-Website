import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Trash2, CheckCircle2, Circle, Clock, MessageSquare, ChevronRight, LayoutDashboard, FolderKanban, Users, Settings, LogOut, FileText, Upload, Download, Edit2, X } from 'lucide-react';
import { useAuth } from '../lib/useAuth';

interface Project {
    id: string;
    name: string;
    status: string;
    client_id: string | null;
    created_at: string;
}

interface Profile {
    id: string;
    email: string;
    full_name: string;
    role: string;
    created_at: string;
}

interface RoadmapStep {
    id: string;
    project_id: string;
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    order_index: number;
}

interface ClientDocument {
    id: string;
    client_id: string;
    name: string;
    description: string | null;
    file_url: string;
    file_type: string;
    file_size: number | null;
    uploaded_at: string;
    uploaded_by: string | null;
}

const AdminDashboard: React.FC = () => {
    const { user, signOut } = useAuth();
    const [projects, setProjects] = useState<Project[]>([]);
    const [clients, setClients] = useState<Profile[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [steps, setSteps] = useState<RoadmapStep[]>([]);
    const [newProjectName, setNewProjectName] = useState('');
    const [activeTab, setActiveTab] = useState<'dashboard' | 'users'>('dashboard');
    const [editingProject, setEditingProject] = useState<{ id: string, name: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [isInviting, setIsInviting] = useState(false);
    const [inviteData, setInviteData] = useState({ email: '', fullName: '', password: '', role: 'client' });
    const [confirmDialog, setConfirmDialog] = useState<{ show: boolean; message: string; onConfirm: () => void } | null>(null);
    const [selectedClient, setSelectedClient] = useState<Profile | null>(null);
    const [documents, setDocuments] = useState<ClientDocument[]>([]);
    const [uploadingDocument, setUploadingDocument] = useState(false);
    const [documentForm, setDocumentForm] = useState({ name: '', description: '', file: null as File | null });
    const [editingDocument, setEditingDocument] = useState<ClientDocument | null>(null);

    useEffect(() => {
        if (user) {
            fetchProjects();
            fetchClients();
        }
    }, [user]);

    useEffect(() => {
        if (selectedProject) {
            fetchSteps(selectedProject.id);
        }
    }, [selectedProject]);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setProjects(data);
        setLoading(false);
    };

    const fetchClients = async () => {
        const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('role', 'client')
            .order('created_at', { ascending: false });

        if (data) setClients(data);
    };

    const inviteClient = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsInviting(true);

        // This will call the Supabase Edge Function
        const { data: sessionData } = await supabase.auth.getSession();
        const { data, error } = await supabase.functions.invoke('invite-client', {
            body: {
                email: inviteData.email,
                fullName: inviteData.fullName,
                password: inviteData.password || undefined,
                role: inviteData.role
            },
            headers: {
                Authorization: `Bearer ${sessionData.session?.access_token}`
            }
        });

        if (!error) {
            setInviteData({ email: '', fullName: '', password: '', role: 'client' });
            fetchClients();
            alert(`User created successfully! Login: ${inviteData.email} / ${inviteData.password || 'auto-generated password'}`);
        } else {
            console.error('Error inviting client:', error);
            alert('Failed to create user. Please try again.');
        }
        setIsInviting(false);
    };

    const linkProjectToClient = async (projectId: string, clientId: string | null) => {
        await supabase.from('projects').update({ client_id: clientId }).eq('id', projectId);
        setProjects(projects.map(p => p.id === projectId ? { ...p, client_id: clientId } : p));
        if (selectedProject?.id === projectId) {
            setSelectedProject({ ...selectedProject, client_id: clientId });
        }
    };

    const fetchSteps = async (projectId: string) => {
        const { data } = await supabase
            .from('roadmap_steps')
            .select('*')
            .eq('project_id', projectId)
            .order('order_index', { ascending: true });

        if (data) setSteps(data);
    };

    const createProject = async () => {
        if (!newProjectName) return;
        const { data, error } = await supabase
            .from('projects')
            .insert([{ name: newProjectName }])
            .select();

        if (data) {
            setProjects([data[0], ...projects]);
            setNewProjectName('');
            setSelectedProject(data[0]);
        }
    };

    const deleteProject = async (projectId: string) => {
        setConfirmDialog({
            show: true,
            message: 'Are you sure you want to delete this project? This will also delete all roadmap steps and notes.',
            onConfirm: async () => {
                await supabase.from('projects').delete().eq('id', projectId);
                setProjects(projects.filter(p => p.id !== projectId));
                if (selectedProject?.id === projectId) {
                    setSelectedProject(null);
                }
                setConfirmDialog(null);
            }
        });
    };

    const deleteClient = async (clientId: string) => {
        setConfirmDialog({
            show: true,
            message: 'Are you sure you want to delete this client? This action cannot be undone.',
            onConfirm: async () => {
                try {
                    // Call Edge Function to delete user from Auth and Database securely
                    const { error } = await supabase.functions.invoke('delete-user', {
                        body: { userId: clientId }
                    });

                    if (error) throw error;

                    setClients(clients.filter(c => c.id !== clientId));
                    setConfirmDialog(null);
                } catch (error) {
                    console.error('Error deleting client:', error);
                    alert('Failed to delete client. Please try again.');
                }
            }
        });
    };

    const fetchDocuments = async (clientId: string) => {
        const { data } = await supabase
            .from('client_documents')
            .select('*')
            .eq('client_id', clientId)
            .order('uploaded_at', { ascending: false });

        if (data) setDocuments(data);
    };

    const uploadDocument = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!documentForm.file || !selectedClient) return;

        setUploadingDocument(true);
        try {
            // Upload file to Supabase Storage
            const fileExt = documentForm.file.name.split('.').pop();
            const fileName = `${selectedClient.id}/${Date.now()}.${fileExt}`;

            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('client-documents')
                .upload(fileName, documentForm.file);

            if (uploadError) throw uploadError;

            // Create database record
            const { error: dbError } = await supabase
                .from('client_documents')
                .insert({
                    client_id: selectedClient.id,
                    name: documentForm.name,
                    description: documentForm.description || null,
                    file_url: fileName,
                    file_type: documentForm.file.type,
                    file_size: documentForm.file.size,
                    uploaded_by: user?.id
                });

            if (dbError) throw dbError;

            setDocumentForm({ name: '', description: '', file: null });
            fetchDocuments(selectedClient.id);
            alert('Document uploaded successfully!');
        } catch (error) {
            console.error('Error uploading document:', error);
            alert('Failed to upload document.');
        } finally {
            setUploadingDocument(false);
        }
    };

    const updateDocument = async () => {
        if (!editingDocument) return;

        const { error } = await supabase
            .from('client_documents')
            .update({
                name: editingDocument.name,
                description: editingDocument.description
            })
            .eq('id', editingDocument.id);

        if (!error) {
            setDocuments(documents.map(d => d.id === editingDocument.id ? editingDocument : d));
            setEditingDocument(null);
            alert('Document updated successfully!');
        }
    };

    const deleteDocument = async (doc: ClientDocument) => {
        setConfirmDialog({
            show: true,
            message: `Are you sure you want to delete "${doc.name}"? This action cannot be undone.`,
            onConfirm: async () => {
                // Delete from storage
                await supabase.storage
                    .from('client-documents')
                    .remove([doc.file_url]);

                // Delete from database
                await supabase
                    .from('client_documents')
                    .delete()
                    .eq('id', doc.id);

                setDocuments(documents.filter(d => d.id !== doc.id));
                setConfirmDialog(null);
            }
        });
    };

    const downloadDocument = async (doc: ClientDocument) => {
        const { data } = await supabase.storage
            .from('client-documents')
            .createSignedUrl(doc.file_url, 60);

        if (data?.signedUrl) {
            window.open(data.signedUrl, '_blank');
        }
    };

    const openDocumentManager = (client: Profile) => {
        setSelectedClient(client);
        fetchDocuments(client.id);
    };

    const addStep = async () => {
        if (!selectedProject) return;
        const newStep = {
            project_id: selectedProject.id,
            title: 'New Milestone',
            status: 'todo',
            order_index: steps.length
        };
        const { data } = await supabase.from('roadmap_steps').insert([newStep]).select();
        if (data) setSteps([...steps, data[0]]);
    };

    const updateProjectName = async () => {
        if (!editingProject) return;

        const { error } = await supabase
            .from('projects')
            .update({ name: editingProject.name })
            .eq('id', editingProject.id);

        if (!error) {
            setProjects(projects.map(p => p.id === editingProject.id ? { ...p, name: editingProject.name } : p));
            if (selectedProject?.id === editingProject.id) {
                setSelectedProject({ ...selectedProject, name: editingProject.name });
            }
            setEditingProject(null);
        } else {
            console.error('Error updating project:', error);
            alert('Failed to update project name.');
        }
    };

    const updateStepStatus = async (stepId: string, status: string) => {
        await supabase.from('roadmap_steps').update({ status }).eq('id', stepId);
        setSteps(steps.map(s => s.id === stepId ? { ...s, status: status as any } : s));
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-cta text-white p-6 flex flex-col gap-8">
                <div className="font-heading font-black text-2xl tracking-tighter">
                    NEXUS<span className="text-primary">.</span> ADMIN
                </div>

                <nav className="flex-1 space-y-2">
                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'dashboard' ? 'bg-primary/20 text-primary' : 'text-white/60 hover:bg-white/5'}`}
                    >
                        <LayoutDashboard size={18} /> Dashboard
                    </button>
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'users' ? 'bg-primary/20 text-primary' : 'text-white/60 hover:bg-white/5'}`}
                    >
                        <Users size={18} /> Users
                    </button>
                </nav>

                <div className="pt-8 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black text-xs">
                            {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-[10px] font-black text-white truncate">{user?.user_metadata?.full_name || 'Admin'}</p>
                            <p className="text-[8px] font-bold text-white/30 truncate uppercase tracking-widest leading-tight">Master Admin</p>
                        </div>
                    </div>
                    <button
                        onClick={signOut}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl font-bold text-sm transition-all"
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-12 overflow-y-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-heading font-black text-text">Project Roadmap Manager</h1>
                        <p className="text-text/40 font-medium">Create and manage client implementation timelines.</p>
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="New Project Name..."
                            className="px-6 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-all text-sm font-medium w-64"
                            value={newProjectName}
                            onChange={(e) => setNewProjectName(e.target.value)}
                        />
                        <button
                            onClick={createProject}
                            className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center gap-2"
                        >
                            <Plus size={18} /> Create Project
                        </button>
                    </div>
                </header>

                {activeTab === 'dashboard' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Projects List */}
                        <div className="lg:col-span-1 space-y-4">
                            <h2 className="text-xs font-black text-text/30 uppercase tracking-[0.2em] mb-4">Active Projects</h2>
                            {projects.map(project => (
                                <div key={project.id} className="relative group">
                                    {editingProject?.id === project.id ? (
                                        <div className="p-4 bg-white rounded-2xl border border-primary ring-1 ring-primary shadow-xl">
                                            <input
                                                type="text"
                                                value={editingProject.name}
                                                onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
                                                className="w-full font-bold text-text mb-2 bg-transparent outline-none border-b border-primary/20 focus:border-primary text-sm"
                                                autoFocus
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') updateProjectName();
                                                    if (e.key === 'Escape') setEditingProject(null);
                                                }}
                                            />
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => setEditingProject(null)}
                                                    className="p-1.5 hover:bg-slate-100 rounded-lg text-text/40 transition-colors"
                                                >
                                                    <X size={14} />
                                                </button>
                                                <button
                                                    onClick={updateProjectName}
                                                    className="p-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors"
                                                >
                                                    <CheckCircle2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className={`w-full p-4 rounded-2xl border text-left transition-all ${selectedProject?.id === project.id ? 'bg-white border-primary shadow-xl shadow-indigo-500/5 ring-1 ring-primary' : 'bg-white/50 border-slate-100 hover:border-primary/50'}`}
                                            >
                                                <div className="font-bold text-text mb-1 pr-6">{project.name}</div>
                                                <div className="flex items-center gap-2 text-[10px] text-text/40 font-black uppercase tracking-wider">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'active' ? 'bg-green-400' : 'bg-amber-400'}`}></div>
                                                    {project.status}
                                                </div>
                                            </button>
                                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setEditingProject({ id: project.id, name: project.name });
                                                    }}
                                                    className="p-2 text-text/40 hover:text-primary bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100"
                                                    title="Rename Project"
                                                >
                                                    <Edit2 size={12} />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteProject(project.id);
                                                    }}
                                                    className="p-2 text-text/40 hover:text-red-400 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100"
                                                    title="Delete Project"
                                                >
                                                    <Trash2 size={12} />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Roadmap Editor */}
                        <div className="lg:col-span-3">
                            {selectedProject ? (
                                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-indigo-500/5">
                                    <div className="flex justify-between items-start mb-10">
                                        <div>
                                            <h2 className="text-2xl font-heading font-black text-text">{selectedProject.name} Roadmap</h2>
                                            <p className="text-text/40 text-sm font-medium mb-4">Staggered timeline of implementation phases.</p>

                                            {/* Client Linker */}
                                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 max-w-sm">
                                                <Users size={16} className="text-text/40" />
                                                <select
                                                    className="bg-transparent text-sm font-bold text-text focus:outline-none w-full cursor-pointer"
                                                    value={selectedProject.client_id || ''}
                                                    onChange={(e) => linkProjectToClient(selectedProject.id, e.target.value || null)}
                                                >
                                                    <option value="">Unassigned</option>
                                                    {clients.map(client => (
                                                        <option key={client.id} value={client.id}>{client.full_name || client.email}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <button
                                            onClick={addStep}
                                            className="flex items-center gap-2 text-primary font-bold text-sm hover:translate-x-1 transition-transform"
                                        >
                                            Add Milestone <ChevronRight size={18} />
                                        </button>
                                    </div>

                                    <div className="space-y-6 relative before:absolute before:left-[19px] before:top-8 before:bottom-8 before:w-0.5 before:bg-slate-100">
                                        {steps.map((step, idx) => (
                                            <div key={step.id} className="flex gap-6 group">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center z-10 transition-all cursor-pointer ${step.status === 'completed' ? 'bg-primary text-white' : step.status === 'in_progress' ? 'bg-amber-400 text-white' : 'bg-slate-50 text-text/20 group-hover:text-primary active:scale-95'}`}>
                                                        {step.status === 'completed' ? <CheckCircle2 size={20} /> : step.status === 'in_progress' ? <Clock size={20} /> : <Circle size={20} />}
                                                    </div>
                                                    <select
                                                        value={step.status || 'pending'}
                                                        onChange={(e) => updateStepStatus(step.id, e.target.value)}
                                                        className="text-[9px] font-black uppercase tracking-wider bg-white border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:border-primary cursor-pointer"
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="in_progress">In Progress</option>
                                                        <option value="completed">Completed</option>
                                                    </select>
                                                </div>
                                                <div className={`flex-1 p-6 rounded-3xl border transition-all ${step.status === 'completed' ? 'bg-green-50 border-green-100' : 'bg-slate-50/50 border-slate-50 hover:bg-white hover:border-slate-100 hover:shadow-xl hover:shadow-indigo-500/5'}`}>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <input
                                                            className="bg-transparent font-bold text-text focus:outline-none w-full mr-4"
                                                            defaultValue={step.title}
                                                            onBlur={async (e) => {
                                                                const newTitle = e.target.value;
                                                                await supabase.from('roadmap_steps').update({ title: newTitle }).eq('id', step.id);
                                                                setSteps(steps.map(s => s.id === step.id ? { ...s, title: newTitle } : s));
                                                            }}
                                                        />
                                                        <div className="flex gap-2">
                                                            <button className="p-2 text-text/20 hover:text-primary transition-colors"><MessageSquare size={16} /></button>
                                                            <button
                                                                className="p-2 text-text/20 hover:text-red-400 transition-colors"
                                                                onClick={async () => {
                                                                    await supabase.from('roadmap_steps').delete().eq('id', step.id);
                                                                    setSteps(steps.filter(s => s.id !== step.id));
                                                                }}
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <textarea
                                                        className="w-full bg-transparent text-sm text-text/50 focus:outline-none resize-none"
                                                        placeholder="Add details about this phase..."
                                                        defaultValue={step.description}
                                                        onBlur={async (e) => {
                                                            const newDesc = e.target.value;
                                                            await supabase.from('roadmap_steps').update({ description: newDesc }).eq('id', step.id);
                                                            setSteps(steps.map(s => s.id === step.id ? { ...s, description: newDesc } : s));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        {steps.length === 0 && (
                                            <div className="text-center py-20 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
                                                <p className="text-text/30 font-bold">No milestones yet. Click "Add Milestone" to start.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center p-20 bg-white/50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                    <FolderKanban size={48} className="text-text/10 mb-6" />
                                    <h3 className="text-xl font-heading font-black text-text/20">Select a project to manage</h3>
                                    <p className="text-text/10 max-w-xs mx-auto mt-2 font-medium">Choose a project from the left sidebar or create a new one to begin defining the roadmap.</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Invite Form */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-indigo-500/5">
                                <h2 className="text-2xl font-heading font-black text-text mb-2">Create User</h2>
                                <p className="text-text/40 text-sm font-medium mb-8">Create a new client or admin account.</p>

                                <form onSubmit={inviteClient} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-text/30 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium"
                                            value={inviteData.fullName}
                                            onChange={(e) => setInviteData({ ...inviteData, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-text/30 uppercase tracking-[0.2em] ml-2">User Role</label>
                                        <select
                                            required
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium"
                                            value={inviteData.role}
                                            onChange={(e) => setInviteData({ ...inviteData, role: e.target.value })}
                                        >
                                            <option value="client">Client</option>
                                            <option value="admin">Admin/Employee</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-text/30 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium"
                                            value={inviteData.email}
                                            onChange={(e) => setInviteData({ ...inviteData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-text/30 uppercase tracking-[0.2em] ml-2">Password (Optional)</label>
                                        <input
                                            type="password"
                                            placeholder="Leave blank for auto-generated"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium"
                                            value={inviteData.password}
                                            onChange={(e) => setInviteData({ ...inviteData, password: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isInviting}
                                        className="w-full bg-cta text-white rounded-2xl py-4 font-black transition-all shadow-xl shadow-cta/20 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                                    >
                                        {isInviting ? 'Creating User...' : 'Create User'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* User List */}
                        <div className="lg:col-span-2">
                            <h2 className="text-xs font-black text-text/30 uppercase tracking-[0.2em] mb-6">All Users</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {clients.map(client => (
                                    <div key={client.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg shadow-indigo-500/5 flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 font-black">
                                                {client.full_name?.charAt(0) || client.email.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="font-bold text-text mb-1">{client.full_name || 'Unnamed Client'}</div>
                                            <div className="text-sm text-text/40 font-medium lowercase italic">{client.email}</div>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-text/20">
                                            <span>Joined {new Date(client.created_at).toLocaleDateString()}</span>
                                            <div className="flex gap-3">
                                                <button onClick={() => openDocumentManager(client)} className="text-primary hover:text-primary/70 transition-colors">Documents</button>
                                                <button onClick={() => deleteClient(client.id)} className="text-red-400 hover:text-red-500 transition-colors">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {clients.length === 0 && <div className="text-center py-12 bg-white/50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                    <Users size={48} className="text-text/5 mx-auto mb-4" />
                                    <p className="text-text/30 font-bold">No users found. Start by creating one!</p>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Confirmation Modal */}
            {confirmDialog?.show && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setConfirmDialog(null)}>
                    <div className="bg-white rounded-[2rem] p-8 max-w-md mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-heading font-black text-text mb-4">Confirm Action</h3>
                        <p className="text-text/60 mb-8">{confirmDialog.message}</p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setConfirmDialog(null)}
                                className="flex-1 px-6 py-3 bg-slate-100 text-text rounded-xl font-bold hover:bg-slate-200 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDialog.onConfirm}
                                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Document Manager Modal */}
            {selectedClient && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedClient(null)}>
                    <div className="bg-white rounded-[2rem] p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-2xl font-heading font-black text-text">Document Manager</h3>
                                <p className="text-text/60 text-sm mt-1">{selectedClient.full_name || selectedClient.email}</p>
                            </div>
                            <button onClick={() => setSelectedClient(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Upload Form */}
                        <form onSubmit={uploadDocument} className="bg-slate-50 rounded-2xl p-6 mb-6">
                            <h4 className="font-bold text-text mb-4">Upload New Document</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2 block">Document Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-text focus:outline-none focus:border-primary transition-all"
                                        value={documentForm.name}
                                        onChange={(e) => setDocumentForm({ ...documentForm, name: e.target.value })}
                                        placeholder="e.g., Final Audit Report"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2 block">Description (Optional)</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-text focus:outline-none focus:border-primary transition-all"
                                        value={documentForm.description}
                                        onChange={(e) => setDocumentForm({ ...documentForm, description: e.target.value })}
                                        placeholder="Brief description"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2 block">File</label>
                                <input
                                    type="file"
                                    required
                                    className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-text focus:outline-none focus:border-primary transition-all"
                                    onChange={(e) => setDocumentForm({ ...documentForm, file: e.target.files?.[0] || null })}
                                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                                />
                                <p className="text-xs text-text/40 mt-2">Accepted: PDF, Word, Excel, Images (Max 10MB)</p>
                            </div>
                            <button
                                type="submit"
                                disabled={uploadingDocument}
                                className="w-full bg-primary text-white rounded-xl py-3 font-bold hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                <Upload size={18} />
                                {uploadingDocument ? 'Uploading...' : 'Upload Document'}
                            </button>
                        </form>

                        {/* Document List */}
                        <div>
                            <h4 className="font-bold text-text mb-4">Documents ({documents.length})</h4>
                            {documents.length === 0 ? (
                                <div className="text-center py-12 bg-slate-50 rounded-2xl">
                                    <FileText size={48} className="text-text/10 mx-auto mb-4" />
                                    <p className="text-text/40 font-medium">No documents uploaded yet</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {documents.map(doc => (
                                        <div key={doc.id} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:border-primary/30 transition-all">
                                            {editingDocument?.id === doc.id ? (
                                                <div className="flex-1 grid grid-cols-2 gap-3 mr-4">
                                                    <input
                                                        type="text"
                                                        className="bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm"
                                                        value={editingDocument.name}
                                                        onChange={(e) => setEditingDocument({ ...editingDocument, name: e.target.value })}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm"
                                                        value={editingDocument.description || ''}
                                                        onChange={(e) => setEditingDocument({ ...editingDocument, description: e.target.value })}
                                                        placeholder="Description"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-4 flex-1">
                                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                                        <FileText size={20} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-bold text-text">{doc.name}</div>
                                                        {doc.description && <div className="text-sm text-text/60">{doc.description}</div>}
                                                        <div className="text-xs text-text/40 mt-1">
                                                            {new Date(doc.uploaded_at).toLocaleDateString()} • {doc.file_size ? `${(doc.file_size / 1024).toFixed(1)} KB` : 'Unknown size'}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="flex gap-2">
                                                {editingDocument?.id === doc.id ? (
                                                    <>
                                                        <button onClick={updateDocument} className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
                                                            <CheckCircle2 size={16} />
                                                        </button>
                                                        <button onClick={() => setEditingDocument(null)} className="p-2 bg-slate-200 text-text rounded-lg hover:bg-slate-300 transition-all">
                                                            <X size={16} />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button onClick={() => downloadDocument(doc)} className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all">
                                                            <Download size={16} />
                                                        </button>
                                                        <button onClick={() => setEditingDocument(doc)} className="p-2 bg-slate-100 text-text rounded-lg hover:bg-slate-200 transition-all">
                                                            <Edit2 size={16} />
                                                        </button>
                                                        <button onClick={() => deleteDocument(doc)} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-all">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
