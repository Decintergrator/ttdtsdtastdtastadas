window.onscroll = function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { // Only activate after scrolling down a bit
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
});


let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const visibleItems = 3;
const itemWidth = items[0].offsetWidth + 20; // Include gap

function moveCarousel() {
    currentIndex++;
    if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
setInterval(moveCarousel, 10000);

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function moveSlide() {
        index = (index + 1) % items.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function moveSlide() {
        index = (index + 1) % items.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 10000);
});




// Function to toggle alternating classes dynamically
document.addEventListener("DOMContentLoaded", function () {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('left');
        } else {
            item.classList.add('right');
        }
    });
});



window.onload = function() {
    // You can use JavaScript to ensure the videos are correctly placed.
    let leftVideo = document.getElementById('left-video');
    let rightVideo = document.getElementById('right-video');
    
    // Optionally, handle window resizing:
    window.onresize = function() {
      adjustVideos();
    };
  
    function adjustVideos() {
      // Ensure videos are filling their respective sides
      leftVideo.style.maxWidth = '45%';
      rightVideo.style.maxWidth = '45%';
    }
  
    // Initial adjustment on load
    adjustVideos();
  };
  


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav a, .learn-more-btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });
});
