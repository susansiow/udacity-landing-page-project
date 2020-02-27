/* Fixed Navigation - Change Background Color */

const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 20) {
        header.style.backgroundColor = 'transparent';
    } else {
        header.style.backgroundColor = 'rgba(51,51,51,0.8)';
    }
});


/* Dynamic Navigation List - Auto Navigation Link Input from Quote Category Dataset */

const navUl = document.querySelector('nav ul');
const quotes = [...document.querySelectorAll('.quote')];
const quoteCat = quotes.map(quote => quote.dataset.quoteCat);

for (let i = 0; i < quoteCat.length; i++) {
    const navLi = document.createElement('li');
    navLi.innerHTML = `<a href="#${quoteCat[i]}">${quoteCat[i]}</a>`;
    navUl.appendChild(navLi);
}


/* Active Navigation Links & Quote Sections */

const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function() {
    const fromTop = window.pageYOffset;

    navLinks.forEach(navLink => {
        const quoteSection = document.querySelector(navLink.hash);
        const quoteTop = quoteSection.offsetTop <= fromTop + 200;
        const quoteHeight = quoteSection.offsetTop + quoteSection.offsetHeight > fromTop + 200;

        if (quoteTop && quoteHeight) {
            navLink.classList.add('active-nav-link');
            quoteSection.classList.add('active-quote');
        } else {
            navLink.classList.remove('active-nav-link');
            quoteSection.classList.remove('active-quote');
        }
    });
});


/* Responsive Menu Button - Click to Show or Hide Drop Down Menu */

function responsiveMenu() {
    const dropDownMenu = document.querySelector('nav ul');
    dropDownMenu.classList.toggle('show');
}


/* Return to Top Button - Click to Return to Top */

function returnTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}


/* Return to Top Button - Show or Hide */

const toTopButton = document.querySelector('.return-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 20) {
        toTopButton.style.visibility = 'hidden';
        toTopButton.style.opacity = '0';
    } else {
        toTopButton.style.visibility = 'visible';
        toTopButton.style.opacity = '1';
    }
});