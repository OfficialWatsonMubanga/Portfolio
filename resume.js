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