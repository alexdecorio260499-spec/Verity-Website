import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle2, Circle, Clock, MessageSquare, ChevronRight, Layout, Calendar, Bell, LogOut, FileText, Download } from 'lucide-react';
import { useAuth } from '../lib/useAuth';

interface Project {
    id: string;
    name: string;
    status: string;
}

interface RoadmapStep {
    id: string;
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
}

const ClientPortal: React.FC = () => {
    const { user, signOut } = useAuth();
    const [project, setProject] = useState<Project | null>(null);
    const [steps, setSteps] = useState<RoadmapStep[]>([]);
    const [loading, setLoading] = useState(true);
    const [documents, setDocuments] = useState<ClientDocument[]>([]);
    const [activeTab, setActiveTab] = useState<'roadmap' | 'documents'>('roadmap');

    useEffect(() => {
        if (user) {
            fetchMyProject();
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            fetchMyDocuments();
        }
    }, [user]);

    const fetchMyProject = async () => {
        if (!user) return;

        const { data: projects } = await supabase
            .from('projects')
            .select('*')
            .eq('client_id', user.id)
            .limit(1)
            .single();

        if (projects) {
            setProject(projects);
            const { data: steps } = await supabase
                .from('roadmap_steps')
                .select('*')
                .eq('project_id', projects.id)
                .order('order_index', { ascending: true });
            if (steps) setSteps(steps);
        }
        setLoading(false);
    };

    const fetchMyDocuments = async () => {
        if (!user) return;

        const { data } = await supabase
            .from('client_documents')
            .select('*')
            .eq('client_id', user.id)
            .order('uploaded_at', { ascending: false });

        if (data) setDocuments(data);
    };

    const downloadDocument = async (doc: ClientDocument) => {
        const { data } = await supabase.storage
            .from('client-documents')
            .createSignedUrl(doc.file_url, 60);

        if (data?.signedUrl) {
            window.open(data.signedUrl, '_blank');
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-cta text-white p-6 flex flex-col gap-8 hidden md:flex h-screen sticky top-0">
                <div className="font-heading font-black text-2xl tracking-tighter">
                    NEXUS<span className="text-primary">.</span> PORTAL
                </div>

                <nav className="flex-1 space-y-2">
                    <button
                        onClick={() => setActiveTab('roadmap')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'roadmap' ? 'bg-primary/20 text-primary' : 'text-white/60 hover:bg-white/5'}`}
                    >
                        <Layout size={18} /> Roadmap
                    </button>
                    <button
                        onClick={() => setActiveTab('documents')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'documents' ? 'bg-primary/20 text-primary' : 'text-white/60 hover:bg-white/5'}`}
                    >
                        <FileText size={18} /> Documents
                    </button>
                </nav>

                <div className="pt-8 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black text-xs">
                            {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-[10px] font-black text-white truncate">{user?.user_metadata?.full_name || 'Client'}</p>
                            <p className="text-[8px] font-bold text-white/30 truncate uppercase tracking-widest leading-tight">Project Member</p>
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
            <div className="flex-1 overflow-y-auto h-screen">
                {/* Mobile Header */}
                <div className="md:hidden bg-white p-4 border-b border-slate-100 flex justify-between items-center sticky top-0 z-50">
                    <div className="font-heading font-black text-xl tracking-tighter">
                        NEXUS<span className="text-primary">.</span> PORTAL
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setActiveTab(activeTab === 'roadmap' ? 'documents' : 'roadmap')}
                            className="p-2 text-text/40 hover:text-primary transition-colors"
                        >
                            {activeTab === 'roadmap' ? <FileText size={20} /> : <Layout size={20} />}
                        </button>
                        <button
                            onClick={signOut}
                            className="p-2 text-text/40 hover:text-red-500 transition-colors"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>

                <div className="p-12 max-w-7xl mx-auto">
                    {/* Header */}
                    <header className="flex justify-between items-center mb-12">
                        <div>
                            <h1 className="text-3xl font-heading font-black text-text">
                                {project?.name || "Initializing..."}
                            </h1>
                            <p className="text-text/40 font-medium">
                                Your strategic accompaniment is in progress. Real-time updates on your operational transformation.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-center min-w-[120px]">
                                <div className="text-2xl font-black text-primary font-heading">
                                    {steps.length > 0 ? Math.round((steps.filter(s => s.status === 'completed').length / steps.length) * 100) : 0}%
                                </div>
                                <div className="text-[10px] text-text/30 font-bold uppercase tracking-widest">Completion</div>
                            </div>
                            <div className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-center min-w-[120px]">
                                <div className="text-2xl font-black text-secondary font-heading">
                                    {steps.find(s => s.status !== 'completed')?.title?.split(' ')[1] || 'Final'}
                                </div>
                                <div className="text-[10px] text-text/30 font-bold uppercase tracking-widest">Current Stage</div>
                            </div>
                        </div>
                    </header>

                    {/* Roadmap Section */}
                    {activeTab === 'roadmap' && (
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-between mb-16">
                                <h2 className="text-2xl font-heading font-black text-text">Implementation Timeline</h2>
                                <div className="flex items-center gap-2 text-text/30 text-xs font-bold uppercase tracking-widest">
                                    <Calendar size={14} /> Last Update: Today, 2:45 PM
                                </div>
                            </div>

                            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-10 before:bottom-10 before:w-1 before:bg-slate-100">
                                {steps.map((step, idx) => {
                                    const isCompleted = step.status === 'completed';
                                    const isInProgress = step.status === 'in_progress';
                                    const isPending = !isCompleted && !isInProgress;

                                    return (
                                        <div key={step.id} className="flex gap-8 group">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center z-10 shadow-lg transition-all ${isCompleted ? 'bg-primary text-white scale-110' :
                                                isInProgress ? 'bg-amber-400 text-white scale-110 animate-pulse' :
                                                    'bg-white text-text/10'
                                                }`}>
                                                {isCompleted ? <CheckCircle2 size={22} /> : isInProgress ? <Clock size={22} /> : <Circle size={22} />}
                                            </div>
                                            <div className={`flex-1 p-8 rounded-[2rem] border transition-all ${isCompleted ? 'bg-green-50 border-green-100' :
                                                isInProgress ? 'bg-white border-primary shadow-2xl shadow-indigo-500/10' :
                                                    'bg-white/50 border-slate-100 hover:border-slate-200'
                                                }`}>
                                                <div className="flex justify-between items-center mb-4">
                                                    <h3 className={`text-xl font-heading font-black ${isCompleted ? 'text-text/30' : 'text-text'}`}>
                                                        {step.title}
                                                    </h3>
                                                    {isInProgress && (
                                                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">Active Now</span>
                                                    )}
                                                    {isCompleted && (
                                                        <span className="px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Completed</span>
                                                    )}
                                                    {isPending && (
                                                        <span className="px-3 py-1 bg-slate-100 text-text/30 text-[10px] font-black uppercase tracking-widest rounded-lg">Pending</span>
                                                    )}
                                                </div>
                                                <p className={`text-base leading-relaxed font-body ${isCompleted ? 'text-text/20' : 'text-text/60'}`}>
                                                    {step.description || "Project phase details are being finalized by your consultant."}
                                                </p>

                                                {isInProgress && (
                                                    <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                                                        <div className="p-3 bg-slate-50 rounded-2xl text-primary"><MessageSquare size={18} /></div>
                                                        <div>
                                                            <p className="text-xs text-text/30 font-bold uppercase tracking-wider mb-1">Consultant Note</p>
                                                            <p className="text-sm text-text font-medium italic">"We've completed the initial mapping. Setting up the stealth workflows tomorrow."</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}

                                {steps.length === 0 && (
                                    <div className="text-center py-20 bg-white/50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                        <Layout size={48} className="text-text/50 mb-6 mx-auto opacity-10" />
                                        <p className="text-text/20 font-black uppercase tracking-widest">Roadmap is being generated...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Documents Section */}
                    {activeTab === 'documents' && (
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-heading font-black text-text mb-8">Your Documents</h2>
                            {documents.length === 0 ? (
                                <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                    <FileText size={64} className="text-text/10 mx-auto mb-6" />
                                    <p className="text-text/40 font-bold text-lg">No documents available yet</p>
                                    <p className="text-text/30 text-sm mt-2">Your consultant will upload documents here as they become available</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {documents.map(doc => (
                                        <div key={doc.id} className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-lg shadow-indigo-500/5 hover:shadow-xl transition-all">
                                            <div className="flex items-start gap-4">
                                                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                                    <FileText size={28} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-text text-lg mb-1">{doc.name}</h3>
                                                    {doc.description && <p className="text-text/60 text-sm mb-3">{doc.description}</p>}
                                                    <div className="text-xs text-text/40 mb-4">
                                                        Uploaded {new Date(doc.uploaded_at).toLocaleDateString()} • {doc.file_size ? `${(doc.file_size / 1024).toFixed(1)} KB` : 'Unknown size'}
                                                    </div>
                                                    <button
                                                        onClick={() => downloadDocument(doc)}
                                                        className="w-full bg-primary text-white rounded-xl py-3 px-4 font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                                    >
                                                        <Download size={18} />
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientPortal;
