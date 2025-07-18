import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export const useAbout = defineStore("about", {
  state: () => ({}),
  actions: {
    showAbout() {
      const splitTitle = SplitText.create("#split-about", { type: "chars" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#split-about",
          start: "top 80%",
          end: "bottom+=300 80%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      });

      tl.from(splitTitle.chars, {
        duration: 1,
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        ease: "back.out",
      });

      document
        .querySelector(".btn.about")
        ?.addEventListener("mouseenter", () => {
          gsap.to(".btn.about", {
            y: "0.8rem",
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              gsap.to(".btn.about", {
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
        .querySelector(".btn.about")
        ?.addEventListener("mouseleave", () => {
          gsap.to(".btn.about", {
            y: "0",
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 7px 0 0 #d435f0, 0 12px 0 0 #46114f",
          });
        });

      const splitDesc = SplitText.create(
        ".about-content-wrapper .description p",
        { type: "words", wordsClass: "word" },
      );

      const profileTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-image-wrapper",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      profileTL
        .to(".about-image-inner", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "expo.out",
          duration: 0.5,
        })
        .to(
          ".about-image-layer",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "expo.out",
            duration: 1,
          },
          "-=0.2",
        )
        .from(
          "img.about-image",
          {
            scale: 1.2,
            filter: "blur(15px)",
            duration: 1,
          },
          "-=1",
        );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".home-about",
              start: "top top",
              end: "+=150%",
              pin: true,
              scrub: true,
            },
          })
          .to(splitDesc.words, {
            opacity: 1,
            stagger: 0.05,
          });
      });

      mm.add("(max-width: 1024px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".about-content-wrapper",
              start: "top top",
              end: "bottom+=100 bottom",
              pin: true,
              scrub: true,
              pinSpacing: true,
            },
          })
          .to(splitDesc.words, {
            opacity: 1,
            stagger: 0.05,
          });
      });
    },
  },
});
