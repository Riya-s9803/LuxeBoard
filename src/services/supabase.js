import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://whfxnicgwsmoypdqrnyi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZnhuaWNnd3Ntb3lwZHFybnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjk0MTAsImV4cCI6MjA4OTg0NTQxMH0.-5ilw8AL1rKCd-3jbhxmu77QzoD0e3Xck79-wU3B-Gc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
