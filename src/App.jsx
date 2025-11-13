import { useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import {
  Menu,
  X,
  Server,
  Zap,
  Shield,
  Clock,
  Cpu,
  HardDrive,
  Globe,
  Rocket
} from 'lucide-react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center shadow-[0_0_24px_-6px_rgba(59,130,246,0.8)]">
              <span className="font-black">MC</span>
            </div>
            <span className="font-semibold tracking-wide text-white/90">BlueHost 24/7</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a className="hover:text-white transition-colors" href="#features">Features</a>
            <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
            <a className="hover:text-white transition-colors" href="#faq">FAQ</a>
            <a className="hover:text-white transition-colors" href="/test">Status</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">Log in</button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_8px_30px_rgb(32,129,226,0.35)] transition-colors">Launch Panel</button>
          </div>
          <button onClick={() => setOpen(v=>!v)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
            <div className="px-4 py-4 flex flex-col gap-3 text-white/80">
              <a className="hover:text-white" href="#features" onClick={()=>setOpen(false)}>Features</a>
              <a className="hover:text-white" href="#pricing" onClick={()=>setOpen(false)}>Pricing</a>
              <a className="hover:text-white" href="#faq" onClick={()=>setOpen(false)}>FAQ</a>
              <a className="hover:text-white" href="/test" onClick={()=>setOpen(false)}>Status</a>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10">Log in</button>
                <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500">Launch Panel</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero with Spline Cover */}
      <section className="relative pt-24">
        <div className="absolute inset-0 -z-10">
          {/* Spline full-width background */}
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" />
          </div>
          {/* Dark overlay + blue vignette */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(37,99,235,0.25),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 py-24">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Free 24/7 Minecraft Hosting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">Ultra-fast. Always online. Zero cost.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl"
              >
                Spin up a powerful server in seconds with automatic backups, DDoS protection, and a sleek control panel. Built for creators, friends, and communities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_10px_40px_rgba(37,99,235,0.35)]">Start Free</a>
                <a href="#features" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">Explore Features</a>
              </motion.div>

              <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2"><Shield size={16} className="text-cyan-400"/> DDoS Protected</div>
                <div className="flex items-center gap-2"><Clock size={16} className="text-blue-400"/> 99.9% Uptime</div>
                <div className="flex items-center gap-2"><Zap size={16} className="text-sky-400"/> Instant Setup</div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:py-24">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-hidden">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"/>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center"><Server /></div>
                  <div>
                    <p className="text-white/80 text-sm">Your next server</p>
                    <h3 className="text-xl font-semibold">minecraft.mydomain.gg</h3>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <Stat label="vCores" value="2"/>
                  <Stat label="RAM" value="4 GB"/>
                  <Stat label="Storage" value="20 GB SSD"/>
                  <Stat label="Location" value="EU / US"/>
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500">Deploy</button>
                  <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Features */}
      <section id="features" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Everything you need to run your world
          </motion.h2>
          <p className="mt-3 text-white/70 max-w-2xl">No credit card. No trials. Just premium hosting with a seamless, modern control panel.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature icon={<Rocket className="text-cyan-400"/>} title="1-Click Deploy" desc="Start Spigot, Paper, Forge, and modpacks instantly with curated presets."/>
            <Feature icon={<Shield className="text-blue-400"/>} title="Advanced Protection" desc="Enterprise DDoS mitigation, automatic updates, and backups."/>
            <Feature icon={<Cpu className="text-sky-400"/>} title="NVMe Power" desc="High-clock CPUs and blazing-fast NVMe SSDs for smooth gameplay."/>
            <Feature icon={<HardDrive className="text-cyan-400"/>} title="Backups & Snapshots" desc="Automated daily backups with one-click rollbacks."/>
            <Feature icon={<Globe className="text-blue-400"/>} title="Global Locations" desc="Deploy close to your players for minimal latency."/>
            <Feature icon={<Zap className="text-sky-400"/>} title="Always Online" desc="24/7 uptime monitoring with auto-restart and healing."/>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(37,99,235,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center"
          >
            Simple, fair pricing
          </motion.h2>
          <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">Start free forever. Scale when you need more power.</p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Plan
              name="Free"
              price="$0"
              tagline="Great for friends and small communities"
              features={["2 vCores","4 GB RAM","20 GB NVMe","DDoS Protection","Daily Backups","1 Location"]}
              cta="Start Now"
              highlight
            />
            <Plan
              name="Pro"
              price="$6/mo"
              tagline="For growing worlds and modpacks"
              features={["3 vCores","8 GB RAM","40 GB NVMe","Priority Support","3 Locations","Advanced Panel"]}
              cta="Go Pro"
            />
            <Plan
              name="Ultra"
              price="$12/mo"
              tagline="Max performance for large servers"
              features={["4 vCores","16 GB RAM","80 GB NVMe","Global Anycast","Uptime SLA","On-demand Snapshots"]}
              cta="Get Ultra"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center"
          >
            Frequently asked questions
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Faq q="Is it really free 24/7?" a="Yes. Our free tier keeps your server online around the clock with resource limits suitable for small communities."/>
            <Faq q="Do you support modded servers?" a="Absolutely. Deploy Paper, Spigot, Forge, and popular modpacks in one click."/>
            <Faq q="Where are servers located?" a="Multiple regions across North America and Europe with more on the way."/>
            <Faq q="Can I upgrade later?" a="Upgrade anytime from the panel without downtime. Your data stays safe with automatic backups."/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} BlueHost 24/7 — Free Minecraft hosting</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-white/60 text-xs">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
    >
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-600/30 to-cyan-500/30 blur-2xl" />
      <div className="flex items-start gap-4 relative">
        <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 grid place-items-center shadow-inner">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Plan({ name, price, tagline, features, cta, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl border ${highlight ? 'border-blue-500/40' : 'border-white/10'} bg-white/5 p-6 backdrop-blur`}
    >
      {highlight && (
        <div className="absolute -top-3 right-6 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500">Popular</div>
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-white/60 text-sm">{tagline}</p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-extrabold">{price}</span>
        {name !== 'Free' && <span className="text-white/50 text-sm mb-1">USD</span>}
      </div>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full px-4 py-2 rounded-xl ${highlight ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-white/5 border border-white/10 hover:bg-white/10'} transition-colors`}>
        {cta}
      </button>
    </motion.div>
  )
}

export default App
