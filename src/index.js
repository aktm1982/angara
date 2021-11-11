import './assets/scss/style.scss'
import './assets/scss/news.scss'
import './assets/scss/dummy.scss'
import './assets/scss/production.scss'
import './assets/scss/generic.scss'
import './assets/scss/machinery.scss'
import './assets/scss/social_politic.scss'
import './assets/scss/about.scss'

window.onload = () => {
    if (window.innerWidth > 1203) {
        const animatedBlocks = document.querySelectorAll(".animated");
        const counterDisplays = document.querySelectorAll(".counter");

        const animateVisibility = (elt) => {
            if (elt.offsetTop < ( window.scrollY + window.innerHeight * 0.6)) {
                elt.style.opacity = 1;
            }
        }

        const animateCounters = elt => {
            if (elt.offsetTop < ( window.scrollY + window.innerHeight * 0.6)) {
                const targetValue = elt.dataset.targetValue;
                const targetFixed = elt.dataset.targetFixed;
                const animationTime = 5000;
                const animationSpeed = 50;
                const increaseValue = targetValue / (animationTime / animationSpeed);

                const getCurrentValue = (animationStep) => animationStep * increaseValue;

                let animationStep = 0;
                const animateIcrease = () => {
                    setTimeout(() => {
                        elt.innerText = getCurrentValue(animationStep++).toFixed(targetFixed);
                        if (elt.innerText < targetValue) {
                            animateIcrease();
                        } else {
                            elt.innerText = targetValue;
                        }
                    }, animationSpeed);
                }

                animateIcrease();
            }
        }

        window.onscroll = () => animatedBlocks.forEach(animateVisibility);
        // window.onscroll = () => counterDisplays.forEach(animateCounters);
    }
    


}