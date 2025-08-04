import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wuzwvhofnoxtbnxmdhwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1end2aG9mbm94dGJueG1kaHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMTY1NzAsImV4cCI6MjA2OTY5MjU3MH0.YSHipZvy6ENXAitpJl7Hya9J0w9ThAESJQjcR6pN68s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
