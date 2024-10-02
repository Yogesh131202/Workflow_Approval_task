import { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';

export default function EDashboard() {
  // const userId = '1234'; // Replace this with dynamic user ID after auth implementation

  // ####################################
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch dynamic user ID from JWT or session
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT
      console.log("Decoded Token:", decodedToken);
      setUserId(decodedToken.id); // Set the user ID
    }
  }, []);

  if (!userId) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <TransactionForm userId={userId} />
      <TransactionTable userId={userId} />
    </div>
  );
}
