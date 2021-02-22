"use strict";
const debug = true;

function toggleCurrencies() {
    let currencies = document.querySelectorAll('.currency-switch>a');
    for (let i = 0; i < currencies.length; i++) {
        currencies[i].addEventListener('click', () => {
            for (let j = 0; j < currencies.length; j++) {
                currencies[j].classList.remove('active');
            }
            currencies[i].classList.toggle('active');
            let activeCurrenncy = currencies[i].dataset.currency;
            /*Burada döviz değişim işlemleri dataset value switch case kontrolüyle yapılabilir */
            if (debug) console.log(`Aktif Döviz: ${activeCurrenncy}`)
        })
    }
}

function emptyLink() {
    if (debug) {
        let allLinks = document.querySelectorAll('a[href="#"]');
        if (debug) console.log(`Boş link sayısı: ${allLinks.length}`);
        for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].addEventListener('click', () => {
                let currentHtml = allLinks[i].innerHTML;
                let newHtml = `<span class="coming-soon" > Boş Link </span>${currentHtml}`
                allLinks[i].innerHTML = newHtml;
                setTimeout(() => {
                    allLinks[i].innerHTML = currentHtml;
                }, 2000)
            })
        }
    }
}

function activeNavItems() {
    let navItems = document.querySelectorAll('#navbar-nav .nav-item');
    if (debug) console.log(`Seçili Nav Item Sayısı: ${navItems.length}`);
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () => {
            for (let j = 0; j < navItems.length; j++) {
                navItems[j].classList.remove('active');
            }
            navItems[i].classList.toggle('active');
        })
    }
}

function toggleMenu() {
    let menuIcon = document.querySelector('#menu-wrapper');
    let menu = document.querySelector('#mobile-menu');
    let rest = document.querySelector('#stack');
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        menu.classList.toggle('show');
        stack.classList.toggle('hide');
    })
}

function searchAnimation() {
    let searchToggler = document.querySelector('#search-toggler');
    let searchTogglerReverse = document.querySelector('#close-button');
    let toAnimate = document.querySelectorAll('.search-animate');
    let toAnimateReverse = document.querySelectorAll('.search-animate-reverse');
    searchToggler.addEventListener('click', () => {
        for (let i = 0; i < toAnimate.length; i++) {
            toAnimate[i].classList.toggle('animate');
        }

        for (let i = 0; i < toAnimateReverse.length; i++) {
            toAnimateReverse[i].classList.toggle('animate');
        }
    });
    searchTogglerReverse.addEventListener('click', () => {
        for (let i = 0; i < toAnimate.length; i++) {
            toAnimate[i].classList.toggle('animate');
        }

        for (let i = 0; i < toAnimateReverse.length; i++) {
            toAnimateReverse[i].classList.toggle('animate');
        }
    });
}

window.onload = toggleCurrencies(), activeNavItems(), toggleMenu(), searchAnimation();