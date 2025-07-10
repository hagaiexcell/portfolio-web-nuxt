import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useProject = defineStore("project", {
  state: () => ({}),
  actions: {
    showProject() {
      const items = gsap.utils.toArray(".project-card");
      const lastCard = items[items.length - 1] as HTMLElement;
      let lastCardHeight = lastCard.clientHeight;
      const totalOffset =
        parseFloat(lastCard.getAttribute("data-offset") ?? "0") || 0;

      lastCardHeight += totalOffset;

      items.forEach((item, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item as HTMLElement,
            start:
              "top top+=" + (item as HTMLElement).getAttribute("data-offset"),
            endTrigger: ".projects-container",
            end: `bottom top+=${lastCardHeight}px`,
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
        });

        if (item === lastCard) {
          tl.to(item, {
            scale: 0.9 + 0.02 * index,
            transformOrigin: "center center",
          });
        } else {
          tl.to(
            item as HTMLElement,
            {
              opacity: 0.4,
              scale: 0.9 + 0.02 * index,
              transformOrigin: "center center",
            },
            0,
          );
          tl.to(
            (item as HTMLElement).querySelector(".project-card-overlay"),
            {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            0,
          );
        }
      });

      const split = SplitText.create("#split-project", { type: "chars" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#split-project",
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

      const listProjectCard = document.querySelectorAll(".project-card");
      listProjectCard.forEach((card) => {
        const projectInner = card.querySelector(".project-card-inner");
        const projectLayer = card.querySelector(".project-card-img");
        const projectImg = card.querySelector(".project-card-img img");

        const projectTL = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        projectTL
          .to(projectInner, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "expo.out",
            duration: 0.5,
          })
          .to(
            projectLayer,
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              ease: "expo.out",
              duration: 1,
            },
            "-=0.2",
          )
          .from(
            projectImg,
            {
              scale: 1.2,
              filter: "blur(15px)",
              duration: 1,
            },
            "-=1",
          );
      });
    },
  },
});
