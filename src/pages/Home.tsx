import { ArrowRight, Calendar, MapPin, CpuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Sponsors from "../components/Sponsors";
import Vision from "./Vision";

const pre_event = "/competition.png";
const workshop = "/workshop.png";
const main_event = "/4.jpg";
const club = "/main.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 animate-gradient-x flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 h-full w-full flex flex-col items-center justify-center space-y-10">
          <AnimateOnScroll animation="slideUp">
            <div className="text-white text-center space-y-8">
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight drop-shadow-[0_5px_30px_rgba(0,0,0,0.5)]">
                <span>Tech</span>
                <span className="text-orange-400"> Parva</span>
                <span className="text-orange-400"> 2026</span>
              </h1>

              <p className="text-2xl md:text-4xl font-medium max-w-3xl mx-auto leading-relaxed text-gray-200">
                Learn and compete your interest !
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <div
                className="bg-orange-500 text-white px-16 py-8 text-xl md:text-2xl rounded-full font-semibold
    shadow-[0_10px_40px_rgba(255,140,0,0.4)]
    transition-all duration-500 hover:bg-orange-600 hover:scale-110
    hover:shadow-[0_12px_60px_rgba(255,140,0,0.6)] z-10"
                >
                <Link
                  to="/events"
                >
                  Explore Events
                </Link>
                </div>
                <div
                className="bg-white/90 backdrop-blur text-indigo-700 px-16 py-8 text-xl md:text-2xl rounded-full font-semibold
    border border-white/30 shadow-lg transition-all duration-500
    hover:text-white hover:scale-110
    hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 z-10"
                >
                <Link
                  to="/schedule"
                >
                  View Schedule
                </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        {/* Image Bubble Decorations */}
        <div className="hidden md:block absolute bottom-60 left-10 z-10 animate-float-slow">
          <div className="rounded-full w-48 h-48 animate-glow flex items-center justify-center">
            <div className="h-48 w-48 rounded-full border-2 border-purple-400 overflow-hidden relative">
              <div
                className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
                style={{ backgroundImage: "url('/2.jpg')" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-44 left-20 z-20 animate-float">
          <div className="rounded-full w-32 h-32 animate-glow flex items-center justify-center">
            <div className="h-32 w-32 rounded-full border-2 border-indigo-400 overflow-hidden relative">
              <div
                className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
                style={{ backgroundImage: "url('/19.jpg')" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-16 right-12 animate-float-slow">
          <div className="rounded-full w-52  h-52  animate-glow flex items-center justify-center">
            <div className="h-52  w-52  rounded-full border-2 border-purple-400 overflow-hidden relative">
              <div
                className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
                style={{ backgroundImage: "url('/20.jpg')" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-10 right-48 z-20 animate-float">
          <div className="rounded-full w-40 h-40 animate-glow flex items-center justify-center">
            <div className="h-40 w-40 rounded-full border-2 border-indigo-500 overflow-hidden relative">
              <div
                className="absolute inset-0 rounded-full bg-center bg-cover opacity-90"
                style={{ backgroundImage: "url('/6.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <Vision />
      {/* Gallery Section */}
      {/* <section
              id="gallery"
              className="relative min-h-screen hidden md:flex items-center justify-center
              bg-gradient-to-br from-indigo-950 via-purple-950 to-black "
            > */}
      <section
        id="gallery"
        className="relative min-h-screen hidden md:flex items-center justify-center"
      >
        <AnimateOnScroll animation="scaleUp" delay={0.1}>
          {/* Image Wrapper (click to view Junior-TechFest) */}
          <Link
            to="/events?type=Junior-TechFest"
            className="h-[75vh] w-[90vw] block"
          >
            <div className="h-[75vh] w-[90vw] bg-slate-200 rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-950 to-black overflow-hidden pt-6 ">
              <img
                src={club}
                alt="Techparva Banner"
                className="w-screen h-full object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Link>
        </AnimateOnScroll>

        {/* Ambient glow */}
        {/* <div className="
                absolute inset-0
                bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10
                blur-3xl
                pointer-events-none
              " /> */}
        <div
          className="
                absolute inset-0
                blur-3xl
                pointer-events-none
              "
        />
      </section>
      {/* Key Info Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-10 w-10 " />,
                title: "Date",
                info: "Poush 20-22th / January 4-6th",
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
                link: "/events?type=competition",
              },
            ].map((item, index) => (
              <AnimateOnScroll
                key={index}
                animation="slideUp"
                delay={index * 0.2}
              >
                {item.link ? (
                  <Link to={item.link} className="group relative">
                    <div
                      className="
                            relative flex items-center space-x-4 p-7 rounded-2xl
                            bg-purple-100/80 backdrop-blur-md
                            border border-indigo-600/30
                            shadow-[0_8px_30px_rgba(99,102,241,0.12)]
                            transition-all duration-500
                            hover:-translate-y-2
                            hover:shadow-[0_15px_45px_rgba(99,102,241,0.25)]
                          "
                    >
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                            bg-gradient-to-r from-indigo-400/10 to-purple-400/10 blur-xl"
                      ></div>

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
                  </Link>
                ) : (
                  <div
                    className="
                          group relative flex items-center space-x-4 p-7 rounded-2xl
                          bg-purple-100/80 backdrop-blur-md
                          border border-indigo-600/30
                          shadow-[0_8px_30px_rgba(99,102,241,0.12)]
                          transition-all duration-500
                          hover:-translate-y-2
                          hover:shadow-[0_15px_45px_rgba(99,102,241,0.25)]
                        "
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                          bg-gradient-to-r from-indigo-400/10 to-purple-400/10 blur-xl"
                    ></div>

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
                )}
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
                title: "Pre-Event",
                description:
                  "Engaging fun activities and interactive games for all participants.",

                image: pre_event,
                hoverImage: "/5.jpg",
              },
              {
                title: "Workshops",
                description:
                  "Hands-on learning experiences in various technologies",
                image: workshop,
                hoverImage: "/1.jpg",
              },
              {
                title: "Main Event",
                description:
                  "The big kickoff, competitions, and winning moments.",
                image: main_event,
                hoverImage: "/21.jpg",
              },
            ].map((event, index) => (
              <AnimateOnScroll
                key={index}
                animation="slideUp"
                delay={index * 0.2}
              >
                <div
                  className="group bg-purple-100 rounded-3xl overflow-hidden
                  transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_45px_rgba(99,102,241,0.5)] border border-indigo-600/30"
                >
                  <div className="relative overflow-hidden h-52">
                    {/* Default image */}
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700
            group-hover:opacity-0 group-hover:scale-110
          "
                    />
                    {/* Hover image */}
                    <img
                      src={event.hoverImage}
                      alt={`${event.title} hover`}
                      loading="lazy"
                      decoding="async"
                      className="
            absolute inset-0 w-full h-full object-cover
            opacity-0 scale-105
            transition-all duration-700
            group-hover:opacity-100 group-hover:scale-110
          "
                    />
                  </div>
                  <div className="p-6 relative z-10">
                    <h3
                      className="
                  text-xl font-semibold text-indigo-600 mb-2
                  transition-colors duration-300 group-hover:text-purple-600
                "
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>

                  <Link
                    to={`/events?type=${
                      event.title === "Workshops"
                        ? "workshop"
                        : event.title === "Main Event"
                        ? "competition"
                        : "Junior-TechFest"
                    }`}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  >
                    <span className="px-1 py-1 rounded-full bg-indigo-600/50 text-white font-semibold shadow-md backdrop-blur-sm">
                      Explore
                    </span>
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/40 via-indigo-500/10 to-transparent"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

              {/* I-CES Community Section */}
            <div className="flex flex-row justify-center">
            <div className="relative w-[70%] py-24 bg-gradient-to-br from-black via-indigo-950 to-purple-950 flex flex-col items-center justify-center overflow-hidden rounded-2xl">
              <div className="absolute inset-0 pointer-events-none select-none">
                <svg width="100%" height="100%" className="absolute inset-0" style={{zIndex:0}}>
                  <circle cx="20%" cy="20%" r="3" fill="#38bdf8" opacity="0.5" />
                  <circle cx="80%" cy="30%" r="2.5" fill="#818cf8" opacity="0.5" />
                  <circle cx="30%" cy="80%" r="2" fill="#a5b4fc" opacity="0.5" />
                  <circle cx="60%" cy="60%" r="2.5" fill="#38bdf8" opacity="0.5" />
                  <circle cx="90%" cy="70%" r="2" fill="#818cf8" opacity="0.5" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
                  Join Our <span className="text-orange-400">I-CES</span> Community
                </h2>
                <p className="text-lg md:text-2xl text-gray-200 mb-4 font-medium">
                  This isn’t just membership. It’s representation. Become an <span className="text-orange-400 font-bold">I-CES</span> Community Member and be the face, the voice, and the energy that defines our campus.
                </p>
                <a
                  href="https://discord.com/channels/846300701277159474/849620402237079572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-bold text-xl rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Join Us On Discord
                </a>
              </div>
            </div>
            </div>
      
            {/* Sponsors Section */}
          <Sponsors />

{/* Map Section */}
<div className="w-full py-20 bg-gradient-to-br white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <AnimateOnScroll animation="slideUp">
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-600 mb-8 text-center">
        Event Location
      </h2>
    </AnimateOnScroll>

    <AnimateOnScroll animation="scaleUp" delay={0.2}>
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden
        border border-indigo-600/40
        shadow-[0_20px_60px_rgba(99,102,241,0.4)]">

        <div>
          <a
            href="https://www.google.com/maps/place/CIT+Center+and+Electronics+%26+Computer+Department/@28.254489,83.97638,20z/data=!4m14!1m7!3m6!1s0x89b91d6e97d534e1:0xe4b6c6fc49942b9f!2sGuerrieri+Technology+Center!8m2!3d38.3716078!4d-75.500135!16s%2Fg%2F11vj5clq5r!3m5!1s0x3995947dd802d223:0xcc6f32e6a0be8042!8m2!3d28.2546211!4d83.9762843!16s%2Fg%2F12hptkm6y?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xs hover:underline mt-1"
          >
            {/* View larger map */}
          </a>
        </div>

        <iframe
          title="Event Location Map"
          src="https://www.google.com/maps?q=CIT+Center+and+Electronics+%26+Computer+Department+Pokhara&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Glass overlay */}
        <div className="absolute inset-0 pointer-events-none
          bg-gradient-to-t from-black/30 via-transparent to-transparent">
        </div>
      </div>
    </AnimateOnScroll>

  </div>
</div>
</div>
  );
};

export default Home;
