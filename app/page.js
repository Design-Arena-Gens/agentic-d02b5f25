'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie per il tuo interesse! Ti contatteremo presto.');
    setFormData({ nome: '', email: '', telefono: '', messaggio: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '20px 40px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>🎙️ Sound Studio Pro</h1>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#servizi" style={{ color: '#fff', textDecoration: 'none' }}>Servizi</a>
            <a href="#attrezzatura" style={{ color: '#fff', textDecoration: 'none' }}>Attrezzatura</a>
            <a href="#contatti" style={{ color: '#fff', textDecoration: 'none' }}>Contatti</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '120px 40px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
              Studio di Registrazione Professionale
            </h2>
            <p style={{ fontSize: '22px', marginBottom: '40px', opacity: 0.9 }}>
              Trasforma la tua musica in opere d'arte con la nostra tecnologia all'avanguardia
            </p>
            <a href="#contatti" style={{
              display: 'inline-block',
              padding: '18px 45px',
              backgroundColor: '#fff',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s'
            }}>
              Prenota una Sessione
            </a>
          </div>
        </section>

        {/* Servizi */}
        <section id="servizi" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', textAlign: 'center', marginBottom: '60px' }}>I Nostri Servizi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { icon: '🎵', title: 'Registrazione', desc: 'Registrazione multi-traccia con microfonazione professionale' },
              { icon: '🎛️', title: 'Mixing', desc: 'Bilanciamento e mix professionale per un suono perfetto' },
              { icon: '🎚️', title: 'Mastering', desc: 'Masterizzazione finale per tutti i formati e piattaforme' },
              { icon: '🎸', title: 'Produzione Musicale', desc: 'Produzione completa del tuo brano dalla A alla Z' },
              { icon: '🎤', title: 'Vocal Recording', desc: 'Registrazione vocale con trattamento acustico ottimale' },
              { icon: '🎹', title: 'MIDI & Synth', desc: 'Programmazione MIDI e sound design avanzato' }
            ].map((servizio, i) => (
              <div key={i} style={{
                backgroundColor: '#1a1a1a',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{servizio.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>{servizio.title}</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6' }}>{servizio.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attrezzatura */}
        <section id="attrezzatura" style={{ backgroundColor: '#0f0f0f', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '42px', textAlign: 'center', marginBottom: '60px' }}>Attrezzatura Professionale</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
              {[
                { name: 'Console Mixing', model: 'SSL 4000 G+' },
                { name: 'Microfoni', model: 'Neumann U87, AKG C414' },
                { name: 'Monitors', model: 'Genelec 8351A' },
                { name: 'Preamps', model: 'Neve 1073, API 512c' },
                { name: 'DAW', model: 'Pro Tools Ultimate' },
                { name: 'Outboard', model: 'UAD, Manley, Lexicon' }
              ].map((item, i) => (
                <div key={i} style={{
                  backgroundColor: '#1a1a1a',
                  padding: '30px',
                  borderRadius: '15px',
                  border: '1px solid rgba(102, 126, 234, 0.3)',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: '#667eea', marginBottom: '10px', fontSize: '18px' }}>{item.name}</h4>
                  <p style={{ color: '#aaa', fontSize: '16px' }}>{item.model}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '80px 40px', backgroundColor: '#1a1a1a' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {[
              { number: '500+', label: 'Brani Registrati' },
              { number: '15+', label: 'Anni di Esperienza' },
              { number: '200+', label: 'Artisti Soddisfatti' },
              { number: '24/7', label: 'Supporto Clienti' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#667eea', marginBottom: '10px' }}>{stat.number}</div>
                <div style={{ color: '#aaa', fontSize: '18px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contatti" style={{ padding: '100px 40px', maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', textAlign: 'center', marginBottom: '20px' }}>Contattaci</h2>
          <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '50px', fontSize: '18px' }}>
            Prenota una sessione o richiedi maggiori informazioni
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
              style={{
                padding: '18px',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '16px'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '18px',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '16px'
              }}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Telefono"
              value={formData.telefono}
              onChange={handleChange}
              style={{
                padding: '18px',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '16px'
              }}
            />
            <textarea
              name="messaggio"
              placeholder="Messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              required
              rows="5"
              style={{
                padding: '18px',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '16px',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
            <button type="submit" style={{
              padding: '18px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}>
              Invia Richiesta
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#0a0a0a',
          padding: '60px 40px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>🎙️ Sound Studio Pro</h3>
            <p style={{ color: '#aaa', marginBottom: '30px' }}>
              Via della Musica 123, Milano<br />
              Tel: +39 02 1234 5678 | Email: info@soundstudiopro.it
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '18px' }}>Instagram</a>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '18px' }}>Facebook</a>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '18px' }}>YouTube</a>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '18px' }}>SoundCloud</a>
            </div>
            <p style={{ color: '#666', fontSize: '14px' }}>
              © 2024 Sound Studio Pro. Tutti i diritti riservati.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
