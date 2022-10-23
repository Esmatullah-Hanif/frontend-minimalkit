import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient('https://abhxwgvatqovevkjxlyy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaHh3Z3ZhdHFvdmV2a2p4bHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwMDI1MTcsImV4cCI6MTk4MDU3ODUxN30.81UKLfbdZqsPco1SC8vi2nf6wJNWbCbn6Yv5Tkn_B-0')