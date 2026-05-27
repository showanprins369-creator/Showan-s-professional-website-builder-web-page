import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Clock, LineChart, Cpu, Banknote } from 'lucide-react';

export const WhyChooseMe = () => {
  const reasons = [
    { icon: <Cpu />, title: 'Professional Modern Designs', desc: 'Websites that look like they belong in 2024.' },
    { icon: <Clock />, title: 'Fast Turnaround Time', desc: 'Get your business online quickly without delays.' },
    { icon: <ShieldCheck />, title: 'Mobile-Friendly Websites', desc: 'Flawless experience on every screen size.' },
    { icon: <Banknote />, title: 'Affordable Pricing', desc: 'High-quality work that fits local business budgets.' },
    { icon: <HeartHandshake />, title: 'Personal Support', desc: 'Direct communication. No confusing agency runarounds.' },
    { icon: <LineChart />, title: 'Built for Growth', desc: 'Scalable architecture that grows with your business.' },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Me</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Why Businesses Work With Me
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{reason.title}</h4>
                <p className="text-zinc-400 text-sm">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
