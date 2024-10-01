import { useState } from 'react';
import axios from 'axios';

export default function TransactionForm({ userId }) {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { type, amount, description, userId };

    await axios.post('http://localhost:5000/api/transactions', newTransaction);
    setType('');
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Add New Transaction</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Transaction Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter Transaction Type"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-indigo-500 text-white font-bold py-3 rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Submit Transaction
      </button>
    </form>
      <div>
      <hr className="mt-8 border-t-4 border-black" />
      </div>
    </div>
  );
}
