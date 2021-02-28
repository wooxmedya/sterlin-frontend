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
} //Static

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
} //Boş link bırakmamak için isteğe bağlı fonksiyon

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
} //Static

function toggleMenu() {
    let menuIcon = document.querySelector('#menu-wrapper');
    let menu = document.querySelector('#mobile-menu');
    let menuOutside = document.querySelector('#menu-outside');
    let rest = document.querySelector('#stack');
    let isMenuActive = false;

    function toggleMenuState() {
        menuIcon.classList.toggle('active');
        menu.classList.toggle('show');
        rest.classList.toggle('hide');
        menuOutside.classList.toggle('clickable');
        isMenuActive = !isMenuActive;
        if (debug) console.log(`Menu aktif mi?: ${isMenuActive}`);
    }
    menuIcon.addEventListener('click', () => {
        toggleMenuState()
    });
    menuOutside.addEventListener('click', () => {
        if (debug) console.log('Dışarı tıklandı')
        toggleMenuState()
    })
} //Static

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
} //Static

function dynamicPageSwitch() {
    let switchers = document.querySelectorAll('.page-switchers');
    for (let i = 0; i < switchers.length; i++) {
        switchers[i].addEventListener('click', () => {
            let current = switchers[i].dataset.current;
            let target = switchers[i].dataset.target;
            let currentElement = document.getElementById(current);
            let targetElement = document.getElementById(target);
            currentElement.classList.add('fade');
            setTimeout(() => {
                currentElement.classList.add('d-none');
                targetElement.classList.remove('d-none');
                targetElement.classList.add('d-block', 'fade', 'show');
            }, 100);

        })
    }
}; //Static

function hoverMenus() {
    let withHover = document.querySelectorAll('.nav-item.with-hover');
    for (let i = 0; i < withHover.length; i++) {
        withHover[i].addEventListener('mouseover', () => {
            withHover[i].classList.add('hovering');
            let toShow = document.querySelector('.nav-item.with-hover.hovering>.hover-menu');
            toShow.classList.add('show');
        });
        withHover[i].addEventListener('mouseout', () => {
            withHover[i].classList.remove('hovering');
            let toHide = document.querySelector('.nav-item.with-hover>.hover-menu.show');
            toHide.classList.remove('show');
        });

    }
} //Static

function currencyMenu() {
    let triggerButton = document.querySelector('#add-currency');
    let currencyMenu = document.querySelector('#currency-add');
    let closeButton = document.querySelector('#closeMenu');
    let currencyItems = document.querySelectorAll('.currency-box tr');
    triggerButton.addEventListener('click', () => {
        currencyMenu.classList.toggle('d-block');
    });
    closeButton.addEventListener('click', () => {
        currencyMenu.classList.toggle('d-block');
    });
    for (let i = 0; i < currencyItems.length; i++) {
        currencyItems[i].addEventListener('click', () => {
            currencyItems[i].classList.toggle('active');
        })
    }
} //Static
//Sayfa yüklenirken javascriptin hızı kesmemesi için DOM yüklendikten sonra fonksiyonları çalıştırıyoruz
window.onload = toggleCurrencies(), activeNavItems(), toggleMenu(), searchAnimation(), dynamicPageSwitch(), hoverMenus(), currencyMenu();