import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-gray-500">
          <p>© 2024 My modern app</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
