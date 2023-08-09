import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://upfajpmdrqtipqqhefxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZmFqcG1kcnF0aXBxcWhlZnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzOTU5NzEsImV4cCI6MjAwNjk3MTk3MX0.JiIcRuVva8rL0dIJ5kpCRd4sslGKJjGAHXyKaTtZZjA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
