import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jvysypobeufhtsmryote.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2eXN5cG9iZXVmaHRzbXJ5b3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMTk5NDMsImV4cCI6MjAyMTY5NTk0M30.UFc3G22PmDW5nIjL39NUAOsq7dh-CmkSDaFdv9z3wc8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
