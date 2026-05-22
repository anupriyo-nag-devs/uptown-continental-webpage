import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface TabbedWindowProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const TabbedWindow: React.FC<TabbedWindowProps> = ({ children, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
    className="max-w-6xl mx-auto relative"
  >
    {/* Outer glow frame */}
    <div className="absolute inset-0 rounded-[2.5rem] bg-emerald-900/10 blur-[100px] -z-10 scale-105 pointer-events-none" />

    {/* The Glass Frame */}
    <div
      className="relative rounded-[2.5rem] overflow-hidden border border-emerald-800/20 bg-emerald-950/[0.05]"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.07)',
        backdropFilter: 'blur(64px)',
      }}
    >
      {/* Window Chrome Bar */}
      <div className="flex items-center px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
        {/* Traffic lights */}
        <div className="flex items-center gap-2.5">
          <button className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all flex items-center justify-center group">
            <X size={7} className="text-[#7a1a17] opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-110 transition-all flex items-center justify-center group">
            <Minus size={7} className="text-[#7a5600] opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-110 transition-all flex items-center justify-center group">
            <Plus size={7} className="text-[#0a4a10] opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-8 md:p-14 min-h-[520px]">
        {/* Ambient glow blobs */}
        <div className="absolute top-[-15%] left-[-8%] w-[480px] h-[480px] bg-[#7ca982]/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-emerald-800/[0.08] rounded-full blur-[140px] pointer-events-none" />

        {/* Header */}
        <div className="mb-12 mt-2 relative z-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ca982] mb-4">UpTown Continental</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.05] mb-5">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Thin divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);