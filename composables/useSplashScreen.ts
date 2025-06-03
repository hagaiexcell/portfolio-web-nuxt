const gsap = useGsap;
export const useSplashScreen = defineStore("splashScreen", {
  state: () => ({
    isVisible: true,
  }),
  actions: {
    hide() {
      const tl = gsap.timeline();

      tl.to(".splash-container-2", {
        duration: 1.4,
        y: "-100%",
        ease: "power2.inOut",
      }).to(".splash-container", {
        duration: 1.5,
        y: "-100%",
        ease: "power2.inOut",
        delay: -1.2,
      });
    },
  },
});
