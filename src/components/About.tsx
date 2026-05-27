import { motion } from 'motion/react';
import { Target, Smartphone, Zap } from 'lucide-react';

export const About = () => {
  const focuses = [
    { icon: <Target className="w-6 h-6" />, title: 'Modern Design', desc: 'Clean, professional interfaces' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile-Friendly', desc: 'Looks great on any device' },
    { icon: <Zap className="w-6 h-6" />, title: 'Fast Loading', desc: 'Optimized for speed and performance' },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">About Showan Prins</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              I help businesses create professional online websites that attract customers and build credibility.
            </h3>
            
            <div className="space-y-4 text-zinc-400 text-lg mb-8">
              <p>
                Based in <strong className="text-white">Graaff-Reinet, South Africa</strong>, I specialize in crafting digital experiences that not only look stunning but drive real business results.
              </p>
              <p>
                People buy from people they trust. My mission is to ensure your website establishes that trust the moment a potential customer lands on it.
              </p>
            </div>

            <a href="#contact" className="inline-flex items-center text-gold-500 font-medium hover:text-gold-400 transition-colors group">
              Let's build your brand
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {focuses.map((focus, index) => (
              <div key={index} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-500 mb-4">
                  {focus.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{focus.title}</h4>
                <p className="text-zinc-400 text-sm">{focus.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
