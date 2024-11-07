window.onload = () => {
    console.log('Gsap works')

    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.photo:not(:first-child)', { opacity: 1, scale: 1, y: '100%' })

    const animation = gsap.to('.photo:not(:first-child)', {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        stagger: 1,
        y: '0%',
    })

    ScrollTrigger.create({
        trigger: '.gallery',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.right',
        animation: animation,
        scrub: true,
        // markers: true,
    })

    gsap.to('.gallery', {
        duration: 1,
        backgroundColor: '#f9d2e5aa',
        scrollTrigger: {
            trigger: '.d1',
            scrub: true,
        },
    })

    gsap.to('.gallery', {
        duration: 1,
        backgroundColor: '#cdd1ffaa',
        scrollTrigger: {
            trigger: '.d2',
            scrub: true,
        },
    })

    gsap.to('.gallery', {
        duration: 1,
        backgroundColor: '#ffe4d3ee',
        scrollTrigger: {
            trigger: '.d3',
            scrub: true,
        },
    })

    gsap.to('.gallery', {
        duration: 1,
        backgroundColor: '#ffb399aa',
        scrollTrigger: {
            trigger: '.d4',
            scrub: true,
        },
    })
}




(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll("#timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();



 



  document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submission
  
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries()); // Convert form data to a plain object

  try {
    const response = await fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const message = await response.text(); // Get the response text (success or error message)
    console.log(message); // Log message for debugging

    // Show success message using Toastify
    Toastify({
      text: message,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Green for success
      duration: 3000, // Duration in ms
      close: true, // Show close button
    }).showToast();

  } catch (error) {
    console.error("Error:", error);

    // Show error message using Toastify
    Toastify({
      text: "Failed to send email.",
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc3a0)", // Red for error
      duration: 3000, // Duration in ms
      close: true, // Show close button
    }).showToast();
  }
});
