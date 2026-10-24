import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Menu, X, ShoppingBag, Sparkles, Palette, Clock3, MessageCircle, ChevronDown, Check } from 'lucide-react'
import './styles.css'

const products = [
  { id: 1, name: 'Lotus Diya Holders', category: 'Diya Holders', price: null, note: 'Handcrafted floral holders with pearl detailing', image: '/images/lotus-diya-holders.png', label: 'Handmade' },
  { id: 2, name: 'Festive Lanterns', category: 'Lanterns & Kandils', price: 1299, note: 'Customisable colours and traditional designs', image: '/images/handmade-festive-lanterns.png', label: 'Pre-order' },
  { id: 3, name: 'Shubh Labh Hangings', category: 'Wall & Door Décor', price: null, note: 'A festive welcome, made by hand', image: '/images/shubh-labh-hangings.png', label: 'Traditional' },
]
const formatPrice = (price) => price == null ? 'DM for price' : `₹${price.toLocaleString('en-IN')}`

function Brand() {
  return <a href="#home" className="brand" aria-label="Phool and Prakash home">
    <img src="/images/brand-logo.png" alt="Phool & Prakash — Handmade Festive Ambience" />
    <span><strong>Phool & Prakash</strong><small>HANDMADE FESTIVE AMBIENCE</small></span>
  </a>
}

function Header({ cartCount, onCart }) {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <div className="announcement">HANDCRAFTED WITH LOVE · PRE-ORDERS OPEN</div>
    <div className="nav-wrap">
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <Brand />
      <nav className={open ? 'nav open' : 'nav'}>
        <a href="#shop" onClick={() => setOpen(false)}>Shop creations</a>
        <a href="#custom" onClick={() => setOpen(false)}>Customisation</a>
        <a href="#about" onClick={() => setOpen(false)}>Our craft</a>
        <a href="#orders" onClick={() => setOpen(false)}>Pre-orders</a>
      </nav>
      <button className="bag-button" onClick={onCart} aria-label={`Open enquiry bag, ${cartCount} items`}><ShoppingBag size={19}/><span>Enquiry bag</span><b>{cartCount}</b></button>
    </div>
  </header>
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-copy">
      <p className="eyebrow"><span /> MADE BY HAND, MADE TO GLOW</p>
      <h1>Let your festive<br/><em>glow bloom.</em></h1>
      <p className="hero-text">Little details. Warm lights. A home filled with meaning. Discover handcrafted lanterns, lotus diya holders and traditional festive décor made to bring your celebrations to life.</p>
      <div className="hero-actions"><a className="button button-gold" href="#shop">Explore the collection <ArrowRight size={17}/></a><a className="text-link" href="#custom">Make it your own <ArrowRight size={15}/></a></div>
      <div className="hero-meta"><span><Sparkles size={17}/> Artisan-crafted</span><i/><span><Palette size={17}/> Custom colours</span></div>
    </div>
    <div className="hero-art">
      <div className="hero-frame"><img src="/images/lotus-diya-holders.png" alt="Colourful handmade lotus diya holders with pearl and gold detailing"/></div>
      <div className="hero-seal"><span>✦</span><strong>MADE WITH<br/>LOVE & LIGHT</strong><span>✦</span></div>
      <div className="hero-caption"><span className="caption-dot"/> FESTIVE AMBIENCE, THE HANDMADE WAY</div>
    </div>
  </section>
}

function FeatureStrip() {
  const items = [
    { icon: <Sparkles/>, title: 'Handmade with care', text: 'Artisan details in every piece' },
    { icon: <Palette/>, title: 'Made to feel yours', text: 'Custom colours and details' },
    { icon: <Clock3/>, title: 'Pre-order creations', text: 'Please allow 10 days’ notice' },
  ]
  return <section className="feature-strip"><div className="container feature-grid">{items.map(x => <div className="feature" key={x.title}><span className="feature-icon">{x.icon}</span><div><strong>{x.title}</strong><small>{x.text}</small></div></div>)}</div></section>
}

function SectionHeading({ overline, title, text }) {
  return <div className="section-heading"><p className="eyebrow centered"><span/>{overline}<span/></p><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function Shop({ onAdd }) {
  return <section id="shop" className="section container">
    <SectionHeading overline="THE FESTIVE EDIT" title={<>Little works of art.<br/><em>Big festive feeling.</em></>} text="Thoughtfully handcrafted pieces to make your home feel a little more magical."/>
    <div className="product-grid">{products.map(p => <article className="product" key={p.id}>
      <div className="product-image"><img src={p.image} alt={p.name} loading="lazy"/><span className="product-label">{p.label}</span><button onClick={() => onAdd(p)} className="add-button"><ShoppingBag size={15}/> Add to enquiry bag</button></div>
      <div className="product-info"><div><small>{p.category}</small><h3>{p.name}</h3></div><strong>{formatPrice(p.price)}</strong></div>
      <p className="product-note">{p.note}</p>
    </article>)}</div>
    <p className="price-note">Some creations are customised to order. Message us for availability and a personalised quote.</p>
  </section>
}

function CustomSection() {
  return <section id="custom" className="custom-section"><div className="container custom-layout">
    <div className="custom-image"><img src="/images/handmade-festive-lanterns.png" alt="Customisable handmade festive lanterns in purple, yellow and blue" loading="lazy"/><span>YOUR COLOURS. YOUR CELEBRATION.</span></div>
    <div className="custom-copy"><p className="eyebrow"><span/> A LITTLE PERSONAL TOUCH</p><h2>Dream it in colour.<br/><em>We'll craft the glow.</em></h2><p>Have a colour palette in mind? Our handmade festive lanterns can be customised to complement your home, your celebration, and your style.</p>
      <ul><li><Check size={17}/> Customisable colours and details</li><li><Check size={17}/> Traditional designs, made by hand</li><li><Check size={17}/> Please order at least 10 days ahead</li></ul>
      <a className="button button-burgundy" href="#orders">Ask about a custom piece <ArrowRight size={17}/></a>
    </div>
  </div></section>
}

function About() {
  return <section id="about" className="section container about-section"><div className="about-emblem"><img src="/images/brand-logo.png" alt="Phool & Prakash emblem"/></div><div className="about-copy"><p className="eyebrow"><span/> ROOTED IN FESTIVE TRADITION</p><h2>Not just décor.<br/><em>A feeling of home.</em></h2><p>At Phool & Prakash, every handmade detail is a little celebration of tradition, warmth and togetherness. From a glowing diya holder to a colourful hanging lantern, our creations are designed to make festive moments feel personal.</p><p>Made thoughtfully, finished with care, and crafted to bring a little extra light to your space.</p></div></section>
}

function OrderSection() {
  return <section id="orders" className="order-section"><div className="container order-inner"><div><p className="eyebrow light"><span/> MADE ESPECIALLY FOR YOU</p><h2>Planning something<br/><em>beautiful?</em></h2><p>Pre-orders are open. Custom creations require at least 10 days’ notice. Reach out to discuss colours, details, pricing and availability.</p></div><a className="button button-cream" href="https://www.instagram.com/phool_and_prakash/" target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enquire on Instagram <ArrowRight size={16}/></a></div></section>
}

function Footer() {
  return <footer className="footer"><div className="container footer-main"><Brand/><p>Handcrafted lanterns, kandils and diya holders.<br/>Let your festive glow bloom.</p><div className="footer-links"><a href="#shop">Shop creations</a><a href="#custom">Custom orders</a><a href="https://www.instagram.com/phool_and_prakash/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Phool & Prakash</span><span>Handmade festive ambience, made with love.</span></div></footer>
}

function EnquiryDrawer({ items, open, close, remove }) {
  if (!open) return null
  return <div className="overlay" onClick={close}><aside className="drawer" onClick={e => e.stopPropagation()}>
    <div className="drawer-head"><div><small>LET'S MAKE SOMETHING LOVELY</small><h2>Enquiry bag ({items.length})</h2></div><button onClick={close} aria-label="Close enquiry bag"><X/></button></div>
    {items.length === 0 ? <div className="empty-bag"><span>✿</span><h3>Your enquiry bag is empty</h3><p>Add a creation to ask us about pricing and custom options.</p><button className="button button-burgundy" onClick={close}>Explore creations</button></div> :
      <><div className="drawer-items">{items.map((p, i) => <div className="drawer-item" key={`${p.id}-${i}`}><img src={p.image} alt=""/><div><strong>{p.name}</strong><small>{formatPrice(p.price)}</small><button onClick={() => remove(i)}>Remove</button></div></div>)}</div><div className="drawer-bottom"><p>Ready to discuss your order? Send us your selected items on Instagram and we'll confirm pricing and availability.</p><a className="button button-burgundy full" href={`https://www.instagram.com/phool_and_prakash/`} target="_blank" rel="noreferrer" onClick={close}><MessageCircle size={17}/> Continue on Instagram</a><small>Demo enquiry bag — no order or payment is submitted.</small></div></>}
  </aside></div>
}

function App() {
  const [items, setItems] = useState([])
  const [drawer, setDrawer] = useState(false)
  const [toast, setToast] = useState('')
  const add = p => { setItems(old => [...old, p]); setToast(`${p.name} added to your enquiry bag`); window.setTimeout(() => setToast(''), 2600) }
  return <><Header cartCount={items.length} onCart={() => setDrawer(true)}/><main><Hero/><FeatureStrip/><Shop onAdd={add}/><CustomSection/><About/><OrderSection/></main><Footer/><EnquiryDrawer items={items} open={drawer} close={() => setDrawer(false)} remove={i => setItems(old => old.filter((_, index) => index !== i))}/>{toast && <div className="toast"><Check size={16}/>{toast}<button onClick={() => setToast('')}><X size={15}/></button></div>}</>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
export default App;