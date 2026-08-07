import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Projects } from '@/pages/Projects';
import { Ajaza } from '@/pages/projects/Ajaza';
import { Creeks } from '@/pages/projects/Creeks';
import { Videos } from '@/pages/Videos';
import { Cart } from '@/pages/Cart';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle Mobile Burger Menu
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Burger Menu Toggle
      if (target.closest('.header-burger-btn') || target.closest('.header-menu-bg')) {
        document.body.classList.toggle('header--menu-open');
        document.body.classList.toggle('sqs-mobile-nav-open');
      }
      
      // Intercept Links for React Router SPA Navigation
      const link = target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        // Only intercept internal links
        if (url.origin === window.location.origin) {
          // Remove .html from the path if present (Squarespace exports sometimes have .html)
          let pathname = url.pathname.replace(/\.html$/, '');
          
          // Map Squarespace paths to our paths if needed
          if (pathname === '/creeks') pathname = '/projects/creeks';
          if (pathname === '/ajaza') pathname = '/projects/ajaza';
          
          if (!pathname.startsWith('/api/') && !pathname.includes('.')) {
            e.preventDefault();
            
            // Close menu if open
            document.body.classList.remove('header--menu-open');
            document.body.classList.remove('sqs-mobile-nav-open');
            
            navigate(pathname);
            window.scrollTo(0, 0);
          }
        }
      }
    };
    
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/ajaza" element={<Ajaza />} />
        <Route path="projects/creeks" element={<Creeks />} />
        <Route path="videos" element={<Videos />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
