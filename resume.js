//logic for buttons
const ExperienceBtn = document.querySelector(".Exbutton");
ExperienceBtn.addEventListener("click",()=>{
    document.querySelector(".knowledge").classList.add("hidden");
    document.querySelector(".Excontent").classList.add("active");
});
const EducationBtn = document.querySelector(".Edbutton");
EducationBtn.addEventListener("click",()=>{
    document.querySelector(".Excontent").classList.remove("active");
    document.querySelector(".knowledge").classList.remove("hidden");
});
const mdropDownBtn = document.querySelector(".mediadropdownbtn");
mdropDownBtn.addEventListener("click",()=>{
    document.querySelector(".mhcc").classList.toggle("active");
});
const ddropDownBtn = document.querySelector(".devdropdownbtn");
ddropDownBtn.addEventListener("click",()=>{
    document.querySelector(".dhcc").classList.toggle("active");
});
const pdropDownBtn = document.querySelector(".personaldropdownbtn");
pdropDownBtn.addEventListener("click",()=>{
    document.querySelector(".phcc").classList.toggle("active");
});
const gdropDownBtn = document.querySelector(".gamingdropdownbtn");
gdropDownBtn.addEventListener("click",()=>{
    document.querySelector(".ghcc").classList.toggle("active");
});

const heading = document.querySelectorAll(".heading");
const sr = () => ScrollReveal(
    {
        origin:"bottom",
        distance:"60px",
        duration:"2000",
        delay:"300",
        reset:"true",
    }
);

sr().reveal(".name");
sr().reveal(".role",{delay:"1000"});
sr().reveal(".picture",{origin:"top",delay:"1500"});
sr().reveal(".socials",{origin:"left",delay:"2000"});


sr().reveal(".Aboutcontent",{delay:"500"});
sr().reveal(".slides",{delay:"1000",duration:"500"});
sr().reveal(".experience");
sr().reveal(".education");
sr().reveal(".cards");

for(i=0;i<heading.length;i++){
    i%2==0 ? sr().reveal(heading[i],{origin:"left" , duration :"1500" , delay : "100"}) : sr().reveal(heading[i],{origin:"right", duration :"1500" , delay : "100"})
};

// Highlight current section in nav
const navLinks = document.querySelectorAll(".navbar a");
const sections = [
    { id: "introduction", element: document.querySelector(".introduction") },
    { id: "About", element: document.querySelector(".About") },
    { id: "Projects", element: document.querySelector(".Projects") },
    { id: "Contact", element: document.querySelector(".Contact") }
];

function highlightNavSection() {
    let current = "";
    
    sections.forEach(section => {
        if (section.element) {
            const sectionTop = section.element.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.id;
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", highlightNavSection);