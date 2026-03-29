import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Menu, X, Facebook } from 'lucide-react';

const WHATSAPP_NUMBER = "573023396482";

const products = [
  {
    id: 1,
    name: "Caja de Manillas",
    description: "Una caja especial con diferentes diseños de manillas hechas con amor.",
    price: "$35.000 COP",
    image: "https://jlbvkwlvzdwiniqiizlo.supabase.co/storage/v1/object/public/almacenamientos%20para%20paginas%20web/Imagenes/Gemini_Generated_Image_px017npx017npx01.png",
  },
  {
    id: 2,
    name: "Collares y Camisetas comodas",
    description: "Ropa comoda con diseños que buscan representar la neurodiversidad, incluyen un collar especial.",
    price: "$55.000 COP",
    image: "https://jlbvkwlvzdwiniqiizlo.supabase.co/storage/v1/object/public/almacenamientos%20para%20paginas%20web/Imagenes/camisa%20de%20moda.jpeg",
  },
  {
    id: 3,
    name: "Juguetes Antiestrés y Sensoriales",
    description: "Texturas calmantes para reducir ansiedad y promover calma en momentos de estrés.",
    price: "$28.000 COP",
    image: "https://jlbvkwlvzdwiniqiizlo.supabase.co/storage/v1/object/public/almacenamientos%20para%20paginas%20web/Imagenes/juguetes.jpeg",
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-sky-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
              {/* Nota: Reemplaza el src con la ruta real de tu logo cuando lo subas, ej: "/logo.png" */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-300 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-sm overflow-hidden">
                <img src="/logo.png" alt="Otro Lenguaje Logo" className="w-full h-full object-cover hidden" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="logo-fallback">OL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-cyan-800 leading-tight">Otro Lenguaje</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollTo('home')} className="text-slate-600 hover:text-cyan-700 font-medium transition-colors">Inicio</button>
              <button onClick={() => scrollTo('productos')} className="text-slate-600 hover:text-cyan-700 font-medium transition-colors">Productos</button>
              <button onClick={() => scrollTo('nosotros')} className="text-slate-600 hover:text-cyan-700 font-medium transition-colors">Sobre Nosotros</button>
              <button onClick={() => scrollTo('contacto')} className="text-cyan-700 font-medium hover:text-cyan-800 transition-colors flex items-center gap-1">
                Contacto <MessageCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <button onClick={() => scrollTo('home')} className="block w-full text-left px-3 py-2 text-slate-600 font-medium">Inicio</button>
            <button onClick={() => scrollTo('productos')} className="block w-full text-left px-3 py-2 text-slate-600 font-medium">Productos</button>
            <button onClick={() => scrollTo('nosotros')} className="block w-full text-left px-3 py-2 text-slate-600 font-medium">Sobre Nosotros</button>
            <button onClick={() => scrollTo('contacto')} className="block w-full text-left px-3 py-2 text-cyan-700 font-medium flex items-center gap-2">
              Contacto <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Inicio (Home) */}
        <section id="home" className="relative px-4 py-20 sm:py-32 lg:py-40 max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6">
              Otro Lenguaje: <span className="text-cyan-700 block mt-2">Conectando mundos que no necesitan palabras.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Somos un emprendimiento familiar dedicado a la neuroinclusión. Ofrecemos herramientas prácticas que identifican, apoyan y visibilizan la neurodiversidad, fomentando empatía y respeto en la sociedad. Explora productos diseñados para facilitar la socialización de personas neurodivergentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollTo('productos')}
                className="px-8 py-4 bg-cyan-700 text-white rounded-full font-medium hover:bg-cyan-800 transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                Explorar Productos
              </button>
            </div>
          </motion.div>
        </section>

        {/* Productos */}
        <section id="productos" className="py-20 px-4 max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 my-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Productos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Nuestros accesorios combinan funcionalidad sensorial con diseño simbólico, ideales para identificación rápida y bienestar diario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-slate-200">
                  {/* Nota: Reemplaza el src con las imágenes reales de tus productos */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                    <span className="text-lg font-medium text-cyan-800">{product.price}</span>
                    <a 
                      href={getWhatsAppLink(`Hola, quiero comprar este producto: ${product.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-cyan-700 text-white text-sm rounded-full font-medium hover:bg-cyan-800 transition-colors flex items-center gap-2"
                    >
                      Comprar <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center bg-sky-50 p-6 rounded-2xl">
            <p className="text-cyan-800 font-medium">
              Todos los productos priorizan calidad hipoalergénica y diseños inclusivos.
            </p>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section id="nosotros" className="py-20 bg-sky-50/50 border-y border-sky-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-slate-900 mb-12 text-center">Sobre Nosotros</h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">¿Quiénes somos?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Un emprendimiento familiar comprometido con la neuroinclusión. Transformamos la percepción social de la neurodiversidad mediante productos simbólicos y prácticos que generan empatía y reconocimiento.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Nuestra Misión</h3>
                <p className="text-slate-700 leading-relaxed">
                  Facilitar la socialización y el respeto hacia personas neurodivergentes, apoyando a familias, redes de cuidado y madres cuidadoras. Cada pieza conecta mundos sin necesidad de palabras.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Impacto Social</h3>
                <p className="text-slate-700 leading-relaxed">
                  Promovemos la visibilidad y el apoyo real, contribuyendo a una sociedad más empática.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nueva Información (Visión, Qué haces, etc.) */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Visión</h3>
                <p className="text-slate-700 leading-relaxed">
                  Ser una marca referente en neuroinclusión en Colombia y la región, reconocida por crear productos que visibilizan, acompañan y facilitan la vida de las personas neurodivergentes, promoviendo una sociedad más empática, respetuosa y consciente de la diversidad.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">¿Qué hacemos?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Diseñamos y ofrecemos productos de apoyo e identificación con enfoque neuroinclusivo, como manillas, carnets, collares, camisetas y juguetes sensoriales, pensados para brindar bienestar, facilitar la socialización y apoyar la identificación rápida en diferentes contextos.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">¿Para quién es?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Para personas neurodivergentes, sus familias y cuidadores que buscan apoyo en su día a día, así como para instituciones, docentes y cualquier persona que desee promover una convivencia más empática e inclusiva.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">¿Por qué elegirnos?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Porque cada producto está diseñado con un propósito claro: facilitar la comprensión, el respeto y la inclusión. Combinamos funcionalidad, diseño discreto y materiales de calidad para ofrecer soluciones reales, pensadas desde la experiencia y el compromiso con la neurodiversidad.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">¿Qué ofrecemos?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Ofrecemos accesorios de identificación, productos sensoriales y elementos de visibilización que ayudan a comunicar necesidades sin palabras. Desde manillas y carnets hasta juguetes antiestrés y prendas con significado, cada producto cumple una función práctica y social.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Beneficios</h3>
                <p className="text-slate-700 leading-relaxed">
                  Brindamos tranquilidad en situaciones cotidianas, facilitamos la identificación en momentos clave, reducimos el estrés mediante estímulos sensoriales y promovemos la inclusión a través de la visibilización. Nuestros productos no solo acompañan, también generan comprensión y empatía en el entorno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-32 px-4 bg-gradient-to-b from-white to-sky-50/80">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Contacto</h2>
            <p className="text-slate-600 mb-12 text-lg md:text-xl">
              Estamos aquí para ayudarte.
            </p>
            
            <div className="flex flex-col items-center gap-8 mb-16">
              <a 
                href={getWhatsAppLink("Hola, quiero información sobre joyería de Otro Lenguaje")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20BD5A] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-lg w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Empresarial: +57 3023396482
              </a>

              {/* Separador visual */}
              <div className="flex items-center gap-4 w-full max-w-[200px] opacity-60">
                <div className="h-px bg-slate-300 flex-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-600"></div>
                <div className="h-px bg-slate-300 flex-1"></div>
              </div>

              <p className="text-slate-600 max-w-md text-base leading-relaxed">
                Envíanos un mensaje para consultas, personalizaciones o pedidos. Responderemos en minutos.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://www.facebook.com/share/1HzLPScUbz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full shadow-sm hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800 text-cyan-700 font-medium transition-all duration-300"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Síguenos en Facebook
              </a>
              <p className="text-sm text-slate-500 mt-2">para novedades y testimonios.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-slate-300 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Otro Lenguaje. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
