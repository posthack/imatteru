export const animateScroll = (targetElement, animateClass) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animateClass);
      }
    });
  });

  const targets = document.querySelectorAll(targetElement);

  targets.forEach((target) => {
    observer.observe(target);
  });
};
