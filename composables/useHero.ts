import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const gsap = useGsap;
const words = [
  "Marwahal Hagai Excellent",
  "Front End Web Developer",
  "Mobile Developer",
];

gsap.registerPlugin(ScrollTrigger, TextPlugin);
export const useHero = defineStore("hero", {
  state: () => ({}),
  actions: {
    showHero() {
      gsap.from(".hero-content-text", {
        duration: 4,
        y: " -100vh",
        ease: "expo.inOut",
        delay: -0.2,
        stagger: {
          amount: 0.3,
        },
      });

      const underlineTl = gsap.timeline();

      underlineTl
        .to(".hero-title-text .box", {
          width: "100%",
          duration: 1.5,
          ease: "elastic.out",
          delay: 3,
        })
        .from([".hero-title-text .static", ".cursor"], {
          duration: 0.5,
          y: "10vw",
          ease: "power3.out",
          opacity: 1,
        })
        .to(".hero-title-text .box", {
          height: "100%",
          ease: "bounce.in",
          duration: 1.5,
        });

      gsap.from(".cursor", {
        opacity: 0,
        repeat: -1,
        ease: "power2.inOut",
      });

      const wordsTl = gsap.timeline({
        repeat: -1,
        delay: 6,
      });

      words.forEach((word) => {
        const tl = gsap.timeline({
          repeat: 1,
          yoyo: true,
        });
        tl.to(".hero-title-text .text", {
          text: word,
          duration: 2,
        });
        wordsTl.add(tl);
      });

      gsap.from(".hero-desc-text", {
        opacity: 0,
        filter: "blur(20px)",
        ease: "sine.inOut",
        delay: 7,
        duration: 1,
      });

      const iconWave = document.querySelector(".ic-wave");
      gsap.to(iconWave, {
        yoyo: true,
        repeat: -1,
        duration: 0.3,
        rotation: 20,
        transformOrigin: "50% 50%",
        ease: "none",
      });

      // gsap.to(".home-hero", {
      //   y: "-100vh",
      //   ease: "power2.inOut",
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: ".home-hero",
      //     start: "top top",
      //     end: "+=90%",
      //     scrub: 1.2,
      //   },
      // });

      gsap.from(".hero-contact-wrapper .btn", {
        y: "20vh",
        duration: 1.5,
        ease: "bounce.inOut",
        delay: 7,
      });
      gsap.to(".hero-contact-wrapper .btn", {
        opacity: 1,
      });

      document
        .querySelector(".hero-contact-wrapper")
        ?.addEventListener("mouseenter", () => {
          gsap.to(".hero-contact-wrapper .btn", {
            y: "0.8rem",
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              gsap.to(".hero-contact-wrapper .btn", {
                boxShadow:
                  "0 7px 0 0 rgba(48,140,98,0), 0 12px 0 0 rgba(28,82,57,0)",
                duration: 0.3,
                delay: -0.25,
                ease: "power2.in",
              });
            },
          });
        });

      document
        .querySelector(".hero-contact-wrapper")
        ?.addEventListener("mouseleave", () => {
          gsap.to(".hero-contact-wrapper .btn", {
            y: "0",
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 7px 0 0 #308c62, 0 12px 0 0 #1c5239",
          });
        });

      // const contactText = document.querySelector(
      //   ".hero-contact-wrapper .hero-contact-text",
      // );

      // contactText?.addEventListener("mouseenter", () => {
      //   gsap.to(".hero-contact-wrapper .underline-bar", {
      //     width: "100%",
      //     duration: 0.3,
      //     ease: "power2.out",
      //   });
      // });

      // contactText?.addEventListener("mouseleave", () => {
      //   gsap.to(".hero-contact-wrapper .underline-bar", {
      //     width: 0,
      //     duration: 0.3,
      //     ease: "power2.in",
      //   });
      // });

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl.fromTo(
        ".top-side",
        { clipPath: "inset(0 100% 0 0)" },
        { duration: 4, clipPath: "inset(0 0% 0 0)", ease: "none" },
        0,
      );

      tl.fromTo(
        ".right-side",
        { clipPath: "inset(0 0 100% 0)" },
        { duration: 4, clipPath: "inset(0 0 0% 0)", ease: "none" },
        0,
      );

      tl.fromTo(
        ".bottom-side",
        { clipPath: "inset(0 0 0 100%)" },
        { duration: 4, clipPath: "inset(0 0 0 0%)", ease: "none" },
        0,
      );

      tl.fromTo(
        ".left-side",
        { clipPath: "inset(100% 0 0 0)" },
        { duration: 4, clipPath: "inset(0% 0 0 0)", ease: "none" },
        0,
      );
    },
  },
});
