import React from 'react';
import styles from './Feature.css';

function animateFeature() {
    const feature = document.getElementById('Feature');
    const feature_top = feature.getBoundingClientRect().top;
    if (feature_top < window.innerHeight*0.75) {
        const title = feature.getElementsByTagName('h2').item(0);
        title.classList.add(styles.slideRightAppear);
        window.removeEventListener('scroll', animateFeature);
    }
}

function Feature() {
    window.addEventListener('scroll', animateFeature);

    return(
        <section id='Feature'>
            <h2>Больше красивостей любителю красивостей! 🎞️</h2>
            <video controls>
                <source src='./video/css_animations.mp4' type='video/mp4'/>
            </video>
        </section>
    );
}

export default Feature;