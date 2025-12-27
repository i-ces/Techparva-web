import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden" style={{ opacity: 0.85 }}>
      {/* Animated SVG Backgrounds */}
      <img
        src="/icons/AIArtBattle.svg"
        alt="AI Art Battle"
        className="pointer-events-none select-none absolute left-[-60px] top-10 w-40 h-40 opacity-20 animate-spin-slow z-0"
        style={{ animationDuration: '18s' }}
      />
      <img
        src="/icons/Design.svg"
        alt="Design"
        className="pointer-events-none select-none absolute right-[-60px] bottom-10 w-44 h-44 opacity-20 animate-float-slow z-0"
        style={{ animationDuration: '22s' }}
      />
      <img
        src="/icons/BlindTech.svg"
        alt="Blind Tech"
        className="pointer-events-none select-none absolute right-[90px] top-10 w-44 h-44 opacity-20 animate-float-slow z-0"
        style={{ animationDuration: '22s' }}
      />
      <img
        src="/icons/CWC.svg"
        alt="CWC"
        className="pointer-events-none select-none absolute left-[90px] bottom-1 w-44 h-44 opacity-20 animate-float-slow z-0"
        style={{ animationDuration: '22s' }}
      />
      <img
        src="/icons/Datathon.svg"
        alt="Datathon"
        className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-10 w-44 h-44 opacity-20 animate-float-slow z-0"
        style={{ animationDuration: '22s' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[420px] flex flex-col justify-center relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 relative">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <h3 className="text-3xl font-extrabold mb-8 tracking-wide">Contact Us</h3>
            <div className="space-y-6 text-2xl">
              <p className="flex items-center">
                <Mail className="h-10 w-10 mr-4" />
                <a href="mailto:ices@wrc.edu.np" className="hover:underline">ices@wrc.edu.np</a>
              </p>
              <p className="flex items-center">
                <Phone className="h-10 w-10 mr-4" />
                <a href="tel:+977 9745810304" className="hover:underline">+977 9745810304</a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-10 w-10 mr-4" />
                Lamachaur Road, Pokhara-16
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            <img
              src="/icons/logo.svg"
              alt="Logo"
              // className="w-60 h-60 md:w-70 md:h-70 object-contain mx-auto drop-shadow-xl"
              style={{ filter: 'drop-shadow(0 0 40px #f15a26aa)' }}
            />
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-3xl font-extrabold mb-8 tracking-wide">Follow Us</h3>
            <div className="flex space-x-12">
              <a
                href="https://github.com/i-ces"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                <Github className="h-14 w-14" />
              </a>
              <a
                href="https://www.linkedin.com/school/14523422/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                <Linkedin className="h-14 w-14" />
              </a>
              <a
                href="https://www.facebook.com/icesnepal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                <Facebook className="h-14 w-14" />
              </a>
              <a
                href="https://www.instagram.com/icesnepal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                <Instagram className="h-14 w-14" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()}, i-CES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
