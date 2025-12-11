  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Toggle mobile menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Smooth scroll function
 function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Wait for next animation frame to ensure element is visible
  requestAnimationFrame(() => {
    const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth"
    });
  });

  // Close mobile menu if open
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }
}


  // Attach smooth scroll to all nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // Prevent default jump
      const href = link.getAttribute("href").substring(1);
      smoothScroll(href);
    });
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); 
      const href = link.getAttribute("href").substring(1);
      smoothScroll(href);
    });
  });


  // FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector("span.text-xl");
    answer.classList.toggle("hidden");

    // Change + to -
    if (answer.classList.contains("hidden")) {
      icon.textContent = "+";
    } else {
      icon.textContent = "-";
    }
  });
});


// Smooth scroll for "Learn More" button
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href").substring(1);
    smoothScroll(href);
  });
});



