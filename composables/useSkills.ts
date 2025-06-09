import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useSkills = defineStore("skills", {
  state: () => ({}),
  actions: {
    async showSkills() {
      const split = SplitText.create("#split-tech", { type: "chars" });

      await nextTick();

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

      gsap.to(".skill-box", {
        xPercent: -100,
        repeat: -1,
        duration: 0.2,
      });

      const marqueeContent = document.querySelector("#skillsContent");
      const marqueeContent2 = document.querySelector("#skillsContent2");
      const skillBox = marqueeContent?.querySelector(".skill-box");
      const boxWidth = skillBox?.clientWidth || 0;
      const gap = 32; // if gap-8 (8*4=32px)
      const cards = 12;
      const width = cards * (boxWidth + gap);

      gsap.fromTo(
        marqueeContent,
        { x: 0 },
        {
          x: `-=${width}`,
          duration: 20,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % width),
          },
        },
      );
      gsap.fromTo(
        marqueeContent2,
        { x: -width },
        {
          x: `+=${width}`,
          duration: 20,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % width),
          },
        },
      );

      // gsap.fromTo(
      //   "#skillsContainer2",
      //   {
      //     x: 0,
      //   },
      //   {
      //     x: width,
      //     duration: 20,
      //     repeat: -1,
      //     modifiers: {
      //       x: gsap.utils.unitize((x) => parseFloat(x) % width), // looping halus
      //     },
      //   },
      // );
    },
  },
});
