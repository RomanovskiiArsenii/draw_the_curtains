const stripesAnimation = (() => {
    const wrapper = document.getElementById('container');
    const links = document.getElementsByTagName('a');
    const moveDown = 'moveDown .4s linear forwards';
    const moveUp = 'moveUp .4s linear forwards';

    const stripeAnimation = (elem, animation) => {
        setTimeout(() => {
            for (let i = 0; i < elem.children.length; i++) {
                setTimeout(() => {
                    elem.children[i].style.animation = animation;
                }, (i + 2) * 70);
            }
        }, 500);
    };

    const setAnimationOnLoad = () => {
        stripeAnimation(wrapper, moveDown);
    };

    const stripeAnimationOnRedirect = (e) => {
        e.preventDefault();
        stripeAnimation(wrapper, moveUp);

        //pause before leaving
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 2500);
    };

    const setAnimationOnRedirect = () => {
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', stripeAnimationOnRedirect, false);
        }
    };

    return {
        setAnimationOnLoad: setAnimationOnLoad,
        setAnimationOnRedirect: setAnimationOnRedirect,
    };
})();

window.addEventListener('load', stripesAnimation.setAnimationOnLoad, false);
window.addEventListener('load', stripesAnimation.setAnimationOnRedirect, false);
