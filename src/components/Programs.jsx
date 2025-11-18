import { motion } from 'framer-motion';
import { Activity, Timer, Flame } from 'lucide-react';

const programs = [
  {
    icon: Activity,
    title: 'Strength Training',
    desc: 'Progressive overload programs focused on compound lifts and form.',
  },
  {
    icon: Timer,
    title: 'HIIT & Conditioning',
    desc: 'Short, explosive sessions built to challenge your limits and endurance.',
  },
  {
    icon: Flame,
    title: 'Fat Loss & Sculpt',
    desc: 'Balanced plans combining cardio, strength, and mobility for aesthetics.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Programs built for results
          </motion.h2>
          <p className="mt-3 text-slate-300">
            We take a minimalist approach to programming—clear plans, measured progress, and high-impact sessions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/30">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
