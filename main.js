let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if(current > lastScroll && current > 80){
        // hide the header when scrolling down 
        header.style.transform = "translateY(-100%)"
    }else{
        // show it again when scrolling up
        header.style.transform = "translateY(0)"
    }

    lastScroll = current;
});
