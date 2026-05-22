import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
];

export const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
          {/* Wordmark */}
          <Link to="/" className="text-2xl font-bold font-serif tracking-wider text-white hover:text-[#7ca982] transition-colors duration-300">
            UpTown<span className="text-[#7ca982]">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 pb-0.5 ${
                  location.pathname === to ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                {location.pathname === to && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#7ca982]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <Link
              to="/booking"
              className="relative group ml-2 bg-gradient-to-r from-[#7ca982] to-[#8ad8a5] border border-transparent hover:border-emerald-800 text-[#050505] hover:text-white text-sm font-semibold tracking-[0.12em] uppercase px-6 py-2.5 rounded-full transition-all duration-500 hover:from-emerald-900 hover:to-emerald-950 shadow-[0_0_20px_rgba(124,169,130,0.3)] hover:shadow-none"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-4xl font-serif text-white hover:text-[#7ca982] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="mt-4 bg-gradient-to-r from-[#7ca982] to-[#8ad8a5] text-[#050505] hover:text-white hover:from-emerald-900 hover:to-emerald-950 text-lg font-semibold tracking-widest uppercase px-10 py-4 rounded-full transition-all duration-500"
            >
              Book a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
