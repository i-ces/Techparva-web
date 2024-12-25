import { ArrowRight, Calendar, MapPin, CpuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[95vh] bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <AnimateOnScroll animation="slideUp">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-orange-500">Tech</span>
                <span>Parva</span>
                <span className="text-orange-500"> 3.0</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Join us for the grand tech festival in WRC. Experience
                innovation, learn, and connect with tech enthusiasts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/events"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200"
                >
                  Explore Events
                </Link>
                <Link
                  to="/schedule"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Key Info Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-indigo-600" />,
                title: "Date",
                info: "Poush 19-24th",
              },
              {
                icon: <MapPin className="h-10 w-10 text-indigo-600" />,
                title: "Location",
                info: "WRC, CIT, Multimedia Hall",
              },
              {
                icon: <CpuIcon className="h-10 w-10 text-indigo-600" />,
                title: "Competetions",
                info: "Different domains",
              },
            ].map((item, index) => (
              <AnimateOnScroll
                key={index}
                animation="slideUp"
                delay={index * 0.2}
              >
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p>{item.info}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slideUp">
            <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hackathon",
                description: "24-hour coding competition with amazing prizes",
                image:
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
              },
              {
                title: "Tech Talks",
                description: "Inspiring presentations from industry leaders",
                image:
                  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
              },
              {
                title: "Workshops",
                description:
                  "Hands-on learning experiences in various technologies",
                image:
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
              },
            ].map((event, index) => (
              <AnimateOnScroll
                key={index}
                animation="slideUp"
                delay={index * 0.2}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Link
                      to="/events"
                      className="text-indigo-600 font-medium flex items-center hover:text-indigo-700"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
