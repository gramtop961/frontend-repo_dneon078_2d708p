import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Essential',
    price: '$29',
    period: 'mo',
    features: ['Gym access', 'Starter programs', 'Locker & showers'],
    highlight: false,
  },
  {
    name: 'Performance',
    price: '$59',
    period: 'mo',
    features: ['All Essential', 'Instructor-led HIIT', 'Recovery area access'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '$99',
    period: 'mo',
    features: ['All Performance', '1:1 coaching', 'Priority booking'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="mt-3 text-slate-300">Pick a plan that suits your goals. Upgrade or cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${t.highlight ? 'bg-gradient-to-b from-white/10 to-white/5 border-white/20' : 'bg-white/5 border-white/10'} rounded-2xl border p-6 backdrop-blur`}
            >
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">{t.price}</span>
                <span className="text-slate-300">/{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-sm text-slate-300">{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-lg ${t.highlight ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-rose-500/30' : 'bg-white/10 text-white hover:bg-white/15'}`}>
                Choose {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
