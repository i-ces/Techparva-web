import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:ices@wrc.edu.np">ices@wrc.edu.np</a>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+977 984-1891060">+977 984-1891060</a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Lamachaur Road, Pokhara-16
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/events" className="hover:text-indigo-400">
                  Events
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-indigo-400">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          <div>
  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a
      href="https://github.com/i-ces/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400"
    >
      <Github className="h-6 w-6" />
    </a>
    <a
      href="https://www.linkedin.com/school/14523422/admin/page-posts/published/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400"
    >
      <Linkedin className="h-6 w-6" />
    </a>
    <a
      href="https://www.facebook.com/icesnepal"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400"
    >
      <Facebook className="h-6 w-6" />
    </a>
    <a
      href="https://www.instagram.com/icesnepal/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400"
    >
      <Instagram className="h-6 w-6" />
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
