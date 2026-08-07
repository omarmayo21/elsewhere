import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '@/assets/images/logo.jpg';

const navItems = [
  { path: '/', label: 'The One Alex' },
  { path: '/projects/creeks', label: 'creeks' },
  { path: '/projects/ajaza', label: 'Ajaza' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/videos', label: 'Videos' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="flex h-nav-height-mobile md:h-nav-height items-center justify-between px-site-gutter-mobile md:px-site-gutter">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <img 
              src={logoUrl} 
              alt="elsewhere" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] tracking-wide font-medium transition-colors hover:opacity-70 uppercase ${
                  location.pathname === item.path ? 'text-black' : 'text-[#666]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-black block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px bg-black block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-black block"
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-nav-height-mobile px-site-gutter-mobile pb-12 overflow-y-auto"
          >
            <div className="flex flex-col h-full mt-12 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-2xl font-medium tracking-wide ${
                    location.pathname === item.path ? 'text-black' : 'text-[#666]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
