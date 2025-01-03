import { ArrowRight, Calendar, MapPin, CpuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Sponsors from "../components/Sponsors";

import competitive_programming from "../../public/competition.png";
import workshop from "../../public/workshop.png";



const Home = () => {
  return (
    <div className="pt-16">
{/* Hero Section */}
<div className="relative h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 animate-gradient-x flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 h-full w-full flex flex-col items-center justify-center space-y-8">
    <AnimateOnScroll animation="slideUp">
      <div className="text-white text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="text-orange-500">Tech</span>
          <span> Parva</span>
          <span className="text-orange-500"> 3.0</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
        Learn and compete your interest !
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/events"
            className="bg-orange-500 text-white px-12 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:bg-orange-600 hover:shadow-xl hover:scale-105"
          >
            Explore Events 
          </Link>
          <Link
            to="/schedule"
            className="bg-white text-indigo-600 px-12 py-4 rounded-full font-semibold border-2 border-indigo-600 shadow-lg transition-all duration-300 transform hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 hover:text-white hover:shadow-xl hover:scale-105"
          >
            View Schedule
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
    <div className="absolute bottom-10 text-center">
      <p className="text-sm text-gray-300">
        Scroll down to explore more <span className="animate-bounce">↓</span>
      </p>
    </div>
  </div>
  {/* Decorative Floating Elements */}
  <div className="absolute top-10 left-10 bg-orange-400 h-16 w-16 rounded-full opacity-50 animate-pulse"></div>
  <div className="absolute bottom-10 right-10 bg-purple-400 h-24 w-24 rounded-full opacity-50 animate-pulse"></div>
  <div className="absolute top-9 right-1/4 bg-indigo-500 h-12 w-12 rounded-full opacity-50 animate-pulse"></div>
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
                title: "Competitions",
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
                title: "Competitive Programming",
                description: "2-hour coding competition with amazing prizes",
                image:competitive_programming,
              },

              {
                title: "Workshops",
                description:
                  "Hands-on learning experiences in various technologies",
                image:workshop,
              },
            ].map((event, index) => (
              <AnimateOnScroll
                key={index}
                animation="slideUp"
                delay={index * 0.2}
              >
                 <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
     <div className="relative">
       <img
         src={event.image}
         alt={event.title}
         className="w-full h-48 object-cover"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/50 to-transparent"></div>
     </div>
     <div className="p-6">
       <h3 className="text-xl font-semibold text-indigo-600 mb-2">
         {event.title}
       </h3>
       <p className="text-gray-600 mb-4">{event.description}</p>
       <Link
         to="/events"
         className="text-purple-500 font-medium flex items-center hover:text-purple-700 transition"
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

      {/* Sponsors Section */}
      <Sponsors />
    </div>
  );
};

export default Home;
