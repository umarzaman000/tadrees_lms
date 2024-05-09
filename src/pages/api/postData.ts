// pages/api/postData.js

import mysql from 'mysql2/promise';

// Function to establish a MySQL connection
const bcrypt = require('bcryptjs');
async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',  // Change to your MySQL host
    user: 'root',  // Change to your MySQL username
    password: 'root',  // Change to your MySQL password
    database: 'tadrees',  // Change to your MySQL database name
  });
  return connection;
}

export default async function handler(req, res) {
  
  if (req.method === 'POST') {
    // Assuming JSON data is sent in the request body
    // const { data } = req.body;

    try {
      // Connect to the database
      const connection = await connectToDatabase();

      // Insert data into a table
      const [rows, fields] = await connection.execute(
       'insert INTO  tadrees.users (users.username,users.email) VALUES ("umer","umer@gmail.com");'
      );

      // Respond with a success message
      res.status(200).json({ message: 'Data inserted successfully!' });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
