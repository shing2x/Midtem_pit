// HEADER
// script.js

document.addEventListener("scroll", function() {
    var header = document.querySelector(".FirstHeader");
    var scrollTop = window.scrollY;
    
  
    if (scrollTop > 20) { // Change 50 to the desired scroll position
      header.classList.add("scrolled"); // Add a class for scrolled state
    } else {
      header.classList.remove("scrolled"); // Remove the class for scrolled state
    }
  });
  
//   document.addEventListener("scroll", function()
//   {
//     var anchor = document.querySelector(".StressAndAnxiety");
//     var topList = window.scrollY;

//     if(topList > 20 ){
//         anchor.classList.add('scrolled1')
//     }else{
//         anchor.classList.remove('scrolled1');
//     }
//    });
document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var elements = document.querySelectorAll('.StressAndAnxiety');
    
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        
        if (scrollPosition > 20) {
            element.classList.add('scrolled1');
        } else {
            element.classList.remove('scrolled1');
        }
    }
});

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var element = document.querySelector('.dTOhhr');

    if (scrollPosition > 20) {
        element.classList.add('scrolled2');
    } else {
        element.classList.remove('scrolled2');
    }
});

document.addEventListener("scroll", function () {
    var scrollPosition1 = window.scrollY;
    var element1 = document.querySelector('.SLEEP');

    if (scrollPosition1 > 20) {
        element1.classList.add('CalmLogoScrolled');
    } else {
        element1.classList.remove('CalmLogoScrolled');
    }
    
} )








   document.addEventListener("scroll", function()
  {
    var anchor = document.querySelector(".forSleep");
    var topList = window.scrollY;

    if(topList > 20 ){
        anchor.classList.add('scrolledList')
    }else{
        anchor.classList.remove('scrolledList');
    }
   });




   document.addEventListener("scroll", function()
  {
    var anchor1 = document.querySelector(".bpdABi");
    var topList = window.scrollY;

    if(topList > 20 ){
        anchor1.classList.add('scrolledButton')
    }else{
        anchor1.classList.remove('scrolledButton');
    }
   });
  

  

document.addEventListener('DOMContentLoaded', function() {
    var triggerElement = document.getElementById('react-aria-2');
    var contentOuter = document.getElementById('react-aria-1');
    var innerContentElement = document.querySelector('.Collapsible__contentInner .hnVsPo');
    var arrowElement = document.querySelector('.Collapsible__trigger .sc-5fcd2734-2');

    // Add the upside-down arrow class by default
    arrowElement.classList.add('jVDHob');

    triggerElement.addEventListener('click', function() {
        // Toggle the 'is-open' class on the trigger element
        triggerElement.classList.toggle('is-open');

        // Toggle the 'is-closed' class on the trigger element
        triggerElement.classList.toggle('is-closed');

        // Toggle the 'aria-expanded' attribute value
        var isExpanded = triggerElement.getAttribute('aria-expanded') === 'true';
        triggerElement.setAttribute('aria-expanded', !isExpanded);

        // Toggle the height of the content outer element
        if (isExpanded) {
            contentOuter.style.height = '0px';
            arrowElement.classList.remove('jVDHob'); // Remove the upside-down arrow class
            // Toggle the class of innerContentElement
            innerContentElement.classList.remove('fyZCvp');
            innerContentElement.classList.add('hnVsPo');
        } else {
            contentOuter.style.height = 'auto';
            arrowElement.classList.add('jVDHob'); // Add the upside-down arrow class
            // Toggle the class of innerContentElement
            innerContentElement.classList.remove('hnVsPo');
            innerContentElement.classList.add('fyZCvp');
        }
    });

    // Add the initial check to ensure the correct class is set initially
    if (triggerElement.getAttribute('aria-expanded') === 'true') {
        arrowElement.classList.remove('jVDHob'); // Remove the upside-down arrow class if initially expanded
        innerContentElement.classList.add('fyZCvp');
        innerContentElement.classList.remove('hnVsPo');
    }
});





// document.addEventListener('DOMContentLoaded', function() {
//     var triggerElement = document.getElementById('react-aria-4');
//     var contentOuter = document.getElementById('react-aria-3');
//     var innerContentElement = document.querySelector('.Collapsible__contentInner .hnVsPo');
//     var arrowElement = document.querySelector('.Collapsible__trigger .sc-5fcd2734-2');

//     // Add the upside-down arrow class by default
//     arrowElement.classList.add('jVDHob');

//     triggerElement.addEventListener('click', function() {
//         // Toggle the 'is-open' class on the trigger element
//         triggerElement.classList.toggle('is-open');

//         // Toggle the 'is-closed' class on the trigger element
//         triggerElement.classList.toggle('is-closed');

//         // Toggle the 'aria-expanded' attribute value
//         var isExpanded = triggerElement.getAttribute('aria-expanded') === 'true';
//         triggerElement.setAttribute('aria-expanded', !isExpanded);

//         // Toggle the height of the content outer element
//         if (isExpanded) {
//             contentOuter.style.height = '0px';
//             arrowElement.classList.remove('jVDHob'); // Remove the upside-down arrow class
//             // Toggle the class of innerContentElement
//             innerContentElement.classList.remove('fyZCvp');
//             innerContentElement.classList.add('hnVsPo');
//         } else {
//             contentOuter.style.height = 'auto';
//             arrowElement.classList.add('jVDHob'); // Add the upside-down arrow class
//             // Toggle the class of innerContentElement
//             innerContentElement.classList.remove('hnVsPo');
//             innerContentElement.classList.add('fyZCvp');
//         }
//     });

//     // Add the initial check to ensure the correct class is set initially
//     if (triggerElement.getAttribute('aria-expanded') === 'true') {
//         arrowElement.classList.remove('jVDHob'); // Remove the upside-down arrow class if initially expanded
//         innerContentElement.classList.add('fyZCvp');
//         innerContentElement.classList.remove('hnVsPo');
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    var triggerElement = document.getElementById('react-aria-4');
    var contentOuter = document.getElementById('react-aria-3');
    var innerContentElement = document.querySelector('.Collapsible__contentInner .hnVsPo');
    var arrowElement = document.querySelector('.Collapsible__trigger .sc-5fcd2734-2');

    // Add the upside-down arrow class by default
    arrowElement.classList.add('jVDHob');

    triggerElement.addEventListener('click', function() {
        // Toggle the 'is-open' class on the trigger element
        triggerElement.classList.toggle('is-open');

        // Toggle the 'is-closed' class on the trigger element
        triggerElement.classList.toggle('is-closed');

        // Toggle the 'aria-expanded' attribute value
        var isExpanded = triggerElement.getAttribute('aria-expanded') === 'true';
        triggerElement.setAttribute('aria-expanded', !isExpanded);

        // Toggle the height of the content outer element
        if (isExpanded) {
            contentOuter.style.height = '0px';
            arrowElement.classList.remove('jVDHob'); // Remove the upside-down arrow class
            // Toggle the class of innerContentElement
            innerContentElement.classList.remove('fyZCvp');
            innerContentElement.classList.add('hnVsPo');
        } else {
            contentOuter.style.height = 'auto';
            arrowElement.classList.add('jVDHob'); // Add the upside-down arrow class
            // Toggle the class of innerContentElement
            innerContentElement.classList.remove('hnVsPo');
            innerContentElement.classList.add('fyZCvp');
        }
    });

    // Add the initial check to ensure the correct class is set initially
    if (triggerElement.getAttribute('aria-expanded') === 'true') {
        arrowElement.classList.remove('jVDHob'); // Remove the upside-down arrow class if initially expanded
        innerContentElement.classList.add('fyZCvp');
        innerContentElement.classList.remove('hnVsPo');
    }
});




