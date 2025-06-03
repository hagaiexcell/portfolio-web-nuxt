const gsap = useGsap;

export const useCursor = defineStore("cursor", {
  state: () => ({}),
  actions: {
    initCursorFollower() {
      const moveX = gsap.quickTo(".cursor-follower", "x", {
        duration: 0.8,
        ease: "power1.out",
      });
      const moveY = gsap.quickTo(".cursor-follower", "y", {
        duration: 0.8,
        ease: "power1.out",
      });

      window.addEventListener("mousemove", (e) => {
        moveX(e.clientX);
        moveY(e.clientY);
      });
    },
  },
});
