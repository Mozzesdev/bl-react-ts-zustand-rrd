import { useAppStore } from "@/store/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const status = useAppStore((state) => state.status);
  const location = useLocation();

  if (status === "loading" || status === "idle") {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (status !== "authenticated") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children ?? <Outlet />}</>;
};

export default ProtectedRoute;
