import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm({ onRegistrationSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/users', { name, email, password });
      setSuccessMessage('Registration successful.');
      onRegistrationSuccess(); // Call the function passed from the parent component
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {error && <div>{error}</div>}
      {successMessage && <div>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
