import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsapTimeline = (rotationRef: any) => {
  const timeline = gsap.timeline();

  timeline.to(rotationRef?.current, {
    autoRotateSpeed: 100,
    duration: 1,
    ease: "power2.out",
  });

  timeline.to(rotationRef?.current, {
    autoRotateSpeed: 0.6,
    duration: 1,
    ease: "power2.inOut",
  });
};
