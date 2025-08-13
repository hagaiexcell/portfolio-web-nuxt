import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useSkills = defineStore("skills", {
  state: () => ({}),
  actions: {
    showSkills() {
      const split = SplitText.create("#split-tech", { type: "chars" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#split-tech",
          start: "top 80%",
          end: "bottom+=300 80%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      });

      tl.from(split.chars, {
        duration: 1,
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        ease: "back.out",
      });
    },
  },
});
