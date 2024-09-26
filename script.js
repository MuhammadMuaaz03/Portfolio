$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});

// CAROUSEL START //

const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indicatorsContainer = document.getElementById('carousel-indicators');

const totalCards = carousel.children.length;
let currentIndex = 0;

// Create pagination indicators
for (let i = 0; i < totalCards; i++) {
    const indicator = document.createElement('span');
    if (i === 0) indicator.classList.add('active');
    indicatorsContainer.appendChild(indicator);
}

// Update carousel position and indicators
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    const indicators = document.querySelectorAll('.carousel-indicators span');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Automatic sliding
setInterval(() => {
    currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 30000);

// Click event for indicators
document.querySelectorAll('.carousel-indicators span').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});
const SHOW_MORE_TEXT = "Read more";
const SHOW_LESS_TEXT = "Read less";

function myFunction(dotsId, moreId, btnId) {
  const dots = document.getElementById(dotsId);
  const moreText = document.getElementById(moreId);
  const btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = SHOW_MORE_TEXT;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = SHOW_LESS_TEXT;
    moreText.style.display = "inline";
  }
}

// CAROUSEL END

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});