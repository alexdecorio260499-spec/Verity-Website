
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qbldqycbunjoqtbyxckm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_lNWwV-n8GYnihjd5E16zJA_dUaFEgRc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
