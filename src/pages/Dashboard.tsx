import { useAppStore } from '@/store/store';

const DashboardPage = () => {
  const user = useAppStore((state) => state.user);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p>
        Bienvenido, <span className="font-semibold">{user?.name ?? 'Usuario'}</span>!
      </p>
      <p>Esta es una ruta protegida.</p>
    </div>
  );
};

export default DashboardPage;
