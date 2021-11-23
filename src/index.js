import './assets/scss/style.scss'
import './assets/scss/news.scss'
import './assets/scss/dummy.scss'
import './assets/scss/production.scss'
import './assets/scss/generic.scss'
import './assets/scss/machinery.scss'
import './assets/scss/social_politic.scss'
import './assets/scss/about.scss'
import './assets/js/swiper'
import './assets/js/maskInput'
import './assets/scss/factory.scss'
import './assets/js/menuScroll'
import './assets/js/sendForm'

document.addEventListener('DOMContentLoaded', () => {
    const menuCloseButton = document.getElementById("menu_close_button");
    const menuOpenButton = document.getElementById("menu_open_button");
    const menuWrapper = document.getElementById("menu_wrapper");
    const mainCorpMenu = document.getElementById("main_corp_menu");

    if (menuOpenButton) {
        menuCloseButton.addEventListener('click', () => {
            mainCorpMenu.classList.add('menu_hidden');
            menuWrapper.classList.add('menu_wrapper_hidden');
        })
    
        menuOpenButton.addEventListener('click', () => {
            mainCorpMenu.classList.remove('menu_hidden');
            menuWrapper.classList.remove('menu_wrapper_hidden');
        })
    
        window.addEventListener('scroll', () => {
            mainCorpMenu.classList.add('menu_hidden');
            menuWrapper.classList.add('menu_wrapper_hidden');
        });
    }

    const counterDisplays = document.querySelectorAll(".counter_display");
    const counterBox = document.querySelector(".counters");
    const animationTime = 10000;
    const animationSpeed = 250;

    const animateIncrease = (elt, animationStep = 0) => {
        const targetValue = elt.dataset.targetValue;
        console.log(elt, targetValue);
        const targetFixed = elt.dataset.targetFixed;
        const increaseValue = targetValue / (animationTime / animationSpeed);
        console.log(increaseValue);

        const getCurrentValue = (animationStep) => animationStep * increaseValue;

        const animate = () => {
            elt.innerText = getCurrentValue(animationStep).toFixed(targetFixed).replace('.', ',');
            console.log(elt.innerText, +targetValue);
            animationStep++;
            if (elt.innerText < +targetValue || elt.innerText < targetValue) {
                requestAnimationFrame(animate);
            } else {
                elt.innerText = targetValue.replace('.', ',');
            }
        }

        animate();
    }
    
    const counterHandler = () => {
        if (counterBox.offsetTop < ( window.scrollY + window.innerHeight * 0.6)) {            
            counterDisplays.forEach(elt => {
                animateIncrease(elt);
            });
            window.removeEventListener('scroll', counterHandler);
        }
    }

    window.addEventListener('scroll', counterHandler); 
    

        // const animatedBlocks = document.querySelectorAll(".animated");

        // const animateVisibility = (elt) => {
        //     if (elt.offsetTop < ( window.scrollY + window.innerHeight * 0.6)) {
        //         elt.style.opacity = 1;
        //     }
        // }

        // window.onscroll = () => animatedBlocks.forEach(animateVisibility);
    
})