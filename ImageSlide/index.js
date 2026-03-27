const webpage = document.querySelectorAll(".Webpage img");
let slideindex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded",intitialSlider)

function intitialSlider()
{   if(webpage.length > 0){
     webpage[slideindex].classList.add("displaySlide");
    intervalid =setInterval(nextside,5000);
}
   
    
}
function showSlider(index)
{   if(index >= webpage.length)
    {
        slideindex = 0;
    }
    else if (index < 0)
    {
        slideindex = webpage.length-1;
    }

    // an slide truoc do
    webpage.forEach( slide => {
        slide.classList.remove("displaySlide");
    }
    


    )
    webpage[slideindex].classList.add("displaySlide");
}
function prevside()
{
    slideindex -- ;
    showSlider(slideindex);
}
function nextside()
{
    slideindex ++;
    showSlider(slideindex);
}
function rate (star)
{
    let stars = document.querySelectorAll(".rating span")
    stars.forEach((s, index)=>
    {
        if ( index < star)
        {
            s.classList.add("active")
        }
        else
        {
            s.classList.remove("active")
        }
    }
    );
}