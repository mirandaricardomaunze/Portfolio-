import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="App">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout; 