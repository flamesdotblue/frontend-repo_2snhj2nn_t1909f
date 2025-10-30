import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24" id="home">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance projects
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Crafting modern, interactive web experiences
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            I’m a front‑end developer focused on building delightful, performant interfaces that blend clean design with playful 3D interactions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-gray-800 transition"
            >
              View projects
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow border border-black/10 hover:bg-gray-50 transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
