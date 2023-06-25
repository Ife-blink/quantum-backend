import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv'


dotenv.config();

// First, follow set-up instructions at
// https://js.langchain.com/docs/modules/indexes/vector_stores/integrations/supabase

const privateKey = process.env.SUPABASE_PRIVATE_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);

const url = process.env.SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);

const supabase = createClient('https://qpzyjrdivfpqocdixgrz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwenlqcmRpdmZwcW9jZGl4Z3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxMjg3NzYsImV4cCI6MTk5NzcwNDc3Nn0.Tbdlyf23-Imz-S5EJ7Y9ATL_CaW6H0E3cH4kRzl2wH0');

async function registerUser(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    // Handle registration success or error
  }

  async function loginUser(email, password) {
    const { user, error } = await supabase.auth.signIn({ email, password });
    // Handle login success or error
  }

  registerUser("idasiadiachi@gmail.com", "password", {
    persistSession: false,
  })