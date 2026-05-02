// MOBILE MENU TOGGLE
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const closeBtn = document.querySelector(".close-btn");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    closeBtn.style.transform = "rotate(0deg)";
    closeBtn.style.transition = "transform 0.4s ease";
  } else {
    closeBtn.style.transform = "rotate(180deg)";
    setTimeout(() => {
      closeBtn.style.transform = "rotate(0deg)";
    }, 400);
  }
}

// ACTIVE LINK HIGHLIGHT
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    
    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });
  
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// Handles project data display and modal open/close functionality
// Project data for modal display
const projData = {
  1: {
    title: "🏦 Bank Management System",
    desc: "A system that manages customer accounts, deposits, withdrawals, balance inquiry, and transaction records with secure handling.",
    tech: "Java, SQL"
  },
  2: {
    title: "📚 Library Management System",
    desc: "Manages book inventory, issue/return system, and user records for efficient library operations.",
    tech: "Java, File Handling"
  },
  3: {
    title: "❓ Quiz Application",
    desc: "Interactive MCQ-based quiz system that calculates score and shows results instantly.",
    tech: "Java, OOP"
  },
  4: {
    title: "🌐 Network Setup (DCN)",
    desc: "Designed and simulated a small organization network with proper IP configuration and connectivity.",
    tech: "Networking, Packet Tracer"
  },
  5: {
    title: "🧑‍🎓 Student Attendance System",
    desc: "System to manage student attendance records with search and report features.",
    tech: "Java / SQL"
  },
  6: {
    title: "💱 Currency Converter",
    desc: "Converts currency values using real-time or static exchange rates with simple UI.",
    tech: "JavaScript, HTML, CSS"
  },
  7: {
    title: "📷 QR Info Generator",
    desc: "Generates QR codes from text or links for quick sharing and scanning.",
    tech: "JavaScript / Python"
  },
  8: {
    title: "🛒 E-Commerce Website",
    desc: "Responsive online shopping website with product listing and cart system.",
    tech: "HTML, CSS, JavaScript"
  },
  9: {
    title: "🌦 IoT Weather System",
    desc: "IoT-based weather monitoring system using sensors for temperature and humidity.",
    tech: "Arduino, Sensors"
  },
  10: {
    title: "🚦 Traffic Light Controller",
    desc: "Automated traffic signal system using timed LED control.",
    tech: "Arduino, C++"
  },
  11: {
    title: "🚗 Obstacle Avoiding Car",
    desc: "Robot car that detects obstacles and changes direction automatically.",
    tech: "Arduino, Ultrasonic Sensor"
  },
  12: {
    title: "🧭 Path Follower Robot",
    desc: "Robot that follows a predefined path using IR sensors.",
    tech: "Arduino, IR Sensors"
  }
};

/* OPEN MODAL */
function openModal(id) {
  const modal = document.getElementById("proj-modal");
  const content = document.getElementById("proj-modal-body");

  modal.style.display = "flex";

  content.innerHTML = `
    <h2>${projData[id].title}</h2>
    <p style="margin-top:10px; line-height:1.5;">${projData[id].desc}</p>
    <p style="margin-top:10px;">
      <b style="color:#ff80c0;">Tech:</b> 
      <span style="color:#ffb3d9; font-weight:bold;">
        ${projData[id].tech}
      </span>
    </p>
  `;
}

/* CLOSE MODAL */
function closeModal(e) {
  const modal = document.getElementById("proj-modal");

  if (!e || e.target.id === "proj-modal") {
    modal.style.display = "none";
  }
}
// ===== CERTIFICATES SECTION JS (SCOPED & PREFIXED - NO CONFLICTS) =====
const certData = [
  { img: "cert1.jpg", title: "Web Development", desc: "Built responsive websites using HTML, CSS, and modern web design practices." },
  { img: "cert2.jpg", title: "JavaScript", desc: "Learned to create interactive and dynamic web applications using JavaScript." },
  { img: "cert3.jpg", title: "React", desc: "Developed scalable user interfaces using React components and hooks." },
  { img: "cert4.jpg", title: "Python", desc: "Gained programming skills in Python for automation, backend, and problem-solving." },
  { img: "cert5.jpg", title: "Data Science", desc: "Worked with data analysis, visualization, and extracting insights from datasets." },
  { img: "cert6.jpg", title: "Machine Learning", desc: "Built predictive models using core machine learning algorithms." },
  { img: "cert7.jpg", title: "UI/UX Design", desc: "Designed intuitive and user-friendly interfaces focusing on user experience." },
  { img: "cert8.jpg", title: "Cloud Computing", desc: "Learned cloud fundamentals and deployment of applications on cloud platforms." }
];

function certOpenModal(index) {
  const modal = document.getElementById("cert-modal");

  document.getElementById("cert-modal-img").src = certData[index - 1].img;
  document.getElementById("cert-modal-title").innerText = certData[index - 1].title;
  document.getElementById("cert-modal-text").innerText = certData[index - 1].desc;

  modal.style.display = "flex";
}

function certCloseModal() {
  document.getElementById("cert-modal").style.display = "none";
}

/* Close when clicking outside */
window.addEventListener("click", function(event) {
  const modal = document.getElementById("cert-modal");

  if (event.target === modal) {
    modal.style.display = "none";
  }
});
/* ========================= */
/* ⌨️ TYPEWRITER ANIMATION   */
/* home_page.js              */
/* ========================= */

// Words to cycle through in the typewriter effect
const dcWords = [
  "A Developer",
  "into AI",
  "Learning ML",
  "Building Projects",
  "Growing Daily"
];

// Target elements — using dc- prefixed IDs and classes
const dcEl      = document.getElementById("dc-changing");
const dcWrapper = document.querySelector(".dc-changing-wrapper");

/* ========================= */
/* 📐 MEASURE MAX WIDTH      */
/* Prevents layout shift as  */
/* words change length       */
/* ========================= */

function dcMeasureMaxWidth() {
  // Create an invisible probe element to measure text width
  const probe = document.createElement("span");

  // Match the exact font used in the animation
  probe.style.cssText = `
    font-family: 'Share Tech Mono', monospace;
    font-size: ${getComputedStyle(document.querySelector(".dc-container")).fontSize};
    visibility: hidden;
    position: absolute;
    white-space: nowrap;
  `;

  document.body.appendChild(probe);

  // Find the widest word and lock the wrapper to that width
  let max = 0;
  dcWords.forEach(word => {
    probe.textContent = word;
    max = Math.max(max, probe.offsetWidth);
  });

  document.body.removeChild(probe);   // Clean up probe from DOM

  dcWrapper.style.width = max + "px"; // Lock wrapper width to prevent jumping
}

/* ========================= */
/* 🔤 TYPEWRITER STATE       */
/* ========================= */

let dcWordIndex  = 0;       // Which word we're currently on
let dcCharIndex  = 0;       // How many characters are currently shown
let dcIsDeleting = false;   // Whether we're typing or erasing

/* ========================= */
/* ▶️ TYPE FUNCTION          */
/* Recursively types and     */
/* deletes each word         */
/* ========================= */

function dcType() {
  const word = dcWords[dcWordIndex];

  if (!dcIsDeleting) {
    // — TYPING PHASE —
    dcCharIndex++;
    dcEl.textContent = word.substring(0, dcCharIndex);

    if (dcCharIndex === word.length) {
      // Word fully typed — pause before starting to delete
      setTimeout(() => {
        dcIsDeleting = true;
        dcType();
      }, 1500);                   // Pause duration at end of word
      return;
    }

    setTimeout(dcType, 80);       // Typing speed (ms per character)

  } else {
    // — DELETING PHASE —
    dcCharIndex--;
    dcEl.textContent = word.substring(0, dcCharIndex);

    if (dcCharIndex === 0) {
      // Word fully deleted — move to next word
      dcIsDeleting = false;
      dcWordIndex = (dcWordIndex + 1) % dcWords.length;  // Loop back to start

      // Restart glitch animation on each new word
      dcEl.classList.remove("dc-glitch-animate");
      void dcEl.offsetWidth;                  // Force reflow to restart CSS animation
      dcEl.classList.add("dc-glitch-animate");

      setTimeout(dcType, 300);    // Pause before typing next word
      return;
    }

    setTimeout(dcType, 40);       // Deleting speed (faster than typing)
  }
}

/* ========================= */
/* 🚀 INIT ON PAGE LOAD      */
/* ========================= */

window.addEventListener("load", () => {
  dcMeasureMaxWidth();            // Lock wrapper width before animation starts
  setTimeout(dcType, 500);       // Small delay before first word begins typing
});