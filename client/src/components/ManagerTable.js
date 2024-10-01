import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import '../index'; // Custom styles for table

export default function ManagerTable({ userId }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/transactions?userId=${userId}`
      );
      setTransactions(response.data);
    };
    fetchTransactions();
  }, [userId]);

  // Function to handle status update for each transaction
  const handleStatusUpdate = async (transactionId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/transactions/${transactionId}`, {
        status: newStatus,
      });

      // Update local state to reflect the status change
      setTransactions((prevTransactions) =>
        prevTransactions.map((transaction) =>
          transaction.id === transactionId
            ? { ...transaction, status: newStatus }
            : transaction
        )
      );
    } catch (error) {
      console.error('Failed to update transaction status:', error);
    }
  };

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        header: 'Type',
        accessorKey: 'type',
      },
      {
        header: 'Amount',
        accessorKey: 'amount',
      },
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              className="px-2 py-1 bg-green-500 text-white rounded"
              onClick={() => handleStatusUpdate(row.original.id, 'approved')}
            >
              Approve
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => handleStatusUpdate(row.original.id, 'rejected')}
            >
              Reject
            </button>
          </div>
        ),
      },
    ],
    []
  );

  // Create the table using the useReactTable hook
  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div>
        <h1 className="mt-5 text-xl font-bold text-center">All Transactions</h1>
      </div>
      <div className="table-container">
        <table className="tanstack-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                // Dynamically set row background color based on the transaction status
                className={
                  row.original.status === 'approved'
                    ? 'bg-green-200'
                    : row.original.status === 'rejected'
                    ? 'bg-red-200'
                    : ''
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
