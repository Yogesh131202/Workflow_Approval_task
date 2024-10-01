import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';

export default function Dashboard() {
  const userId = '1234'; // Replace this with dynamic user ID after auth implementation

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <TransactionForm userId={userId} />
      <TransactionTable userId={userId} />
    </div>
  );
}
