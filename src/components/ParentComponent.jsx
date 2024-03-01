import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { Redirect } from 'react-router-dom';

function ParentComponent() {
  const [redirect, setRedirect] = useState(false);

  const handleRegistrationSuccess = () => {
    setRedirect(true);
  };

  return (
    <div>
      {redirect && <Redirect to="/login" />}
      <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
    </div>
  );
}

export default ParentComponent;
