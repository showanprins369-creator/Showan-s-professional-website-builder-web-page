import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const projects = [
    {
      title: 'Restaurant Website Concept',
      type: 'Fine Dining / Hospitality',
      problem: 'Needed a modern, appetizing menu display and easy reservation system.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&aspect=16:9',
    },
    {
      title: 'Karoo Butcher Shop Website',
      type: 'Local Retail',
      problem: 'Wanted to showcase local meat products and provide easy contact for bulk orders.',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800&aspect=16:9',
    },
    {
      title: 'Coffee Shop Landing Page',
      type: 'Café / Local Business',
      problem: 'A single page to highlight brewing methods, location, and opening hours.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800&aspect=16:9',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">Portfolio</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Featured Work
          </h3>
          <p className="text-zinc-400 text-lg">
            Examples of modern, performant websites built to convert visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 group block"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full font-medium">
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gold-500 text-xs font-semibold tracking-wider uppercase mb-2">
                  {project.type}
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{project.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  <strong className="text-zinc-300 font-medium block mb-1">The Goal:</strong>
                  {project.problem}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
