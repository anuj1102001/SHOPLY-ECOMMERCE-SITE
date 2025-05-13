let bar = document.getElementById("bar")
let nav = document.getElementById("navbar")
let close = document.getElementById("close")

if(bar)
{
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}

if(close)
{
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}


  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');
  const carousel = document.querySelector('.carousel-track');

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
  });

