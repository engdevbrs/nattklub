import React, { useState, useEffect } from 'react';
import { ChevronDown, Music, Users, Shield, MapPin, TrendingUp, Sparkles, Target, Globe, Lightbulb, Check, ArrowRight, Calendar, Award, Zap, Rocket } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterValue(prev => prev < 57000 ? prev + 500 : 57000);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0A0A0A] text-white font-['Rajdhani'] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/98 backdrop-blur-sm border-b border-[#FF2D55]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-2xl font-['Orbitron'] font-black tracking-[0.3em] cursor-pointer flex items-center" onClick={() => scrollToSection('inicio')}>
                <span className="text-white">NATTKLUB</span>
                <span className="text-[#FF2D55] text-3xl font-light ml-1">=</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <span className="text-[10px] tracking-[0.2em] text-gray-400 mr-8">
                LA RED SOCIAL DE LA VIDA<br/>NOCTURNA EN LATAM
              </span>
              <div className="flex flex-col space-y-1.5">
                <div className="h-0.5 w-8 bg-[#FF2D55]"></div>
                <div className="h-0.5 w-8 bg-[#FF2D55]"></div>
                <div className="h-0.5 w-8 bg-[#FF2D55]"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Background con parallax */}
        <div
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=75&fm=webp&auto=format")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.35)',
            transform: `translate3d(0, ${scrollY * 0.5}px, 0)`
          }}
        />

        {/* Overlay con gradiente mejorado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A1A1A]/30 via-[#0A0A0A]/80 to-[#0A0A0A] z-0" />

        {/* Efectos de luz/partículas */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF2D55] rounded-full filter blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-6xl mx-auto animate-fade-in-up">
          {/* Badge superior */}
          <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#FF2D55] mr-2" />
            <span className="text-xs tracking-[0.2em] text-gray-300 font-light">PRÓXIMAMENTE EN CHILE</span>
          </div>

          <div className="mb-6">
            <h1 className="font-['Orbitron'] font-black tracking-[0.1em] sm:tracking-[0.15em] leading-none flex flex-col items-center justify-center">
              <span className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[180px] animate-neon-pulse">NATTKLUB</span>
              <span className="text-[#FF2D55] text-6xl sm:text-8xl md:text-9xl lg:text-[160px] xl:text-[200px] mt-2 animate-scale-in">=</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 px-4">
            <div className="hidden sm:block h-0.5 w-8 md:w-12 bg-[#FF2D55] animate-pulse"></div>
            <p className="text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.3em] text-gray-200 font-medium text-center max-w-xs sm:max-w-none">
              LA RED SOCIAL DE LA VIDA NOCTURNA
            </p>
            <div className="hidden sm:block h-0.5 w-8 md:w-12 bg-[#FF2D55] animate-pulse"></div>
          </div>

          {/* CTA Buttons - Más impactantes */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 sm:mt-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#FF2D55] to-[#EC4899] text-white font-bold text-base sm:text-lg tracking-wider rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover-lift animate-gradient shadow-lg shadow-[#FF2D55]/50">
              <span className="relative z-10 flex items-center">
                ÚNETE AHORA
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-[#FF2D55] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-base sm:text-lg tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:border-[#FF2D55] flex items-center">
              VER DEMO
              <Zap className="ml-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6] border-2 border-[#0A0A0A] flex items-center justify-center text-xs font-bold">
                    {i}K
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-400">+10K usuarios esperando</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-[#FF2D55]" size={24} />
              <span className="text-sm text-gray-400">Ganador Startup Chile 2025</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('nosotros')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 hover:scale-110 transition-transform"
        >
          <ChevronDown size={40} className="text-[#FF2D55] drop-shadow-lg" />
        </button>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-[#0A0A0A] via-[#1A0A14] to-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6 text-white">
              VIVE LA <span className="text-[#FF2D55]">EXPERIENCIA</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Descubre cómo Nattklub transforma tu vida nocturna en algo extraordinario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature Cards con hover effects mejorados */}
            {[
              { icon: Music, title: 'Match Musical', desc: 'Conecta con personas que comparten tu gusto musical', color: 'from-[#FF2D55] to-[#EC4899]' },
              { icon: MapPin, title: 'Eventos Cerca', desc: 'Descubre la mejor fiesta a metros de ti', color: 'from-[#8B5CF6] to-[#EC4899]' },
              { icon: Shield, title: '100% Seguro', desc: 'Perfiles verificados y botón SOS', color: 'from-[#EC4899] to-[#FF2D55]' }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift transition-all duration-300 hover:border-[#FF2D55]/50 overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FF2D55]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '150M+', label: 'Usuarios Potenciales' },
              { value: '10K+', label: 'En Lista de Espera' },
              { value: '100+', label: 'Locales Partner' },
              { value: '24/7', label: 'Soporte Activo' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF2D55]/50 transition-all duration-300 hover-lift">
                <div className="text-3xl sm:text-4xl font-['Orbitron'] font-black text-[#FF2D55] mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FF2D55]/10 rounded-full filter blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-[100px]"></div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-32 px-6 lg:px-12 bg-[#0A0A0A] relative overflow-hidden">
        {/* Efectos de luz de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2D55]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-6 backdrop-blur-sm">
              <Users className="w-4 h-4 text-[#FF2D55] mr-2" />
              <span className="text-xs tracking-[0.2em] text-gray-300 font-light">NUESTRA HISTORIA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6">
              SOBRE <span className="text-[#FF2D55]">NOSOTROS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D55]/20 to-[#8B5CF6]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=75&fm=webp&auto=format"
                loading="lazy"
                alt="Amigos celebrando"
                className="relative w-full h-auto rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Overlay badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FF2D55] to-[#EC4899] px-8 py-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="text-5xl font-['Orbitron'] font-black text-white mb-2">150M+</div>
                <div className="text-sm text-white/90 tracking-wider">Jóvenes en LATAM</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                  <Lightbulb className="w-6 h-6 text-[#FF2D55] mr-3" />
                  ¿Y hoy qué haremos?
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Es la clásica pregunta que todos nos hacemos cuando queremos salir, pero todo parece repetido.
                  Ya fuimos a los mejores bares, la discoteca más popular y planes fuera de la ciudad. <span className="text-white font-bold">¿Dónde ir ahora?</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FF2D55]/10 to-[#8B5CF6]/10 backdrop-blur-sm border border-[#FF2D55]/30 rounded-2xl p-8 hover-lift">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Sparkles className="w-6 h-6 text-[#FF2D55] mr-3" />
                  Nuestro Propósito
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Somos la <span className="text-[#FF2D55] font-bold">primera red social dedicada 100%</span> a la vida nocturna en Latinoamérica,
                  diseñada para ayudarte a descubrir nuevas experiencias junto a tus amigos, siempre
                  basadas en tus gustos y reales intereses.
                </p>
              </div>
            </div>
          </div>

          {/* Cómo lo hacemos - Grid de características */}
          <div className="mb-24">
            <h3 className="text-3xl font-['Orbitron'] font-bold text-center mb-16">
              ¿CÓMO LO <span className="text-[#FF2D55]">HACEMOS?</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Music, text: 'Recomendaciones personalizadas según tus intereses musicales, sociales y culturales' },
                { icon: MapPin, text: 'Recomendaciones personalizadas según tu localización' },
                { icon: Users, text: 'Match con personas que comparten tus mismos gustos' },
                { icon: Target, text: 'Creación de "tours nocturnos" por lugares nuevos y únicos' },
                { icon: Shield, text: 'Perfiles verificados, estatus en la app y botón s.o.s para una experiencia segura' },
                { icon: Zap, text: 'Eventos exclusivos y gamificación para seguir descubriendo opciones' }
              ].map((item, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover-lift hover:border-[#FF2D55]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF2D55] to-[#EC4899] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nuestro Impacto - Card destacada */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF2D55]/10 via-[#8B5CF6]/10 to-[#FF2D55]/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-12">
              <div className="flex items-center justify-center mb-8">
                <TrendingUp className="w-12 h-12 text-[#FF2D55]" />
              </div>
              <h3 className="text-3xl font-['Orbitron'] font-bold mb-6 text-center text-white">Nuestro Impacto</h3>
              <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
                Con más de <span className="text-white font-bold text-2xl">150 millones de jóvenes</span> entre 18 y 35 años en Latinoamérica, Nattklub
                tiene el potencial de convertirse en la <span className="text-[#FF2D55] font-bold">herramienta clave</span> para transformar la noche en una
                experiencia más conectada, auténtica y multicultural.
              </p>
              <p className="text-xl text-gray-200 text-center">
                En resumen, Nattklub no es solo una app, <span className="text-white font-bold">es la respuesta</span> que todos nos hacemos antes de salir.
              </p>
              <div className="mt-8 text-center">
                <p className="text-3xl font-['Orbitron'] font-bold text-[#FF2D55] italic">"¿Y hoy qué haremos?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Identidad - Misión, Visión, Valores */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden" style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #0D1B3A 50%, #0A0A0A 100%)'
      }}>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=75&fm=webp&auto=format")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Efectos de luz */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF2D55]/20 rounded-full filter blur-[150px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full filter blur-[150px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#FF2D55] mr-2" />
              <span className="text-xs tracking-[0.2em] text-gray-300 font-light">QUIÉNES SOMOS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider text-white">
              NUESTRA <span className="text-[#FF2D55]">IDENTIDAD</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover-lift hover:border-[#FF2D55]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF2D55] to-[#EC4899] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-['Orbitron'] font-bold text-white mb-4">MISIÓN</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Conectar a las personas con experiencias nocturnas auténticas, seguras y memorables, en cada rincón de la ciudad y el mundo.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Porque la vida nocturna es más que fiestas: es <span className="text-white font-bold">comunidad, descubrimiento, identidad y conexión</span>.
              </p>
            </div>

            {/* Visión */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover-lift hover:border-[#8B5CF6]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-['Orbitron'] font-bold text-white mb-4">VISIÓN</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Ser la plataforma social líder de la vida nocturna en Latinoamérica, uniendo tecnología, comunidad y cultura urbana.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Una app donde los jóvenes no solo hagan scroll... <span className="text-white font-bold">si no, donde se encuentren de verdad</span>.
              </p>
            </div>

            {/* Valores */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover-lift hover:border-[#EC4899]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#FF2D55] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-['Orbitron'] font-bold text-white mb-4">VALORES</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'Conexión humana auténtica',
                  'Seguridad y bienestar',
                  'Inclusión y diversidad',
                  'Transparencia y honestidad',
                  'Apoyo a la economía local',
                  'Responsabilidad social'
                ].map((valor, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="text-[#FF2D55] mr-2 flex-shrink-0" size={16} />
                    <span className="font-medium">{valor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section id="problema" className="py-32 px-6 lg:px-12 bg-[#0A0A0A] relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-xs tracking-[0.2em] text-red-300 font-light">DESAFÍOS ACTUALES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6">
              EL <span className="text-[#FF2D55]">PROBLEMA</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              La vida nocturna enfrenta desafíos críticos que impiden experiencias auténticas y seguras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'FRAGMENTACIÓN DIGITAL',
                desc: 'No existe una plataforma única que centralice toda la información relevante',
                details: '→ Dónde salir | → Qué hacer | → Con quién ir',
                icon: '🔍'
              },
              {
                title: 'PÉRDIDA DE DESCUBRIMIENTOS',
                desc: 'Muchos jóvenes ya no encuentran planes nuevos o emocionantes. Todo parece repetido.',
                icon: '😴'
              },
              {
                title: 'BAJA SEGURIDAD',
                desc: 'No hay verificación real de perfiles ni herramientas claras para sentirse seguro/a al conocer gente nueva.',
                icon: '⚠️'
              },
              {
                title: 'FALTA DE COMUNIDAD',
                desc: 'Las redes sociales actuales no están diseñadas para conectar en torno a intereses nocturnos reales.',
                icon: '💔'
              },
              {
                title: 'EXPERIENCIA GENÉRICA',
                desc: 'Las recomendaciones suelen ser genéricas, sin considerar gustos musicales o preferencias culturales.',
                icon: '📱'
              }
            ].map((problema, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-red-500/5 to-red-900/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover-lift hover:border-red-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{problema.icon}</div>
                <h4 className="text-lg font-bold mb-3 text-red-400">{problema.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-2">{problema.desc}</p>
                {problema.details && (
                  <p className="text-xs text-gray-500 mt-3">{problema.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barra Divisoria Roja */}
      <div className="h-2 bg-gradient-to-r from-[#FF2D55] via-[#EC4899] to-[#8B5CF6] animate-gradient"></div>

      {/* Solución */}
      <section id="solución" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0A0A] to-[#0A0520] relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#FF2D55]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-6 backdrop-blur-sm">
              <Lightbulb className="w-4 h-4 text-[#FF2D55] mr-2" />
              <span className="text-xs tracking-[0.2em] text-gray-300 font-light">LA RESPUESTA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6">
              <span className="text-[#FF2D55]">SOLUCIÓN</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Una plataforma completa que conecta, personaliza y transforma la experiencia nocturna
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Recomendaciones personalizadas */}
            {[
              {
                title: 'Recomendaciones personalizadas',
                icon: Music,
                items: [
                  'Basadas en tus gustos musicales (conectado a Spotify)',
                  'Intereses sociales',
                  'Intereses culturales',
                  'Ubicación y tendencias locales'
                ],
                quote: 'No más recomendaciones genéricas. Solo planes hechos para ti.',
                gradient: 'from-[#FF2D55]/10 to-[#EC4899]/10',
                iconBg: 'from-[#FF2D55]/20 to-[#EC4899]/20'
              },
              {
                title: 'Conexión entre personas reales',
                icon: Users,
                items: [
                  'Match musical: conectamos personas con intereses similares',
                  'Perfiles verificados: experiencia segura y confiable',
                  'Eventos exclusivos: espacios para conocer gente nueva en ambientes controlados'
                ],
                quote: 'Conocer gente ya no es casualidad. Es conexión real.',
                gradient: 'from-[#EC4899]/10 to-[#8B5CF6]/10',
                iconBg: 'from-[#EC4899]/20 to-[#8B5CF6]/20'
              },
              {
                title: 'Experiencia nocturna gamificada y segura',
                icon: Shield,
                items: [
                  'Botón de S.O.S integrado en cada perfil',
                  'Sistema de puntos y beneficios por niveles de participación',
                  'Tours nocturnos personalizados por ciudad',
                  'Eventos co-creados con marcas y locales'
                ],
                quote: 'Vivir la noche nunca fue tan divertido, seguro y emocionante.',
                gradient: 'from-[#8B5CF6]/10 to-[#FF2D55]/10',
                iconBg: 'from-[#8B5CF6]/20 to-[#FF2D55]/20'
              }
            ].map((solution, idx) => (
              <div key={idx} className={`group bg-gradient-to-br ${solution.gradient} backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover-lift transition-all duration-300 hover:border-[#FF2D55]/50`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="text-[#FF2D55]" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-['Orbitron'] font-bold mb-6 text-white leading-tight">{solution.title}</h3>

                {/* List */}
                <ul className="space-y-3 mb-6">
                  {solution.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-[#FF2D55] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Quote */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 italic">
                    {solution.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mercado Regional */}
      <section id="mercado" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0A0A] to-[#0A0520] relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF2D55]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[#FF2D55] mr-2" />
              <span className="text-xs tracking-[0.2em] text-gray-300 font-light">NUESTRO MERCADO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6">
              MERCADO <span className="text-[#FF2D55]">REGIONAL</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comenzamos por Biobío, Chile - Un mercado estratégico con enorme potencial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover-lift">
                <h3 className="text-3xl font-['Orbitron'] font-bold mb-8 text-white flex items-center">
                  <span className="text-5xl mr-4">🇨🇱</span>
                  Biobío, Chile
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-gray-400">Población total:</span>
                    <span className="text-3xl font-['Orbitron'] font-bold text-white">2.025M</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-gray-400">Jóvenes 18-35 años:</span>
                    <span className="text-3xl font-['Orbitron'] font-bold text-[#FF2D55]">570K</span>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">Población objetivo</span>
                      <span className="text-sm font-bold text-[#FF2D55]">28%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF2D55] to-[#EC4899] rounded-full animate-pulse" style={{width: '28%'}} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF2D55]/10 to-[#8B5CF6]/10 backdrop-blur-md border border-[#FF2D55]/30 rounded-3xl p-8 hover-lift text-center">
                <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/20 rounded-full mb-4">
                  <Target className="w-4 h-4 text-[#FF2D55] mr-2" />
                  <span className="text-xs tracking-wider text-white font-bold">META INICIAL: 10%</span>
                </div>
                <div className="mt-6">
                  <p className="text-6xl sm:text-7xl font-['Orbitron'] font-black text-white mb-2 animate-neon-pulse">
                    {counterValue.toLocaleString()}
                  </p>
                  <p className="text-gray-400">usuarios activos en 6 meses</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=75&fm=webp&auto=format',
                'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=75&fm=webp&auto=format',
                'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=75&fm=webp&auto=format',
                'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=75&fm=webp&auto=format'
              ].map((src, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF2D55]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={src}
                    alt={`Vida nocturna ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Negocio */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0520] to-[#0A0A0A] relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF2D55]/10 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-[#FF2D55] mr-2" />
              <span className="text-xs tracking-[0.2em] text-gray-300 font-light">MONETIZACIÓN</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6">
              MODELO DE <span className="text-[#FF2D55]">NEGOCIO</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Múltiples fuentes de ingreso para asegurar sostenibilidad y escalabilidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Zap, title: 'Freemium', desc: 'Funciones básicas gratuitas, premium pagado con características avanzadas.', color: '#FF2D55' },
              { icon: TrendingUp, title: 'Publicidad Local', desc: 'Anuncios dirigidos de bares, discotecas y eventos específicos.', color: '#8B5CF6' },
              { icon: Award, title: 'Patrocinios', desc: 'Alianzas con marcas para activaciones hiperlocales y conexión directa.', color: '#EC4899' },
              { icon: Calendar, title: 'Comisiones por Entradas', desc: 'Porcentaje por venta de entradas a eventos exclusivos.', color: '#FF2D55' },
              { icon: TrendingUp, title: 'Datos y Análisis', desc: 'Insights de tendencias nocturnas para locales y marcas.', color: '#8B5CF6' }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift transition-all duration-300 hover:border-[#FF2D55]/50">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF2D55]/20 to-[#8B5CF6]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-[#FF2D55]" size={32} />
                </div>
                <h4 className="text-xl font-['Orbitron'] font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Estrategia de Monetización - Timeline */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full mb-6 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 text-[#8B5CF6] mr-2" />
                <span className="text-xs tracking-[0.2em] text-gray-300 font-light">ROADMAP</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-['Orbitron'] font-black tracking-wider mb-6">
                ESTRATEGIA DE <span className="text-[#8B5CF6]">MONETIZACIÓN</span>
              </h3>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Línea vertical central - solo visible en desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF2D55] via-[#8B5CF6] to-[#EC4899]" />

              <div className="space-y-12">
                {[
                  {
                    phase: 'FASE 1',
                    title: 'Validación y crecimiento',
                    time: '0-6 meses',
                    desc: 'Crecer en usuarios, locales activos y visibilidad.',
                    icon: Rocket,
                    color: '#FF2D55'
                  },
                  {
                    phase: 'FASE 2',
                    title: 'Consolidación',
                    time: '6-12 meses',
                    desc: 'Posicionar a Nattklub como herramienta clave para los locales.',
                    icon: Target,
                    color: '#8B5CF6'
                  },
                  {
                    phase: 'FASE 3',
                    title: 'Escalamiento',
                    time: '12+ meses',
                    desc: 'Modelo SaaS activo + expansión a otras comunas.',
                    icon: Globe,
                    color: '#EC4899'
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    {/* Punto en la línea - solo visible en desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0A0A0A] z-10"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Card */}
                    <div className={`w-full md:w-5/12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover-lift group hover:border-[${item.color}]/50 transition-all duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                          style={{ background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)` }}
                        >
                          <item.icon className="w-6 h-6" style={{ color: item.color }} />
                        </div>
                        <span className="text-sm font-['Orbitron'] font-bold tracking-wider px-3 py-1 rounded-full"
                          style={{ backgroundColor: `${item.color}20`, color: item.color }}
                        >
                          {item.phase}
                        </span>
                      </div>
                      <h4 className="text-2xl font-['Orbitron'] font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400 mb-4 font-semibold">{item.time}</p>
                      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Estratégicos */}
      <section id="partners" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0A0A] to-[#0A0520] relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#EC4899]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#EC4899]/10 border border-[#EC4899]/30 rounded-full mb-6 backdrop-blur-sm">
              <Users className="w-4 h-4 text-[#EC4899] mr-2" />
              <span className="text-xs tracking-[0.2em] text-gray-300 font-light">ALIANZAS ESTRATÉGICAS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6">
              PARTNERS <span className="text-[#EC4899]">ESTRATÉGICOS</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Colaboraciones clave con líderes de la industria para maximizar el impacto
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Uber / Cabify', desc: 'Movilidad segura nocturna', icon: '🚗', gradient: 'from-[#FF2D55]/10 to-[#EC4899]/10' },
              { name: 'Bumble / Tinder', desc: 'Conexiones sociales seguras', icon: '💕', gradient: 'from-[#EC4899]/10 to-[#8B5CF6]/10' },
              { name: 'Corona / Heineken', desc: 'Experiencias y eventos', icon: '🍺', gradient: 'from-[#8B5CF6]/10 to-[#FF2D55]/10' },
              { name: 'Red Bull', desc: 'Música y cultura urbana', icon: '⚡', gradient: 'from-[#FF2D55]/10 to-[#EC4899]/10' },
              { name: 'Spotify', desc: 'Integración musical', icon: '🎵', gradient: 'from-[#EC4899]/10 to-[#8B5CF6]/10' },
              { name: 'McDonald\'s', desc: 'Activaciones post-fiesta', icon: '🍔', gradient: 'from-[#8B5CF6]/10 to-[#FF2D55]/10' },
              { name: 'Transbank', desc: 'Pagos y financiamiento', icon: '💳', gradient: 'from-[#FF2D55]/10 to-[#EC4899]/10' },
              { name: 'Pronto Copec', desc: 'Puntos de encuentro', icon: '⛽', gradient: 'from-[#EC4899]/10 to-[#8B5CF6]/10' }
            ].map((partner, idx) => (
              <div key={idx} className={`group bg-gradient-to-br ${partner.gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover-lift transition-all duration-300 hover:border-[#EC4899]/50 text-center`}>
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF2D55]/20 via-[#EC4899]/20 to-[#8B5CF6]/20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>
                <h4 className="font-['Orbitron'] font-bold mb-2 text-white text-lg">{partner.name}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Invertir */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0520] to-[#0A0A0A] relative overflow-hidden">
        {/* Background con parallax */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1920&q=75&fm=webp&auto=format"
            alt="Background"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Efectos de luz */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF2D55]/15 rounded-full filter blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/15 rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-6 backdrop-blur-sm animate-fade-in-up">
              <TrendingUp className="w-4 h-4 text-[#FF2D55] mr-2" />
              <span className="text-xs tracking-[0.2em] text-gray-300 font-light">OPORTUNIDAD DE INVERSIÓN</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Orbitron'] font-black tracking-wider mb-6 animate-fade-in-up">
              ¿POR QUÉ INVERTIR EN <span className="text-[#FF2D55] animate-neon-pulse">NATTKLUB?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Una oportunidad única en el mercado de la vida nocturna latinoamericana
            </p>
          </div>

          {/* Grid de razones */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Users,
                title: 'Público joven y conectado',
                desc: '150M+ de jóvenes activos digitalmente en LATAM',
                stat: '150M+',
                gradient: 'from-[#FF2D55]/10 to-[#EC4899]/10'
              },
              {
                icon: Globe,
                title: 'Modelo escalable',
                desc: 'Replicable en toda Latinoamérica y el resto del mundo',
                stat: '20+',
                gradient: 'from-[#EC4899]/10 to-[#8B5CF6]/10'
              },
              {
                icon: Sparkles,
                title: 'Impacto social',
                desc: 'Transformación cultural de la vida nocturna',
                stat: '100%',
                gradient: 'from-[#8B5CF6]/10 to-[#FF2D55]/10'
              },
              {
                icon: TrendingUp,
                title: 'Ingresos diversificados',
                desc: 'Múltiples fuentes de monetización recurrente',
                stat: '5+',
                gradient: 'from-[#FF2D55]/10 to-[#EC4899]/10'
              },
              {
                icon: Lightbulb,
                title: 'Solución única',
                desc: 'Primera red social 100% dedicada a la vida nocturna',
                stat: '#1',
                gradient: 'from-[#EC4899]/10 to-[#8B5CF6]/10'
              },
              {
                icon: Rocket,
                title: 'Crecimiento acelerado',
                desc: 'Estrategia clara de expansión y captación de usuarios',
                stat: '10x',
                gradient: 'from-[#8B5CF6]/10 to-[#FF2D55]/10'
              }
            ].map((item, idx) => (
              <div key={idx} className={`group bg-gradient-to-br ${item.gradient} backdrop-blur-md border border-white/10 rounded-3xl p-8 hover-lift transition-all duration-300 hover:border-[#FF2D55]/50 animate-fade-in-up`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF2D55]/20 to-[#8B5CF6]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-[#FF2D55]" size={28} />
                  </div>
                  <span className="text-3xl font-['Orbitron'] font-black text-white/20 group-hover:text-[#FF2D55]/30 transition-colors duration-300">
                    {item.stat}
                  </span>
                </div>
                <h4 className="text-xl font-['Orbitron'] font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Final destacado */}
          <div className="bg-gradient-to-br from-[#FF2D55]/20 via-[#EC4899]/10 to-[#8B5CF6]/20 backdrop-blur-md border-2 border-[#FF2D55]/30 rounded-3xl p-12 text-center hover-lift animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl sm:text-4xl font-['Orbitron'] font-black mb-4 text-white">
              ÚNETE A LA <span className="text-[#FF2D55]">REVOLUCIÓN NOCTURNA</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Nattklub no solo busca apoyo financiero, sino también <span className="text-white font-bold">aliados visionarios</span> que
              crean en la innovación cultural y tecnológica de Latinoamérica.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-6 py-3 bg-white/5 border border-white/20 rounded-full">
                <span className="text-2xl font-['Orbitron'] font-black text-[#FF2D55] mr-2">57K</span>
                <span className="text-sm text-gray-400">usuarios objetivo</span>
              </div>
              <div className="flex items-center px-6 py-3 bg-white/5 border border-white/20 rounded-full">
                <span className="text-2xl font-['Orbitron'] font-black text-[#8B5CF6] mr-2">6</span>
                <span className="text-sm text-gray-400">meses al lanzamiento</span>
              </div>
              <div className="flex items-center px-6 py-3 bg-white/5 border border-white/20 rounded-full">
                <span className="text-2xl font-['Orbitron'] font-black text-[#EC4899] mr-2">5+</span>
                <span className="text-sm text-gray-400">fuentes de ingreso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto - CTA Final Impactante */}
      <section id="contacto" className="relative py-32 px-6 lg:px-12 overflow-hidden">
        {/* Background con efecto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A0520] to-[#0A0A0A]"></div>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=75&fm=webp&auto=format")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Efectos de luz */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF2D55]/20 rounded-full filter blur-[150px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full filter blur-[150px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in-up">
            <TrendingUp className="w-4 h-4 text-[#FF2D55] mr-2" />
            <span className="text-xs tracking-[0.2em] text-gray-300 font-light">ÚNETE A LA REVOLUCIÓN</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Orbitron'] font-black tracking-wider mb-6 animate-fade-in-up">
            <span className="text-white">TRANSFORMA LA </span>
            <span className="text-[#FF2D55] animate-neon-pulse">NOCHE</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Nattklub no solo busca apoyo financiero, sino también <span className="text-white font-bold">aliados visionarios</span> que
            crean en la innovación cultural y tecnológica de Latinoamérica.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift transition-all duration-300 hover:border-[#FF2D55]/50">
              <h3 className="text-xl font-['Orbitron'] font-bold mb-6 text-white">INVERSORES</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF2D55]/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#FF2D55]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Nombre</p>
                    <p className="text-white font-bold">Diego Barra T.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF2D55]/20 flex items-center justify-center">
                    <span className="text-[#FF2D55] font-bold">@</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-bold text-sm">bartordiegoh@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift transition-all duration-300 hover:border-[#FF2D55]/50">
              <h3 className="text-xl font-['Orbitron'] font-bold mb-6 text-white">CONTACTO</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF2D55]/20 flex items-center justify-center">
                    <span className="text-[#FF2D55]">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="text-white font-bold">+56 9 9258 5408</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF2D55]/20 flex items-center justify-center">
                    <span className="text-[#FF2D55]">📷</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <p className="text-white font-bold">@bartordiego</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#FF2D55] to-[#EC4899] text-white font-bold text-lg tracking-wider rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover-lift animate-gradient shadow-2xl shadow-[#FF2D55]/50">
              <span className="relative z-10 flex items-center">
                AGENDA UNA REUNIÓN
                <Calendar className="ml-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
              </span>
            </button>

            <button className="group px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:border-[#FF2D55] flex items-center">
              DESCARGAR PITCH
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </button>
          </div>

          {/* Final Message */}
          <p className="text-2xl sm:text-3xl font-['Orbitron'] font-bold text-white/80 italic">
            "La noche nunca volverá a ser la misma"
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#FF2D55]/20 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-3xl font-['Orbitron'] font-black tracking-[0.3em] flex items-center mb-3">
                <span className="text-white">NATTKLUB</span>
                <span className="text-[#FF2D55] text-4xl font-light ml-1">=</span>
              </div>
              <p className="text-gray-500 text-xs tracking-[0.2em]">
                LA RED SOCIAL DE LA VIDA NOCTURNA EN LATAM
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600 text-xs">
                © 2025 Nattklub. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;