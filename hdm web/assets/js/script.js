'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


const translations = {
    en: {
      home: "Home",
      academy: "Academy",
      programming: "Programming & Development",
      services: "Services",
      articles: "All Articles",
      robot: "Robot Page",
      talk: "Talk To A Friend",
      // Add all other text elements
    },
    fr: {
      home: "Accueil",
      academy: "Académie",
      programming: "Programmation & Développement",
      services: "Services",
      articles: "Tous les Articles",
      robot: "Page Robot",
      talk: "Parler à un Ami",
      // Add French translations
    },
    ar: {
      home: "الرئيسية",
      academy: "الأكاديمية",
      programming: "البرمجة والتطوير",
      services: "الخدمات",
      articles: "جميع المقالات",
      robot: "صفحة الروبوت",
      talk: "التحدث إلى صديق",
      // Add Arabic translations
    }
  };
  
  // Language Switching Function
  function updateContent(lang) {
    // Update text content
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.dataset.translate;
      el.textContent = translations[lang][key] || el.textContent;
    });
  
    // Handle RTL/LTR direction
    if(lang === 'ar') {
      document.body.style.direction = 'rtl';
      document.body.classList.add('rtl');
    } else {
      document.body.style.direction = 'ltr';
      document.body.classList.remove('rtl');
    }
  
    // Update select value
    document.getElementById('languageSelect').value = lang;
    
    // Save preference
    localStorage.setItem('lang', lang);
  }
  
  // Initialize Language
  let currentLang = localStorage.getItem('lang') || 'en';
  updateContent(currentLang);
  
  // Language Select Change Handler
  document.getElementById('languageSelect').addEventListener('change', function() {
    currentLang = this.value;
    updateContent(currentLang);
  });
  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }
  