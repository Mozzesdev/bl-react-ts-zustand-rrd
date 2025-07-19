import { useAppStore } from '@/store/store';

const DashboardPage = () => {
  const user = useAppStore((state) => state.user);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p>
        Welcome, <span className="font-semibold">{user?.name ?? 'User'}</span>!
      </p>
      <p>This is a protected route.</p>
    </div>
  );
};

export default DashboardPage;
