import { motion } from 'motion/react';
import { LayoutTemplate, Utensils, ShoppingCart, Rocket, RefreshCcw, Smartphone, PenTool } from 'lucide-react';

export const Services = () => {
  const services = [
    { icon: <LayoutTemplate />, title: 'Business Websites', desc: 'Professional sites for local services and agencies.' },
    { icon: <Utensils />, title: 'Restaurant Websites', desc: 'Showcase menus, locations, and reservations.' },
    { icon: <ShoppingCart />, title: 'Online Stores', desc: 'E-commerce platforms to sell products 24/7.' },
    { icon: <Rocket />, title: 'Landing Pages', desc: 'High-converting pages for campaigns and ads.' },
    { icon: <RefreshCcw />, title: 'Website Redesign', desc: 'Revamp your outdated site into a modern experience.' },
    { icon: <Smartphone />, title: 'Mobile Optimization', desc: 'Ensure perfect display on all phones and tablets.' },
    { icon: <PenTool />, title: 'Website Maintenance', desc: 'Keep your site secure, updated, and fast.' },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Everything you need to succeed online
          </h3>
          <p className="text-zinc-400 text-lg">
            Clear, simple, and effective digital solutions tailored to local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-gold-500/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-300 group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-colors mb-5">
                {service.icon}
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">{service.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
