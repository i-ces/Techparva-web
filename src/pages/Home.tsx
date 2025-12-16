import { ArrowRight, Calendar, MapPin, CpuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Sponsors from "../components/Sponsors";

const competitive_programming = "/competition.png";
const workshop = "/workshop.png";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 animate-gradient-x flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 h-full w-full flex flex-col items-center justify-center space-y-10">
          <AnimateOnScroll animation="slideUp">
            <div className="text-white text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_5px_30px_rgba(0,0,0,0.5)]">
                <span className="text-orange-400">Tech</span>
                <span> Parva</span>
                <span className="text-orange-400"> 3.0</span>
              </h1>

              <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed text-gray-200">
                Learn and compete your interest !
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/events"
                  className="bg-orange-500 text-white px-12 py-4 rounded-full font-semibold shadow-[0_10px_40px_rgba(255,140,0,0.4)]
                  transition-all duration-500 hover:bg-orange-600 hover:scale-110 hover:shadow-[0_15px_60px_rgba(255,140,0,0.6)]"
                >
                  Explore Events
                </Link>

                <Link
                  to="/schedule"
                  className="bg-white/90 backdrop-blur text-indigo-700 px-12 py-4 rounded-full font-semibold border border-white/30
                  shadow-lg transition-all duration-500 hover:text-white hover:scale-110
                  hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

        </div>

      
{/* Image Bubble Decorations */}
<div className="absolute bottom-60 left-10 z-10 animate-float-slow">
  <div className="rounded-full w-40 h-40 animate-glow flex items-center justify-center">
    <div
      className="h-40 w-40 rounded-full border-2 border-purple-400 overflow-hidden relative"
    >
      <div
        className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
        style={{ backgroundImage: "url('/workshop.png')" }}
      ></div>
    </div>
  </div>
</div>

<div className="absolute top-20 left-20 z-20 animate-float">
  <div className="rounded-full w-24 h-24 animate-glow flex items-center justify-center">
    <div
      className="h-24 w-24 rounded-full border-2 border-indigo-400 overflow-hidden relative"
    >
      <div
        className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
        style={{ backgroundImage: "url('/competition.png')" }}
      ></div>
    </div>
  </div>
</div>

<div className="absolute bottom-16 right-12 animate-float-slow">
  <div className="rounded-full w-40 h-40 animate-glow flex items-center justify-center">
    <div
      className="h-40 w-40 rounded-full border-2 border-purple-400 overflow-hidden relative"
    >
      <div
        className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
        style={{ backgroundImage: "url('/workshop.png')" }}
      ></div>
    </div>
  </div>
</div>

<div className="absolute top-10 right-48 z-20 animate-float">
  <div className="rounded-full w-28 h-28 animate-glow flex items-center justify-center">
    <div
      className="h-28 w-28 rounded-full border-2 border-indigo-500 overflow-hidden relative"
    >
      <div
        className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
        style={{ backgroundImage: "url('/competition.png')" }}
      ></div>
    </div>
  </div>
</div>

      </div>

      {/* Key Info Section */}
    <div className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: <Calendar className="h-10 w-10 " />,
          title: "Date",
          info: "Poush 19-24th",
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          title: "Location",
          info: "WRC, CIT, Multimedia Hall",
        },
        {
          icon: <CpuIcon className="h-10 w-10" />,
          title: "Competitions",
          info: "Different domains",
        },
      ].map((item, index) => (
        <AnimateOnScroll key={index} animation="slideUp" delay={index * 0.2}>
          <div
            className="
              group relative flex items-center space-x-4 p-7 rounded-2xl
              bg-white/80 backdrop-blur-md
              border border-indigo-300/30
              shadow-[0_8px_30px_rgba(99,102,241,0.12)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_15px_45px_rgba(99,102,241,0.25)]
            "
          >
            {/* glow layer */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
              bg-gradient-to-r from-indigo-400/10 to-purple-400/10 blur-xl"></div>

            <div className="relative transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]">
              {item.icon}
            </div>

            <div className="relative">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.info}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  </div>
</div>


      {/* Featured Events */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slideUp">
            <h2 className="text-3xl font-bold mb-12 text-indigo-700">
              Featured Events
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Competitive Programming",
                description: "2-hour coding competition with amazing prizes",
                image: competitive_programming,
              },
              {
                title: "Workshops",
                description:
                  "Hands-on learning experiences in various technologies",
                image: workshop,
              },
            ].map((event, index) => (
              <AnimateOnScroll key={index} animation="slideUp" delay={index * 0.2}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg
                  transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/70 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    <Link
                      to="/events"
                      className="inline-flex items-center text-purple-500 font-medium
                      transition-all duration-300 hover:text-purple-700 group-hover:translate-x-1"
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
