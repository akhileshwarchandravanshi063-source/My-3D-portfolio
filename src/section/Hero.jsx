import React, { useRef } from "react";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const h2Elements = heroRef.current?.querySelectorAll(".hero-text h2");
    const paragraph = heroRef.current?.querySelector("p");
    const button = heroRef.current?.querySelector(".cta-wrapper");

    if (h2Elements && h2Elements.length > 0) {
      gsap.fromTo(
        h2Elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1
        }
      );
    }

    if (paragraph) {
      gsap.fromTo(
        paragraph,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 1
        }
      );
    }

    if (button) {
      gsap.fromTo(
        button,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 1
        }
      );
    }
  }, { scope: heroRef });
  return (
    <section id="hero" ref={heroRef} className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 z-0 pointer-events-none w-full h-full">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-150 h-100 object-cover"
        />
      </div>

      <div className="hero-layout relative z-10">
        <div className="container mx-auto px-5 md:px-10 lg:px-20 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full min-h-[80vh] lg:min-h-screen py-10 lg:py-0">
            {/*Left: Hero Content - First on mobile, Left on desktop*/}
            <header className="flex flex-col justify-center order-1 lg:order-1">
              <div className="flex flex-col gap-6 md:gap-7">
                <div className="hero-text">
                  <h2>
                    Shaping
                    <span className="slide">
                      <span className="wrapper">
                        {words.map((word) => (
                          <span
                            key={word.text}
                            className="flex items-center md:gap-3 gap-1 pb-2"
                          >
                            <img
                              src={word.imgPath}
                              alt={word.text}
                              className="xl:size-12 md:size-10 size-7 md:p-2 p-1 round-full bg-white-50"
                            />
                            <span>{word.text}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </h2>
                  <h2>into Real Projects</h2>
                  <h2>that Deliver Results</h2>
                </div>
                <p className="text-white-50 text-sm md:text-base lg:text-lg relative z-10 pointer-events-none max-w-xl mt-2">
                  I'm Akhileshwar. I architect scalable, high-performance web
                  platforms with React and Node.js.
                </p>
                <div className="relative z-10 mt-2 flex justify-center lg:justify-start">
                  <Button
                    className="md:w-65 md:h-14 w-70"
                    id="button"
                    text="See my Work"
                  />
                </div>
              </div>
            </header>

            {/*Right: 3D Model - Second on mobile, Right on desktop*/}
            <figure className="order-2 lg:order-2 relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] flex items-center justify-center">
              <div className="hero-3d-layout w-full h-full flex items-center justify-center">
                <HeroExperience />
              </div>
            </figure>
          </div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
