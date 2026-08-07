import { Outlet } from 'react-router-dom';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
