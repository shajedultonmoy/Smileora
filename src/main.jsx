import React from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  AlarmClock,
  ArrowRight,
  Award,
  Baby,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Sun,
  Syringe,
  X,
} from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Chair-side whitening for brighter enamel with shade-safe planning.',
    cost: '$120 - $280',
    duration: '45 min',
    benefits: ['Fast brightness', 'Low sensitivity', 'Even shade'],
  },
  {
    icon: Activity,
    title: 'Root Canal',
    description: 'Comfort-first endodontic therapy to save infected teeth.',
    cost: '$350 - $700',
    duration: '75 min',
    benefits: ['Pain relief', 'Tooth saving', 'Digital imaging'],
  },
  {
    icon: ShieldCheck,
    title: 'Dental Implants',
    description: 'Stable implant planning for natural-looking tooth replacement.',
    cost: '$900 - $2,500',
    duration: '90 min',
    benefits: ['Long lasting', 'Bone support', 'Natural bite'],
  },
  {
    icon: BadgeCheck,
    title: 'Orthodontics',
    description: 'Smile alignment plans using precise diagnostics and progress checks.',
    cost: '$700 - $2,800',
    duration: '30 min visit',
    benefits: ['Better bite', 'Cleaner teeth', 'Confident smile'],
  },
  {
    icon: Smile,
    title: 'Braces',
    description: 'Metal and ceramic braces with thoughtful monthly adjustments.',
    cost: '$600 - $2,200',
    duration: '35 min visit',
    benefits: ['Predictable movement', 'Durable', 'All ages'],
  },
  {
    icon: Syringe,
    title: 'Tooth Extraction',
    description: 'Gentle extraction with post-care support and recovery guidance.',
    cost: '$80 - $240',
    duration: '30 min',
    benefits: ['Safe removal', 'Quick recovery', 'Clear aftercare'],
  },
  {
    icon: Stethoscope,
    title: 'Dental Cleaning',
    description: 'Scaling, polishing, and gum checks for preventive oral health.',
    cost: '$45 - $100',
    duration: '40 min',
    benefits: ['Fresh breath', 'Plaque control', 'Gum health'],
  },
  {
    icon: Star,
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding, contouring, and smile-design consultations.',
    cost: '$180 - $1,400',
    duration: '60 min',
    benefits: ['Smile design', 'Natural finish', 'Personalized care'],
  },
];

const medicines = [
  { name: 'Amoxicillin', usage: 'Dental infection support', dosage: 'As prescribed by dentist', warning: 'Avoid if penicillin allergic', type: 'Antibiotic' },
  { name: 'Ibuprofen', usage: 'Pain and swelling relief', dosage: 'After meals as advised', warning: 'Avoid with ulcer or kidney risk unless approved', type: 'Pain Relief' },
  { name: 'Chlorhexidine Mouthwash', usage: 'Gum inflammation and post-procedure rinse', dosage: 'Rinse, do not swallow', warning: 'May stain teeth with prolonged use', type: 'Mouthwash' },
  { name: 'Paracetamol', usage: 'Mild to moderate dental pain', dosage: 'Follow age and weight guidance', warning: 'Do not exceed daily limit', type: 'Pain Relief' },
  { name: 'Metronidazole', usage: 'Anaerobic dental infections', dosage: 'Complete the full course if prescribed', warning: 'Avoid alcohol during use', type: 'Antibiotic' },
  { name: 'Fluoride Gel', usage: 'Enamel strengthening and cavity prevention', dosage: 'Apply as directed', warning: 'Keep away from small children', type: 'Preventive' },
];

const tips = [
  { icon: Smile, title: 'Daily Care', text: 'Brush twice, floss once, and rinse after acidic drinks.' },
  { icon: Sparkles, title: 'Brushing Guide', text: 'Use a soft brush at a 45-degree angle for two minutes.' },
  { icon: HeartPulse, title: 'Gum Care', text: 'Bleeding gums need attention, not harder brushing.' },
  { icon: Baby, title: 'Kids Care', text: 'Start dental visits early and use age-safe fluoride amounts.' },
  { icon: Check, title: 'Food Choices', text: 'Choose crunchy vegetables, dairy, water, and low-sugar snacks.' },
];

const faqs = [
  ['How often should I visit?', 'Most patients benefit from a checkup every six months, though gum or orthodontic cases may need closer follow-up.'],
  ['Is whitening safe?', 'Professional whitening is safe when the gums, enamel, and existing restorations are checked first.'],
  ['What should I do in an emergency?', 'Call the emergency line, rinse with warm water, use a cold compress, and avoid placing aspirin on gums.'],
  ['Do implants hurt?', 'Implant procedures are planned with local anesthesia and careful aftercare, so most patients report manageable discomfort.'],
];

const testimonials = [
  { name: 'Nadia Rahman', text: 'The calmest dental visit I have ever had. Every step was explained beautifully.', rating: 5 },
  { name: 'Farhan Ahmed', text: 'My root canal was smooth, painless, and the follow-up care felt very personal.', rating: 5 },
  { name: 'Samira Khan', text: 'Smileora gave me a whitening plan that looked natural, not overdone.', rating: 5 },
];

const gallery = [
  {
    title: 'Whitening Result',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Alignment Progress',
    before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Cosmetic Finish',
    before: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80',
  },
];

const navItems = ['Home', 'About', 'Services', 'Appointment', 'Medicines', 'Tips', 'Gallery', 'Contact'];

function useCountUp(target) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let frame;
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return count;
}

function App() {
  const [loading, setLoading] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <div className="site-shell">
        <Navbar
          darkMode={darkMode}
          menuOpen={menuOpen}
          setDarkMode={setDarkMode}
          setMenuOpen={setMenuOpen}
          scrollTo={scrollTo}
        />
        <main>
          <Hero scrollTo={scrollTo} />
          <About />
          <Services />
          <Appointment />
          <Medicines />
          <Tips />
          <Testimonials />
          <Gallery onSelect={setSelectedImage} />
          <Contact />
        </main>
        <Footer />
        <a className="whatsapp" href="https://wa.me/15551234567" aria-label="Chat on WhatsApp">
          <Phone size={22} />
        </a>
        <AnimatePresence>
          {selectedImage && <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />}
        </AnimatePresence>
      </div>
    </>
  );
}

function Preloader() {
  return (
    <motion.div className="preloader" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <motion.div
        className="loader-mark"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Smile size={34} />
      </motion.div>
      <p>Preparing Smileora</p>
    </motion.div>
  );
}

function Navbar({ darkMode, menuOpen, setDarkMode, setMenuOpen, scrollTo }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => scrollTo('Home')} aria-label="Smileora home">
        <span><Smile size={24} /></span>
        Smileora
      </button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item} onClick={() => scrollTo(item)}>
            {item}
          </button>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle color mode">
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button className="icon-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero({ scrollTo }) {
  const patients = useCountUp(4200);
  const smiles = useCountUp(98);
  const years = useCountUp(12);

  return (
    <section id="home" className="hero section-pad">
      <div className="hero-bg" />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow"><CalendarCheck size={16} /> Personal Dental Chamber</span>
        <h1>Dr. Ayesha Rahman</h1>
        <h2>Premium, gentle dentistry for confident everyday smiles.</h2>
        <p>
          Smileora blends modern diagnostics, cosmetic artistry, and calm chair-side care for patients who want their dental visit to feel precise, personal, and reassuring.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => scrollTo('Appointment')}>Book Appointment <ArrowRight size={18} /></button>
          <button className="secondary-btn" onClick={() => scrollTo('Services')}>View Services</button>
        </div>
        <div className="status-strip glass">
          <span className="pulse-dot" /> Online appointments open today
        </div>
        <div className="counter-grid">
          <Counter value={`${patients}+`} label="Patients cared for" />
          <Counter value={`${smiles}%`} label="Smile satisfaction" />
          <Counter value={`${years}+`} label="Years experience" />
        </div>
      </motion.div>
      <motion.div
        className="doctor-panel glass"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
          alt="Dr. Ayesha Rahman, professional female dentist"
        />
        <div className="doctor-badge">
          <Award size={20} />
          <span>Certified Cosmetic Dentist</span>
        </div>
      </motion.div>
    </section>
  );
}

function Counter({ value, label }) {
  return (
    <div className="counter-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function About() {
  const timeline = [
    ['2012', 'BDS with honors from City Dental College'],
    ['2015', 'Advanced restorative dentistry certification'],
    ['2019', 'Opened Smileora personal chamber'],
    ['2024', 'Digital smile design and implant planning award'],
  ];

  return (
    <section id="about" className="section-pad about">
      <SectionIntro eyebrow="About Doctor" title="Calm expertise with a meticulous clinical eye." />
      <div className="about-grid">
        <motion.div className="about-card glass" whileHover={{ y: -6 }}>
          <h3>Biography</h3>
          <p>
            Dr. Ayesha Rahman is a restorative and cosmetic dentist focused on preventive care, minimally invasive treatments, and natural smile aesthetics.
          </p>
          <p>
            Her chamber combines digital X-ray planning, sterilized workflows, and a patient-first rhythm that makes every visit feel clear and composed.
          </p>
          <div className="chamber-info">
            <span><MapPin size={17} /> House 21, Lake Road, Dhaka</span>
            <span><Clock size={17} /> Sat-Thu, 10:00 AM - 8:00 PM</span>
          </div>
        </motion.div>
        <div className="timeline">
          {timeline.map(([year, text], index) => (
            <motion.div
              className="timeline-item"
              key={year}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
            >
              <strong>{year}</strong>
              <span>{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad services">
      <SectionIntro eyebrow="Services" title="Complete dental care, designed around comfort and clarity." />
      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon"><Icon size={24} /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-meta">
                <span>{service.cost}</span>
                <span>{service.duration}</span>
              </div>
              <ul>
                {service.benefits.map((benefit) => <li key={benefit}><Check size={15} />{benefit}</li>)}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Appointment() {
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', datetime: '', service: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [confirmed, setConfirmed] = React.useState(false);

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (form.name.trim().length < 3) nextErrors.name = 'Enter the patient name.';
    if (!/^\+?[0-9\s-]{8,}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (!form.datetime) nextErrors.datetime = 'Choose a date and time.';
    if (!form.service) nextErrors.service = 'Select a service.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setConfirmed(true);
  };

  return (
    <section id="appointment" className="section-pad appointment">
      <SectionIntro eyebrow="Appointment" title="Book a visit with instant form validation." />
      <div className="appointment-grid">
        <form className="booking-form glass" onSubmit={submit} noValidate>
          <Input label="Patient Name" name="name" value={form.name} onChange={update} error={errors.name} />
          <Input label="Phone Number" name="phone" value={form.phone} onChange={update} error={errors.phone} />
          <Input label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} />
          <Input label="Date & Time" name="datetime" type="datetime-local" value={form.datetime} onChange={update} error={errors.datetime} />
          <label className="field">
            <span>Service Selection</span>
            <select name="service" value={form.service} onChange={update}>
              <option value="">Choose a service</option>
              {services.map((service) => <option key={service.title}>{service.title}</option>)}
            </select>
            {errors.service && <small>{errors.service}</small>}
          </label>
          <label className="field full">
            <span>Message</span>
            <textarea name="message" rows="4" value={form.message} onChange={update} placeholder="Share symptoms, preferred time, or special notes." />
          </label>
          <button className="primary-btn full" type="submit">Confirm Appointment <CalendarCheck size={18} /></button>
        </form>
        <aside className="emergency-card">
          <AlarmClock size={28} />
          <h3>Emergency Contact</h3>
          <p>Severe pain, trauma, swelling, or bleeding needs quick guidance.</p>
          <a href="tel:+15551234567">+1 555 123 4567</a>
          <div className="availability">
            <span className="pulse-dot" /> Emergency line active
          </div>
        </aside>
      </div>
      <AnimatePresence>{confirmed && <Confirmation onClose={() => setConfirmed(false)} />}</AnimatePresence>
    </section>
  );
}

function Input({ label, name, value, onChange, error, type = 'text' }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} />
      {error && <small>{error}</small>}
    </label>
  );
}

function Confirmation({ onClose }) {
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="modal" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 10 }}>
        <div className="modal-icon"><Check size={28} /></div>
        <h3>Appointment request received</h3>
        <p>Smileora will contact the patient soon to confirm the final chamber schedule.</p>
        <button className="primary-btn" onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}

function Medicines() {
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const types = ['All', ...new Set(medicines.map((item) => item.type))];
  const visible = medicines.filter((item) => {
    const matchesQuery = `${item.name} ${item.usage}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || item.type === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <section id="medicines" className="section-pad medicines">
      <SectionIntro eyebrow="Prescription Info" title="Common medicine guidance for dental patients." />
      <div className="medicine-tools">
        <label className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search medicines or usage" />
        </label>
        <div className="filter-pills">
          {types.map((type) => (
            <button className={filter === type ? 'active' : ''} onClick={() => setFilter(type)} key={type}>{type}</button>
          ))}
        </div>
      </div>
      <div className="medicine-grid">
        {visible.map((item) => (
          <motion.article className="medicine-card" key={item.name} layout>
            <span>{item.type}</span>
            <h3>{item.name}</h3>
            <p><strong>Usage:</strong> {item.usage}</p>
            <p><strong>Dosage:</strong> {item.dosage}</p>
            <p><strong>Warnings:</strong> {item.warning}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Tips() {
  const [open, setOpen] = React.useState(0);

  return (
    <section id="tips" className="section-pad tips">
      <SectionIntro eyebrow="Guidelines & Tips" title="Small daily habits that protect your smile." />
      <div className="tips-grid">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <article className="tip-card" key={tip.title}>
              <Icon size={23} />
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          );
        })}
      </div>
      <div className="faq">
        {faqs.map(([question, answer], index) => (
          <div className="faq-item" key={question}>
            <button onClick={() => setOpen(open === index ? -1 : index)}>
              {question}
              <ChevronDown className={open === index ? 'rotated' : ''} size={20} />
            </button>
            <AnimatePresence>
              {open === index && (
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                  {answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="section-pad testimonials">
      <SectionIntro eyebrow="Testimonials" title="Patients notice the calm, precise difference." />
      <div className="testimonial-stage">
        <AnimatePresence mode="wait">
          <motion.article
            className="testimonial-card glass"
            key={active.name}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
          >
            <div className="stars">{Array.from({ length: active.rating }).map((_, i) => <Star fill="currentColor" key={i} size={18} />)}</div>
            <p>{active.text}</p>
            <strong>{active.name}</strong>
          </motion.article>
        </AnimatePresence>
        <div className="slider-dots">
          {testimonials.map((item, dotIndex) => (
            <button className={dotIndex === index ? 'active' : ''} onClick={() => setIndex(dotIndex)} key={item.name} aria-label={`Show ${item.name} testimonial`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ onSelect }) {
  return (
    <section id="gallery" className="section-pad gallery">
      <SectionIntro eyebrow="Gallery" title="Before and after treatment moments." />
      <div className="gallery-grid">
        {gallery.map((item) => (
          <button className="gallery-card" key={item.title} onClick={() => onSelect(item)}>
            <img src={item.after} alt={`${item.title} dental result`} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Lightbox({ item, onClose }) {
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="lightbox" initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(event) => event.stopPropagation()}>
        <button className="icon-btn close-lightbox" onClick={onClose}><X size={21} /></button>
        <h3>{item.title}</h3>
        <div className="before-after">
          <figure><img src={item.before} alt={`${item.title} before`} /><figcaption>Before</figcaption></figure>
          <figure><img src={item.after} alt={`${item.title} after`} /><figcaption>After</figcaption></figure>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad contact">
      <SectionIntro eyebrow="Contact" title="Visit the Smileora chamber." />
      <div className="contact-grid">
        <div className="contact-card glass">
          <p><MapPin size={18} /> House 21, Lake Road, Dhaka 1205</p>
          <p><Phone size={18} /> +1 555 123 4567</p>
          <p><Mail size={18} /> hello@smileora.com</p>
          <div className="socials">
            <a href="#" aria-label="Community updates"><MessageCircle size={20} /></a>
            <a href="#" aria-label="Smileora media"><Sparkles size={20} /></a>
            <a href="#" aria-label="Send a message"><Send size={20} /></a>
          </div>
          <form className="newsletter">
            <input type="email" placeholder="Email for dental care updates" />
            <button type="button">Subscribe</button>
          </form>
        </div>
        <iframe
          title="Smileora chamber map"
          src="https://www.google.com/maps?q=Dhaka%20Bangladesh&output=embed"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>Smileora</strong>
      <span>Personal Dentist Chamber & Portfolio</span>
      <span>Modern dental care with calm precision.</span>
    </footer>
  );
}

function SectionIntro({ eyebrow, title }) {
  return (
    <motion.div
      className="section-intro"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </motion.div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
