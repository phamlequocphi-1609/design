document.addEventListener("DOMContentLoaded", function () {
  const menuLink = document.querySelectorAll(".menu__link");
  const title = document.querySelectorAll("h2[id]");
  const border = document.querySelectorAll(".border__menu");

  menuLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      console.log(targetId);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  function handleScroll() {
    const scrollPosition = window.scrollY;

    title.forEach((section, index) => {
      const sectionTop = section.offsetTop - 150;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        border.forEach((b) => {
          b.style.backgroundColor = "transparent";
        });

        if (border[index]) {
          border[index].style.backgroundColor = "#7c0fd1";
        }

        menuLink.forEach((link) => {
          link.style.color = "#354a60";
        });
        if (menuLink[index]) {
          menuLink[index].style.color = "#7c0fd1";
        }
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});
