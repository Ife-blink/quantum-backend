// Import necessary libraries and modules
import express from 'express';
import bodyParser from 'body-parser';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv'
import cors from 'cors'


dotenv.config();

const privateKey = process.env.SUPABASE_KEY;
const url = process.env.SUPABASE_URL;
// Create an instance of Supabase client
const supabase = createClient(url, privateKey);

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

app.get('/', (req, res) => {
    res.send('this is the server for the Quantum decentralized application 🚅');
})

// Sign-up endpoint
app.post('/signup', async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    console.log(first_name)
    // Generate a pass token (password) for the user
    // const passToken = generatePassToken();
    const passToken = "passypaspas"

    // Store user details in the "users" table in Supabase
   // const { data, error } = await supabase.from('users').insert({ first_name, last_name, email, pass_token: passToken });

    // if (error) {
    //   throw new Error('Failed to store user details');
    // }

    // Send the pass token to the administrator for verification
    // sendPassTokenToAdmin(email, passToken);

    res.status(200).json({ message: `${req.body}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, passToken } = req.body;

    // Authenticate the user using Supabase's authentication API
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password: passToken,
    });

    if (error) {
      throw new Error('Invalid email or pass token');
    }

    // Generate a session token and return it to the client
    const sessionToken = session.access_token;

    res.status(200).json({ message: 'User logged in successfully', sessionToken });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start the Express.js server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });