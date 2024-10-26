import React from 'react'
import { createClient } from '@supabase/supabase-js'

// supabase client keys and url
const supabaseUrl = "https://zzbgglheuqzbwueaeino.supabase.co/"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6YmdnbGhldXF6Ynd1ZWFlaW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTMxNDYsImV4cCI6MjA0NTUyOTE0Nn0.hrWh4QXGfrol8LFHd5_AjryOZL8t4kEsDM25ITXH2xo"

// supabase client
const supabaseClient = createClient(supabaseUrl, apiKey);

const SupabaseConnection: React.FC = () => {

  return (
    <div></div>
  )
}

export default SupabaseConnection