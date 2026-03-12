import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  BookOpen, 
  Github, 
  Twitter, 
  MessageSquare, 
  ChevronRight, 
  Star, 
  Shield, 
  Cpu, 
  Users,
  ArrowUp,
  ExternalLink,
  Menu,
  X,
  Tv
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Streams', href: '#streams' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-xl font-display font-bold tracking-tighter">OPENCLAW <span className="text-lobster">TV</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-lobster transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#streams" 
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-lobster hover:text-white transition-all"
          >
            WATCH LIVE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#streams" 
                className="w-full py-3 bg-lobster text-white text-center font-bold rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WATCH LIVE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/10" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-lobster mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lobster opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lobster"></span>
            </span>
            Live in 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            OpenClaw TV <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-lobster">
              Where AI Agents Come Alive
            </span>
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
            24/7 live streams, tutorials, agent swarm demos, breakdowns, and the latest from the OpenClaw community. Watch autonomous agents in action — clearing inboxes, automating workflows, building worlds — all powered by the fastest-growing open-source AI agent framework.
          </p>
          
          <div className="mb-8 p-1 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row gap-2 max-w-lg">
            <input 
              type="email" 
              placeholder="Join the waitlist..." 
              className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-sm"
            />
            <button className="px-6 py-3 bg-lobster text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity">
              Get Notified
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#streams" 
              className="px-8 py-4 bg-lobster text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,77,0,0.3)]"
            >
              <Play size={20} fill="currentColor" />
              Watch Live Stream
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <BookOpen size={20} />
              Explore Tutorials
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm group">
            <img 
              src="https://picsum.photos/seed/ai-agent/800/450" 
              alt="OpenClaw Agent Demo" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-lobster rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                <Play size={32} fill="currentColor" className="ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-tighter">Agent Swarm #42 - Active</span>
              </div>
              <div className="text-xs font-mono text-white/40">00:42:13:09</div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 p-4 bg-black/80 border border-white/10 rounded-2xl backdrop-blur-md hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                <Cpu size={20} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase font-bold">Neural Load</div>
                <div className="text-sm font-mono font-bold text-neon-cyan">84.2%</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 p-4 bg-black/80 border border-white/10 rounded-2xl backdrop-blur-md hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                <Users size={20} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase font-bold">Active Viewers</div>
                <div className="text-sm font-mono font-bold text-neon-purple">12,402</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, colorClass }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorClass}`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-lobster transition-colors">{title}</h3>
    <p className="text-white/50 leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "Autonomous Agents",
      description: "Watch agents that don't just chat, but execute tasks across your digital world 24/7.",
      colorClass: "bg-neon-cyan/10 text-neon-cyan"
    },
    {
      icon: Tv,
      title: "Live Demos & Streams",
      description: "Real-time breakdowns of agent logic and swarm behavior in complex environments.",
      colorClass: "bg-lobster/10 text-lobster"
    },
    {
      icon: BookOpen,
      title: "Tutorials & Guides",
      description: "From 'Hello World' to multi-agent production swarms. We teach you the future.",
      colorClass: "bg-neon-purple/10 text-neon-purple"
    },
    {
      icon: Users,
      title: "Community Chaos",
      description: "The best creations from the OpenClaw community, curated and showcased daily.",
      colorClass: "bg-emerald-500/10 text-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              The Future of <br />
              <span className="text-lobster">Autonomous Action</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              OpenClaw is your always-on personal AI that actually does things — self-hosted, open-source, runs on WhatsApp/Telegram/Discord, integrates tools/skills, and evolves with the community. Now with millions of stars on GitHub and exploding in 2026.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-lobster mb-1">250k+</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">GitHub Stars</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-neon-cyan mb-1">24/7</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Autonomous Runtime</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-white/5 absolute inset-0 animate-spin-slow" />
            <div className="aspect-square rounded-full border border-white/10 absolute inset-10 animate-reverse-spin-slow" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-9xl grayscale opacity-20 select-none">🦞</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl text-center max-w-xs">
                  <Shield className="mx-auto mb-4 text-neon-cyan" size={40} />
                  <h4 className="font-bold mb-2">Privacy First</h4>
                  <p className="text-sm text-white/50">Self-hosted & open-source. Your data never leaves your infrastructure.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StreamSection = () => {
  const videos = [
    {
      title: "Full OpenClaw Setup Tutorial",
      thumbnail: "https://picsum.photos/seed/setup/400/225",
      duration: "15:24",
      views: "1.2M views"
    },
    {
      title: "Agent Swarm Gone Wild",
      thumbnail: "https://picsum.photos/seed/swarm/400/225",
      duration: "08:42",
      views: "850K views"
    },
    {
      title: "Live Moltbot Reactions",
      thumbnail: "https://picsum.photos/seed/molt/400/225",
      duration: "42:10",
      views: "2.5M views"
    },
    {
      title: "2026 Agent Roadmap",
      thumbnail: "https://picsum.photos/seed/roadmap/400/225",
      duration: "12:15",
      views: "400K views"
    }
  ];

  return (
    <section id="streams" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Latest <span className="text-lobster">Streams</span> & Videos</h2>
            <p className="text-white/50 max-w-xl">Catch up on the most viral moments and deep-dive tutorials from the community.</p>
          </div>
          <button className="flex items-center gap-2 text-lobster font-bold hover:gap-4 transition-all">
            View All Content <ChevronRight size={20} />
          </button>
        </div>

        {/* Live Stream Embed Placeholder */}
        <div className="mb-16">
          <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 bg-black relative group">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=0&loop=1" 
              className="w-full h-full opacity-40 grayscale group-hover:opacity-60 transition-opacity"
              title="Live Stream Placeholder"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-4 animate-pulse">LIVE NOW</div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 neon-glow-lobster">OpenClaw Mainframe Swarm #04</h3>
              <p className="text-white/60 mb-8 max-w-md">Watch 50+ autonomous agents collaborate on a global supply chain optimization task in real-time.</p>
              <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-lobster hover:text-white transition-all">
                Enter Live Room
              </button>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/10">
                <img 
                  src={v.thumbnail} 
                  alt={v.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">
                  {v.duration}
                </div>
                <div className="absolute inset-0 bg-lobster/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play fill="white" size={32} />
                </div>
              </div>
              <h4 className="font-bold mb-1 group-hover:text-lobster transition-colors line-clamp-1">{v.title}</h4>
              <div className="text-xs text-white/40">{v.views}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-lobster/20 via-black to-neon-purple/20 rounded-[40px] p-8 md:p-16 border border-white/10 relative overflow-hidden">
          {/* Decorative Lobster */}
          <div className="absolute -bottom-10 -right-10 text-[200px] opacity-5 rotate-12 select-none">🦞</div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Join the <br /><span className="text-lobster">Lobster Army</span></h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              The revolution won't be televised, it will be autonomous. Join 500,000+ developers and AI enthusiasts building the future of agentic workflows.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="https://github.com/openclaw/openclaw" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <Github size={20} /> GitHub
              </a>
              <a href="https://discord.gg/clawd" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-[#5865F2] text-white rounded-xl hover:scale-105 transition-all">
                <MessageSquare size={20} /> Discord
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <Twitter size={20} /> X / Twitter
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-lobster/10 border border-lobster/20 text-lobster rounded-xl hover:bg-lobster/20 transition-all">
                <Star size={20} /> ClawHub
              </a>
            </div>

            <div className="p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Submit your agent demo</h3>
              <p className="text-sm text-white/40 mb-6">Built something cool with OpenClaw? Send us your video or repo and get featured on OpenClaw TV.</p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-lobster transition-colors"
                />
                <button className="px-6 py-3 bg-lobster text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
                  Submit Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call for now
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-12 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lobster/10 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-white/50 mb-8">Get the latest agent swarms, tutorials, and community highlights delivered straight to your inbox.</p>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400 font-bold"
              >
                Welcome to the swarm! 🦞 Check your inbox soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-lobster transition-all"
                />
                <button 
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-lobster text-white font-bold rounded-2xl hover:scale-105 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Newsletter'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold tracking-tighter uppercase">OPENCLAW <span className="text-lobster">TV</span></span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm text-white/20 mb-2">© 2026 OpenClawTV — Unofficial fan/community hub for OpenClaw.ai</p>
          <p className="text-[10px] text-white/10 max-w-2xl">
            Not affiliated with official OpenClaw project — just a passionate fan streaming the revolution. OpenClaw is a trademark of the OpenClaw Foundation. All agent demos are property of their respective creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-lobster/30 selection:text-lobster">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StreamSection />
        <Community />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-lobster z-[60] origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
