import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";

const gsap = useGsap;
const words = [
  "Marwahal Hagai Excellent",
  "Front End Web Developer",
  "Mobile Developer",
];

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

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

      const split = SplitText.create(".hero-desc-text", { type: "words" });

      gsap.timeline().from(split.words, {
        duration: 1,
        opacity: 0,
        yPercent: 120,
        stagger: 0.05,
        ease: "back.out",
        delay: 7,
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

      gsap.from(".btn.hero", {
        y: "20vh",
        duration: 1.5,
        ease: "bounce.inOut",
        delay: 7,
      });
      gsap.to(".btn.hero", {
        opacity: 1,
      });

      document.querySelector(".btn")?.addEventListener("mouseenter", () => {
        gsap.to(".btn", {
          y: "0.8rem",
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.to(".btn", {
              boxShadow:
                "0 7px 0 0 rgba(48,140,98,0), 0 12px 0 0 rgba(28,82,57,0)",
              duration: 0.3,
              delay: -0.25,
              ease: "power2.in",
            });
          },
        });
      });

      document.querySelector(".btn")?.addEventListener("mouseleave", () => {
        gsap.to(".btn", {
          y: "0",
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 7px 0 0 #d435f0, 0 12px 0 0 #46114f",
        });
      });

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

      gsap
        .timeline({ repeat: -1 })
        .to(".scroll-down .pointer-wrapper .pointer", {
          top: "28px",
          ease: "power2.out",
          duration: 1.5,
        })
        .to(".scroll-down .pointer-wrapper .pointer", {
          opacity: 0,
          ease: "power2.inOut",
          duration: 0.4,
          delay: -1,
        })
        .set(".scroll-down .pointer-wrapper .pointer", {
          opacity: 1,
          top: "0px",
        });

      // blurring when scrolling down
      ScrollTrigger.create({
        trigger: ".home-hero",
        start: `top+=${window.innerHeight - 700} top`,
        end: "bottom top",
        onEnter: () => {
          gsap.to(".home-hero", {
            filter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            duration: 0.5,
          });
          gsap.to(".cursor-follower", {
            zIndex: "10",
          });
          gsap.to(".scroll-down", {
            y: "20vh",
          });
          gsap.to(".hero-video", {
            opacity: "100%",
          });
          gsap.to(".overlay", {
            zIndex: "20",
          });
        },
        onLeaveBack: () => {
          gsap.to(".home-hero", {
            filter: "blur(0px)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 0.5,
          });
          gsap.to(".cursor-follower", {
            zIndex: "-10",
            opacity: 0.3,
          });
          gsap.to(".scroll-down", {
            y: 0,
            duration: 0.3,
          });
          gsap.to(".hero-video", {
            opacity: "40%",
          });
        },
      });
    },
  },
});
