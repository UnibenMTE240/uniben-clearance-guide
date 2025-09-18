// FOR ERROR PAGES
const bckToHm = document.querySelector(".bToHm");
if (bckToHm) {
bckToHm.addEventListener('click', () => {
    window.location.href="index.html";
});
}


// FOR MENU

const hamburger = document.getElementById("mnBut");
    const menuContainer = document.getElementById("menuContainer");
    const closeMenuButton = document.getElementById("closeMenuButton");
    const overlay = document.getElementById("overlay");
    const clearance = document.getElementById("clearance");
    const clearanceSubmenu = document.getElementById("clearanceSubmenu");
    const arrow = clearance.querySelector('.arrow');
    const sub = document.querySelectorAll('.subs')
    function openMenu() {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";

      if (!expanded) {
        hamburger.setAttribute("aria-expanded", "true");
        menuContainer.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = 'hidden';
      } else {
        hamburger.setAttribute("aria-expanded", "false");
      }
    }

    function closeMenu() {
      hamburger.setAttribute("aria-expanded", "false");
      menuContainer.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = 'auto';
    }

    hamburger.addEventListener("click", openMenu);
    closeMenuButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    clearance.addEventListener("click", () => {
      clearanceSubmenu.classList.toggle("open");
      arrow.classList.toggle("rotate");
    });
    sub.forEach(sub => {
        sub.addEventListener('click', closeMenu);
    });


const docTitle = document.querySelector(".docTtl");
const pageTitle = document.querySelector(".docLgNm");
const pgTitle = document.querySelector(".pgTitle");

if (docTitle && pgTitle) {
    const pgTitles = pgTitle.textContent;
    window.addEventListener('scroll', changeName)
    
    function changeName() {
        const isDarkMode = html.classList.contains("dark-mode");
        const rect = docTitle.getBoundingClientRect();
        
        if (rect.top < 43 && pageTitle.textContent != pgTitles.toUpperCase()) {
            isDarkMode ? pageTitle.style.color = "limegreen" : pageTitle.style.color = "#00795f";
            pageTitle.textContent = pgTitles.toUpperCase();
            pageTitle.classList.add("fadeMove");
        } else if (rect.top > 55 && pageTitle.textContent != "UNIBEN CLEARANCE GUIDE") {
            isDarkMode ? pageTitle.style.color = "plum" : pageTitle.style.color = "indigo";
            pageTitle.textContent = "UNIBEN CLEARANCE GUIDE";
            pageTitle.classList.add("fadeMoveI");
        }
        
    }
}
if (pageTitle) {
    pageTitle.addEventListener('animationend', () => {
        pageTitle.classList.remove("fadeMove");
        pageTitle.classList.remove("fadeMoveI");
    })
}

function viewScroll() {
    const links = document.querySelectorAll("a");

links.forEach(item => {
    const href = item.getAttribute("href");

    if (href && href.startsWith("#") && href.length > 1) {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            const h2 = targetSection?.querySelector("h2");

            if (h2) {
                h2.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    }
});

}


const checklist = document.querySelectorAll(".checklist a");
if (checklist) {
    checklist.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = item.getAttribute("href"); 
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

// Scroll to Top Button Toggle
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const closeIC = document.getElementById("closeFas");
if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  scrollToTopBtn.addEventListener("mouseover", () => {
    closeIC.classList.add("scrollToTopBtnAnimate");
  });
  scrollToTopBtn.addEventListener("mouseout", () => {
    closeIC.classList.remove("scrollToTopBtnAnimate");
  });
}

const whatsappBtn = document.querySelector(".whatsapp-float");
const whatsappFloatFas = document.getElementById("whatsapp-float-fas");
if (whatsappBtn) {
  whatsappBtn.addEventListener("mouseover", () => {
    whatsappFloatFas.classList.add("whatsappFloatFasAnimate");
  });
  whatsappBtn.addEventListener("mouseout", () => {
    whatsappFloatFas.classList.remove("whatsappFloatFasAnimate");
  });
}


//fetch("https://unibenmte240.github.io/MTE240/footer.html")
fetch("http://127.0.0.1:5500/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
    getYear();
    viewScroll();
});

function getYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
}

/*
const title = document.querySelector("title");
const main = document.querySelector("body");

const dyna = document.querySelector("#dynaCont");
if (dyna && title.textContent == "UNIBEN 100L Clearance Guide") {
    setTimeout(() =>{
        main.innerHTML = `
         <div class="preInfo">
              <p><b>NAME</b>: MTE240 Project</p>
                <p><b>DURATION</b>: ≈ 5 months</p>
             <p><b>DESCRIPTION</b>: This website is designed to support 100-level students of the University of Benin by providing clear, accessible guidance and resources related to the clearance process.</p>
            <p><b>DEVELOPER</b>: UNIBEN MTE240</p>
       </div>
        <div class="cell">
        <a href="index2.html">Homepage<a>
        </div>
         <div class="cell">
        <a href="record-file.html">Record File<a>
        </div>
        
        <footer class="grid-container">
            <div class="grid-x grid-margin-x">
               <div class="cell align-center-middle text-center ftLst" style="margin-top: 10%">
               <p class="text-center copyright" style="font-size: 1rem">&copy; 2025 UNIBEN Mechatronics Eng 240. All rights reserved</p>
             </div>
            </div>
        </footer>
        
        `;
    }, 2000);
}
*/
