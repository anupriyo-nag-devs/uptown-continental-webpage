import { motion } from 'framer-motion';
import { TabbedWindow } from '../components/TabbedWindow';
import { CalendarDays, Clock3, Users, Utensils, Phone } from 'lucide-react';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, transition: { duration: 0.25 } }
};

const inputClass =
  'w-full px-4 py-3.5 rounded-xl text-sm text-white font-light placeholder-gray-600 outline-none transition-all duration-300 border border-white/[0.08] focus:border-[#7ca982]/50 focus:ring-1 focus:ring-[#7ca982]/30';
const inputStyle = {
  background: 'rgba(255,255,255,0.03)',
  colorScheme: 'dark' as const,
};

const LabelEl = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#7ca982] mb-2.5">
    {children}
  </label>
);

export const Booking = () => (
  <motion.div
    variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="pt-28 pb-28 px-4 md:px-8 min-h-screen bg-[#050505] relative overflow-hidden"
  >
    {/* Ambient background glows */}
    <div className="absolute top-1/4 left-1/5 w-[600px] h-[600px] bg-emerald-900/[0.07] rounded-full blur-[180px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-[#7ca982]/[0.04] rounded-full blur-[160px] pointer-events-none" />

    <div className="relative z-10">
      <TabbedWindow
        title="Table Reservations"
        subtitle="Secure your seating at UpTown Continental. For parties exceeding 8 guests, please contact our concierge team directly."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-2">

          {/* ═══ Form Column ═══ */}
          <form className="lg:col-span-2 space-y-7">

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <LabelEl><CalendarDays size={10} className="inline mr-1 -mt-0.5" />Select Date</LabelEl>
                <input type="date" style={inputStyle} className={inputClass} />
              </div>
              <div>
                <LabelEl><Clock3 size={10} className="inline mr-1 -mt-0.5" />Preferred Time</LabelEl>
                <div className="relative">
                  <select
                    style={inputStyle}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option style={{ background: '#141414', color: '#fff' }}>17:30 — Early Dinner</option>
                    <option style={{ background: '#141414', color: '#fff' }}>19:00 — Prime Seating</option>
                    <option style={{ background: '#141414', color: '#fff' }}>21:15 — Late Lounge</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <LabelEl><Users size={10} className="inline mr-1 -mt-0.5" />Party Size</LabelEl>
                <div className="relative">
                  <select
                    style={inputStyle}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option style={{ background: '#141414', color: '#fff' }}>2 Guests — Intimate</option>
                    <option style={{ background: '#141414', color: '#fff' }}>4 Guests — Standard</option>
                    <option style={{ background: '#141414', color: '#fff' }}>6 Guests — Executive</option>
                    <option style={{ background: '#141414', color: '#fff' }}>8 Guests — Grand Table</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>
              <div>
                <LabelEl><Utensils size={10} className="inline mr-1 -mt-0.5" />Dining Zone</LabelEl>
                <div className="relative">
                  <select
                    style={inputStyle}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option style={{ background: '#141414', color: '#fff' }}>The Main Grand Room</option>
                    <option style={{ background: '#141414', color: '#fff' }}>Rooftop Terrace Glasshouse</option>
                    <option style={{ background: '#141414', color: '#fff' }}>The Sommelier Counter</option>
                    <option style={{ background: '#141414', color: '#fff' }}>The Private Salon</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <LabelEl>Special Accommodations</LabelEl>
              <textarea
                rows={4}
                placeholder="Anniversaries, dietary requirements, preferred wine service configurations..."
                style={{ ...inputStyle, resize: 'none' } as React.CSSProperties}
                className={inputClass}
              />
            </div>

            {/* CTA Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="w-full py-4.5 py-[1.1rem] rounded-2xl font-bold tracking-[0.18em] uppercase text-xs transition-all duration-500 bg-gradient-to-r from-[#7ca982] to-[#8ad8a5] text-[#050505] hover:text-white hover:from-emerald-800 hover:to-emerald-900 border border-transparent shadow-[0_0_20px_rgba(124,169,130,0.3)] hover:shadow-none"
            >
              Confirm Reservation
            </motion.button>
          </form>

          {/* ═══ Policy Sidecard ═══ */}
          <div
            className="rounded-3xl p-8 border border-white/[0.06] flex flex-col gap-8 h-fit"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Policy */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#7ca982] mb-4">House Policy</p>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                We maintain a strict 15-minute grace window. Dress code is smart-casual to formal. Reservations are held for 15 minutes past arrival time.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

            {/* Hours */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-600 mb-4">Hours of Service</p>
              <p className="text-white text-sm font-medium mb-1">Wednesday — Sunday</p>
              <p className="text-gray-500 text-xs mb-4">17:00 PM — 00:00 AM</p>
              <p className="text-gray-600 text-xs italic font-light">Closed Monday & Tuesday for private events.</p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

            {/* Contact */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-600 mb-4">Concierge Line</p>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-[#7ca982]/80 hover:text-[#7ca982] transition-colors duration-200 text-sm font-medium"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7ca982]/10 border border-[#7ca982]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-[#7ca982]" />
                </div>
                +1 (234) 567-890
              </a>
            </div>
          </div>

        </div>
      </TabbedWindow>
    </div>
  </motion.div>
);