// FOR ERROR PAGES
const bckToHm = document.querySelector(".bToHm");
if (bckToHm) {
bckToHm.addEventListener('click', () => {
    window.location.href="index.html";
});
}
// FOR MENU
const menuButton = document.getElementById("mnBut");
const menuClButton = document.getElementById("mnClBut");
if (menuButton) {
menuButton.addEventListener("click", function () {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    
    if (!expanded) {
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.setAttribute("aria-expanded", "false");
    }
});
    menuClButton.addEventListener("click", function () {
        menuButton.setAttribute("aria-expanded", "false");
    });
}
    // CLEARANCE
const onClButton = document.getElementById("onCl");
const phyClButton = document.getElementById("phyCl");

if (onClButton && phyClButton) {
    onClButton.addEventListener("click", () => {
        window.location.href="#";
    });
    phyClButton.addEventListener("click", () => {
        window.location.href="#";
    });
}

const docTitle = document.querySelector(".docTtl");
const pageTitle = document.querySelector(".docLgNm");
const pgTitle = document.querySelector(".pgTitle");

if (docTitle && pgTitle) {
    const pgTitles = pgTitle.textContent;
    window.addEventListener('scroll', changeName)
    
    function changeName() {
        const rect = docTitle.getBoundingClientRect();
        if (rect.top < 43 && pageTitle.textContent != pgTitles.toUpperCase()) {
            pageTitle.style.color = "#00795f";
            pageTitle.textContent = pgTitles.toUpperCase();
            pageTitle.classList.add("fadeMove");
        } else if (rect.top > 55 && pageTitle.textContent != "UNIBEN CLEARANCE GUIDE") {
            pageTitle.style.color = "indigo";
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

const links = document.querySelectorAll(".guide-section a");

if (links) {
    links.forEach(item => {
        const href = item.getAttribute("href");

        // Only continue if href starts with '#' and is not just '#'
        if (href && href.startsWith("#") && href.length > 1) {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
}

/*const dyna = document.querySelector("#dynaCont");
if (dyna) {
    setTimeout(() =>{
        dyna.innerHTML = `
         <div class="preInfo">
              <p><b>NAME</b>: MTE240 Project</p>
                <p><b>DURATION</b>: ≈ 5 months</p>
             <p><b>DESCRIPTION</b>: This website is designed to support 100-level students of the University of Benin by providing clear, accessible guidance and resources related to the clearance process.</p>
            <p><b>DEVELOPER</b>: UNIBEN MTE240</p>
       </div>
        <div class="cell">
        <a href="index2.html">preview homepage<a>
        </div>
        `;
    }, 2000);
}
*/
