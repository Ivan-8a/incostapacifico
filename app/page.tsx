import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Home as HomeIcon, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- NAV BAR --- */}
      <nav className="fixed w-full z-20 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="self-center text-xl font-bold whitespace-nowrap text-blue-900 tracking-tight">
              IncostaPacifico
            </span>
          </Link>
          <div className="flex gap-4">
             {/* Botón de contacto rápido para móvil */}
            <button className="flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contacto</span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Lo primero que ven al entrar del cartel) --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Tu paraíso en <span className="text-blue-600">Costalegre</span> y Manzanillo
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Encuentra terrenos, casas y oportunidades de inversión en la costa del pacífico mexicano. La mejor selección de bienes raíces a un clic.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/propiedades"
                className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center gap-2"
              >
                Ver Propiedades <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Imagen Hero Decorativa (Placeholder optimizado) */}
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg sm:rounded-xl">
                 {/* Usamos una imagen de stock de Unsplash como placeholder de calidad */}
                <Image
                  src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
                  alt="Vista del mar en Manzanillo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES RÁPIDOS --- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Ubicaciones Premium</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Desde Barra de Navidad hasta las zonas exclusivas de Manzanillo.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <HomeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Propiedades Verificadas</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Documentación en regla y listas para escriturar. Seguridad jurídica.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Trato Directo</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Sin intermediarios excesivos. Agenda tu cita y conoce tu próximo hogar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SIMPLE --- */}
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Incosta Pacifico. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}