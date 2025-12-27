import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power3.out",
  duration: 1.1,
});

ScrollTrigger.config({
  ignoreMobileResize: true,
});

export default gsap;
