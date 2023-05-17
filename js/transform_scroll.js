const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  const backText = section.querySelector('.back-text');
  const sectionTop = section.offsetTop - window.innerHeight / 2;
  const sectionBottom = section.offsetTop + section.offsetHeight - window.innerHeight / 2;

  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;
    if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
      section.classList.add('active');
      const movePos = (scrollPos - sectionTop) / 2; // divide by 2 to move text slower
      backText.style.transform = `translate(0%, calc(20% - ${movePos}px))`;
    } else {
      section.classList.remove('active');
    }
  });
});
