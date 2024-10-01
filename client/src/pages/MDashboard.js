
import ManagerTable from '../components/ManagerTable';

export default function Dashboard() {
  const userId = '1234'; // Replace this with dynamic user ID after auth implementation

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <ManagerTable userId={userId} />
    </div>
  );
}
