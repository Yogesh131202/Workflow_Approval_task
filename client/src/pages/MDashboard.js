
import { useEffect, useState } from 'react';
import ManagerTable from '../components/ManagerTable';

export default function MDashboard() {

  // ######################
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Assuming the token contains the user ID (after decoding JWT)
    const token = localStorage.getItem('token'); // Fetch JWT token from localStorage or other storage
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT to get payload
      setUserId(decodedToken.id); // Set dynamic userId from the token
    }
  }, []);

  if (!userId) {
    return <p>Loading...</p>;
  }


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <ManagerTable userId={userId} />
    </div>
  );
}
