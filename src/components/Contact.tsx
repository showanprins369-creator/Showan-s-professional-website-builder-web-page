import { motion } from 'motion/react';
import { Mail, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to grow your business online?
            </h3>
            <p className="text-zinc-400 text-lg mb-10">
              Let's build a website that works as hard as you do. Reach out today for a free consultation.
            </p>

            <div className="space-y-6 mb-10">
              <a href="https://wa.me/27715455484" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-300 hover:text-gold-500 group transition-colors">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mr-4 group-hover:border-gold-500/50">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-lg">+27 71 545 5484</span>
              </a>
              <a href="mailto:showanprins369@gmail.com" className="flex items-center text-zinc-300 hover:text-gold-500 group transition-colors">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mr-4 group-hover:border-gold-500/50">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">showanprins369@gmail.com</span>
              </a>
              <div className="flex items-center text-zinc-300">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">Graaff-Reinet, South Africa</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/showan.prins.9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-gold-500 hover:text-zinc-950 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/showan_prins?igsh=anVxYTdhOXYzZHlx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-gold-500 hover:text-zinc-950 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Business Type</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all appearance-none cursor-pointer">
                  <option>Restaurant</option>
                  <option>Retail Shop</option>
                  <option>Local Service</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-zinc-950 font-bold py-4 rounded-xl transition-colors duration-200 mt-2"
              >
                Let's Build It
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
