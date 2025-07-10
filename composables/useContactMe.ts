import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
export const useContactMe = defineStore("contactMe", {
  state: () => ({}),
  actions: {
    initContactMe() {
      gsap.to(".paralax-wrapper", {
        yPercent: 100,
        duration: 2,
        filter: "blur(15px)",
        opacity: "0.25",
        scrollTrigger: {
          trigger: ".contact-me",
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

      const split = SplitText.create("#split-contact", { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#split-contact",
          start: "top 80%",
          end: "bottom+=300 80%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      });

      tl.from(split.words, {
        duration: 1,
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
        ease: "back.out",
      });
    },
  },
});
