import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import AnimateLogo from "./animatelogo";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Animated SVG Backgrounds */}

      <AnimateLogo name="/icons/Design.svg" cls="bottom-0 right-0" />
      <AnimateLogo name="/icons/Design.svg" cls="bottom-20 right-20" />
      <AnimateLogo name="/icons/Design.svg" cls="bottom-40 right-40" />
      <AnimateLogo name="/icons/Design.svg" cls="top-20 right-20" />
      <AnimateLogo name="/icons/Design.svg" cls="top-0 right-0" />

      <AnimateLogo name="/icons/Design.svg" cls="bottom-0 left-0" />
      <AnimateLogo name="/icons/Design.svg" cls="bottom-20 left-20" />
      <AnimateLogo name="/icons/Design.svg" cls="top-40 left-40" />
      <AnimateLogo name="/icons/Design.svg" cls="top-20 left-20" />
      <AnimateLogo name="/icons/Design.svg" cls="top-0 left-0" />


      <div className="w-full px-4 sm:px-6 lg:px-8 pt-20 min-h-[420px] flex flex-col justify-center relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between justify-center gap-8 relative">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <h3 className="text-2xl font-extrabold mb-8 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-6 text-xl">
              <p className="flex items-center">
                <Mail className="h-8 w-8 mr-4 text-orange-500" />
                <a href="mailto:ices@wrc.edu.np" className="hover:underline">
                  ices@wrc.edu.np
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="h-8 w-8 mr-4 text-orange-500" />
                <a href="tel:+977 9745810304" className="hover:underline">
                  +977 9745810304
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-8 w-8 mr-4 text-orange-500" />
                Lamachaur Road, Pokhara-16
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 space-y-4">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-60 h-60 md:w-40 md:h-40 mx-auto -rotate-90"
              // className="w-40 "
            />
            <hr className="mt-4 text-orange-400 w-[80%] border-orange-600 border-2 rounded-full" />
            <div className="text-center">
              <h2 className="font-bold text-4xl">
                TECH <span className="text-orange-600">PARVA 2026</span>
              </h2>
              <p className="font-bold tracking-wide">
                4th Annual Techological Festival
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-2xl font-extrabold mb-4 tracking-wide">
              Follow Us
            </h3>
            <div className="flex space-x-8">
              <a
                href="https://github.com/i-ces"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-8 w-8 text-indigo-400 hover:text-orange-500" />
              </a>
              <a
                href="https://www.linkedin.com/school/14523422/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 text-orange-500 hover:text-indigo-400" />
              </a>
              <a
                href="https://www.facebook.com/icesnepal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-8 w-8 text-indigo-400 hover:text-orange-500" />
              </a>
              <a
                href="https://www.instagram.com/icesnepal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-8 w-8 text-orange-500 hover:text-indigo-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-orange-400 text-center">
          <p>&copy; {new Date().getFullYear()}, i-CES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
