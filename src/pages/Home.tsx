import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ChefHat, Wine, Leaf, Star, ArrowRight, Clock, MapPin } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
};

const pageEnter: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } }
};

const features = [
  {
    title: 'The Private Room',
    desc: 'An intimate, glass-enclosed salon for bespoke gatherings, corporate evenings, and milestone celebrations.',
    icon: <Star size={26} />,
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: "Chef's Counter",
    desc: "Sit front row to the culinary theatre with an exclusive 12-course chef's tasting experience.",
    icon: <ChefHat size={26} />,
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Reserve Lounge',
    desc: 'Pre-dinner cocktails and rare vintage pours in a deeply ambient, candlelit setting.',
    icon: <Wine size={26} />,
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  }
];

export const Home = () => {
  return (
    <motion.div
      variants={pageEnter}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-x-hidden bg-[#050505]"
    >
      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="relative h-screen min-h-[760px] flex items-center justify-center overflow-hidden">
        {/* Background image with subtle zoom */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=85&w=2500"
            alt="UpTown Continental dining room"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/20 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-900/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Hero Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#7ca982] text-xs font-semibold tracking-[0.3em] uppercase mb-7">
            The Pinnacle of Fine Dining
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3rem,10vw,7.5rem)] font-bold font-serif text-white leading-[1.0] tracking-[-0.02em] mb-8"
          >
            Continental<br />
            tradition,{' '}
            <span className="italic font-light text-white/75">elevated.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Experience a symphony of flavors curated by Michelin-trained chefs.
            An unforgettable journey of taste, texture, and atmosphere.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/booking"
              className="group flex items-center gap-3 bg-gradient-to-r from-[#7ca982] to-[#8ad8a5] text-[#050505] font-bold tracking-wide px-9 py-4 rounded-full transition-all duration-500 hover:from-emerald-800 hover:to-emerald-900 hover:text-white shadow-[0_0_40px_rgba(124,169,130,0.35)] hover:-translate-y-0.5 text-sm uppercase"
            >
              Reserve Your Table
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/menu"
              className="flex items-center gap-2 border border-white/20 text-white hover:border-white/50 hover:bg-white/5 font-semibold px-9 py-4 rounded-full transition-all duration-300 backdrop-blur-sm text-sm uppercase tracking-wide"
            >
              Explore the Menu
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-600">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* ═══════════ 2. PHILOSOPHY ═══════════ */}
      <section className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=1000"
                alt="Chef plating a dish"
                className="w-full h-full object-cover"
              />
              {/* Glass overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
            </div>

            {/* Floating review card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-8 -right-4 md:-right-8 max-w-[260px] rounded-2xl p-6 border border-white/[0.08]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#7ca982] text-[#7ca982]" />
                ))}
              </div>
              <p className="text-white text-sm font-serif italic leading-snug mb-3">"A culinary masterpiece."</p>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#7ca982]">— The Daily Gastronome</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="lg:pl-6"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ca982] mb-5">
              Our Philosophy
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-7 leading-[1.1]">
              A relentless pursuit of<br /> gastronomic perfection.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg font-light leading-relaxed mb-10">
              At UpTown Continental, every plate is a canvas. We source the rarest, most exceptional ingredients from sustainable local farms and international purveyors to craft a menu that defies expectation and honours tradition.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Leaf size={20} />, title: 'Hyper-Seasonal', desc: 'Our menus evolve with micro-seasons to ensure peak freshness.' },
                { icon: <Wine size={20} />, title: 'Master Sommelier', desc: 'A 2,000-bottle cellar curated to pair flawlessly with your evening.' }
              ].map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="p-5 rounded-2xl border border-white/[0.07] hover:border-[#7ca982]/20 transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7ca982]/10 flex items-center justify-center text-[#7ca982] mb-4">
                    {icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 3. FEATURE GRID ═══════════ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1f0f]/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ca982] mb-5">
              The UpTown Experience
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Uncompromising quality<br /> in every detail.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Card */}
                <div
                  className="rounded-[2rem] overflow-hidden border border-white/[0.07] hover:border-[#7ca982]/20 transition-all duration-500 hover:shadow-[0_0_60px_rgba(124,169,130,0.06)] flex flex-col h-full bg-emerald-950/[0.05] backdrop-blur-2xl"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#7ca982]/10 flex items-center justify-center text-[#7ca982] mb-5">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#7ca982] transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed flex-1">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. CTA ═══════════ */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-4xl mx-auto text-center relative"
        >
          {/* Glow blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7ca982]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* CTA card */}
          <div
            className="relative rounded-[2.5rem] p-10 md:p-20 border border-emerald-800/20 bg-emerald-950/[0.05]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(32px)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
            }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ca982] mb-6">Reserve Tonight</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Join us for an evening.
            </h2>
            <p className="text-gray-400 text-lg font-light mb-12 max-w-lg mx-auto leading-relaxed">
              Tables are highly coveted and released 30 days in advance. Secure your reservation today.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-14">
              {[
                { icon: <Clock size={18} className="text-[#7ca982]" />, primary: 'Wed – Sun', secondary: '5:00 PM – 12:00 AM' },
                { icon: <MapPin size={18} className="text-[#7ca982]" />, primary: 'Downtown Estate', secondary: 'Valet Parking Available' }
              ].map(({ icon, primary, secondary }) => (
                <div key={primary} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#7ca982]/10 border border-[#7ca982]/20 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">{primary}</p>
                    <p className="text-gray-500 text-xs">{secondary}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/booking"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7ca982] to-[#8ad8a5] text-[#050505] hover:text-white hover:from-emerald-800 hover:to-emerald-900 font-bold tracking-wide px-12 py-5 rounded-full transition-all duration-500 shadow-[0_0_40px_rgba(124,169,130,0.3)] hover:-translate-y-0.5 text-sm uppercase"
            >
              Book Your Experience <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
};