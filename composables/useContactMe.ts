import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const useContactMe = defineStore("contactMe", {
  state: () => ({}),
  actions: {
    initContactMe() {
      gsap.to(".paralax-wrapper", {
        yPercent: 100,
        duration: 2,
        scrollTrigger: {
          trigger: ".contact-me",
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    },
  },
});
