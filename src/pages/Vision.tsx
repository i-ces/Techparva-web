import React from "react";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Vision: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: "url('/himal.jpg')" }}
      />

      {/* Warm overlay to match the reference image */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-black/60" />

      {/* Main content (left aligned) */}
      <AnimateOnScroll animation="fadeIn">
        <div className="bg-[rgba(245,245,245,0.7)] relative z-10 max-w-4xl lg:max-w-3xl xl:max-w-4xl px-8 md:px-16 py-24 rounded-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black/80 leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            The Vision for 2026
          </h1>

          <p className="mt-6 text-black/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
            Standing tall as the pride of Pokhara, Mt. Machhapuchhre embodies
            elegance, strength, and an unshakable spirit—qualities that define
            the vision of TechParva 2026. Just as this majestic peak rises
            sharply and unmistakably against the sky, this year’s theme, “Bigger
            • Bolder • Better,” calls on students to elevate their ambitions,
            sharpen their ideas, and push past their limits. TechParva 2026
            strives to mirror the bold silhouette of Machhapuchhre by creating
            opportunities that inspire innovation, deeper learning, and fearless
            creativity. Through larger challenges, immersive workshops, and
            meaningful collaborations, we aim to nurture a community of thinkers
            and builders who dare to stand tall, lead with purpose, and shape a
            stronger technological future from the heart of Pokhara.
          </p>

          <p className="mt-6 text-black/70 font-semibold">
            “Think bigger, innovate bolder and become better.”
          </p>
        </div>
      </AnimateOnScroll>

      {/* Decorative SVG at lower-right, large and semi-transparent */}
      {/* <img
        src="/3B.svg"
        alt="decorative 3B"
        className="pointer-events-none absolute right-5 bottom-24 w-64 md:w-96 lg:w-[300px] opacity-30 transform rotate-12"
      /> */}
      {/* Rotating Badge - Positioned below student info */}
      <div className="pointer-events-none absolute right-5 bottom-24 w-64 md:w-96 lg:w-[300px]">
        <div className="relative w-60 h-60">
          <svg
            className="w-full h-full animate-spin"
            style={{ animationDuration: "10s" }}
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                fill="none"
              />
            </defs>
            <text
              fill="white"
              fontSize="30"
              fontWeight="600"
              letterSpacing="5"
            >
              <textPath href="#circlePath" startOffset="0%">
                • Bigger • Bolder • Better
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full animate-pulse">
              <img src="./logo.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
