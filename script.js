// animação ao aparecer na tela

const elements = document.querySelectorAll(".section, .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
});

elements.forEach((el) => observer.observe(el));