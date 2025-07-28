//Loading JS
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
    setTimeout(() => {
      preloader.remove();
    }, 100);
  }, 35);
});
//Loading JS


//Toggle Button
const toggleBtn = document.getElementById('customToggleBtn');
const toggleIcon = document.getElementById('toggleIcon');


toggleBtn.addEventListener('click', () => {
  const isMenuOpen = toggleIcon.classList.contains('fa-bars');

  toggleIcon.classList.toggle('fa-bars', !isMenuOpen);
  toggleIcon.classList.toggle('fa-times', isMenuOpen);
});


const navbarCollapse = document.getElementById('navbarNav');
navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  toggleIcon.classList.remove('fa-times');
  toggleIcon.classList.add('fa-bars');
});
//Toggle Button


//Active NavBar
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Handle click-based active state
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Handle scroll-based active state
  window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
});
//Active NavBar


// Nav bar close in mobile view
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  const topButton = document.getElementById("top-button");

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (collapse && navbarCollapse.classList.contains('show')) {
        collapse.hide();
      }
    });
  });

  //Applied for arrow button also
  topButton.addEventListener("click", function () {
    const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (collapse && navbarCollapse.classList.contains("show")) {
      collapse.hide();
    }
  });
  //Applied for arrow button also

});


// Typing Animation starts
const texts = ["a web developer", "a problem solver", "a tech enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (index === texts.length) {
    index = 0;
  }

  currentText = texts[index];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  document.querySelector(".text").textContent = currentText.substring(0, charIndex);

  if (charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 100 : 150);
  }
}

type();
// Typing Animation ends


//Form validation
function validation() {
  const name1 = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();


  if (!name1 || !email || !phone || !message) {
    alert("Please fill in all fields!");
    return false;
  }

  // Email check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // 10 Digits Phone format check 
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  const abcd = confirm("Are you sure you want to submit your response?");
  if (!abcd) {
    return false
  }

  document.querySelector("form").reset();
  window.location.href = "successmsg.html";
  return true;
}
//Form validation



