import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient('https://qztzoxebmhnkkpfqpvix.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dHpveGVibWhua2twZnFwdml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwMTQyNTQsImV4cCI6MTk4MDU5MDI1NH0.9u9nP0BLxfgjCiAPooT9VpmINiWG-Q-sqqggzfn1uOo')