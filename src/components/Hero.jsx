import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-40 pb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                Minimal. Strong. Focused.
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Elevate your fitness with a modern, minimalist gym experience
              </h1>
              <p className="mt-5 text-slate-300 text-base sm:text-lg">
                Train with purpose in a distraction-free environment. Smart programs, elite coaches, and beautiful spaces designed for progress.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#plans" className="inline-flex items-center rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 hover:opacity-95">
                  Start Your Trial
                </a>
                <a href="#programs" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Explore Programs
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
