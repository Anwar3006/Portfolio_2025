import gsap from "gsap";

export const animatePageIn = (containerRef) => {
  const container = containerRef;
  if (!container) return;

  const columns = container.children;

  const tl = gsap.timeline();

  tl.set(columns, { yPercent: 0 }).to(columns, {
    yPercent: 100,
    stagger: {
      amount: 0.3,
      from: "end",
    },
    marker: true,
  });
};

export const animatePageOut = (containerRef) => {
  return new Promise((resolve) => {
    const container = containerRef.current;
    if (!container) {
      resolve();
      return;
    }

    const columns = container.children;

    const tl = gsap.timeline();

    tl.set(columns, { yPercent: -100 }).to(columns, {
      yPercent: 0,
      duration: 0.4,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
        from: "end",
      },
      onComplete: () => {
        resolve(); // Animation complete
      },
    });
  });
};
