import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gemdnwdhfgzbzsariunf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlbWRud2RoZmd6YnpzYXJpdW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5NTkxNDYsImV4cCI6MTk5ODUzNTE0Nn0.HV8nEk0e_Y1xTxd4uT-llhizu-53kqFsAD9ywWTjizE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)