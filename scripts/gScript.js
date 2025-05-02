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
    
const dyna = document.querySelector("#dynaCont");
//const info = document.querySelector(".info");
if (dyna) {
    setTimeout(() =>{
        dyna.innerHTML = `
         <div class="preInfo">
              <p><b>NAME</b>: MTE240 Project</p>
                <p><b>DURATION</b>: ≈ 5 months</p>
             <p><b>DESCRIPTION</b>: This website is designed to support 100-level students of the University of Benin by providing clear, accessible guidance and resources related to the clearance process.</p>
            <p><b>DEVELOPER</b>: UNIBEN MTE240</p>
      </div>
        `;
    }, 5000);
}

