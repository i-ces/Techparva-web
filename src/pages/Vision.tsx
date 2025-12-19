import React from "react";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Vision: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: "url('/himal.jpg')" }}
      />

      {/* Warm overlay to match the reference image */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-black/60" />

      {/* Main content (left aligned) */}
      <AnimateOnScroll animation="fadeIn">
        <div className="relative z-10 max-w-4xl lg:max-w-3xl xl:max-w-4xl px-8 md:px-16 py-24">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            The Vision for 2026
          </h1>

          <p className="mt-6 text-white/90 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
            Standing tall as the pride of Pokhara, Mt. Machhapuchhre embodies elegance,
            strength, and an unshakable spirit—qualities that define the vision of
            TechParva 2026. Just as this majestic peak rises sharply and unmistakably
            against the sky, this year’s theme, “Bigger • Bolder • Better,” calls on
            students to elevate their ambitions, sharpen their ideas, and push past
            their limits. TechParva 2026 strives to mirror the bold silhouette of
            Machhapuchhre by creating opportunities that inspire innovation, deeper
            learning, and fearless creativity. Through larger challenges, immersive
            workshops, and meaningful collaborations, we aim to nurture a community of
            thinkers and builders who dare to stand tall, lead with purpose, and shape
            a stronger technological future from the heart of Pokhara.
          </p>

          <p className="mt-6 text-white font-semibold">“Think bigger, innovate bolder and become better.”</p>
        </div>
      </AnimateOnScroll>

      {/* Decorative SVG at lower-right, large and semi-transparent */}
      <img
        src="/3B.svg"
        alt="decorative 3B"
        className="pointer-events-none absolute right-5 bottom-24 w-64 md:w-96 lg:w-[300px] opacity-30 transform rotate-12"
      />
    </section>
  );
};

export default Vision;
