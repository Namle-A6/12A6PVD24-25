document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-link");
  let currentUrl = window.location.href;

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });

    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi, this is the website of class 12A6,";
  const typingText = document.querySelector(".typing-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80); // tốc độ gõ
    }
  }

  type(); // Bắt đầu hiệu ứng
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
});
