// FOR ERROR PAGES
const bckToHm = document.querySelector(".bToHm");
if (bckToHm) {
bckToHm.addEventListener('click', () => {
    window.location.href="index.html";
});
}


// FOR MENU
const menu = document.querySelector(".small-screen-menu");
const menuButton = document.getElementById("mnBut");
const menuClButton = document.getElementById("mnClBut");
if (menuButton) {
menuButton.addEventListener("click", function () {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
   
    if (!expanded) {
        menuButton.setAttribute("aria-expanded", "true");
        menu.classList.remove("removeMenu");
        menu.classList.add("showMenu");
        menu.style.display = "flex";
    } else {
        menuButton.setAttribute("aria-expanded", "false");
    }
});
    menuClButton.addEventListener("click", function () {
        closeMenu();
    });
}
function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
        menu.classList.add("removeMenu");
        setTimeout( () => {
            menu.style.display = "none";
        }, 1000);
}


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


fetch("https://unibenmte240.github.io/MTE240/footer.html")
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
