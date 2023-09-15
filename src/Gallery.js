import React, {useState, useLayoutEffect} from 'react';
import styles from './Gallery.css';

import hs_portrait from './imgs/highschool_portrait.jpg';
import hs_landscape from './imgs/highschool_landscape.jpg';
import now_portrait from './imgs/now_portrait.jpg';
import now_landscape from './imgs/now_landscape.jpg';

function useWindowSize() {
    const [aspectRatio, setRatio] = useState();
    useLayoutEffect(() => {
        function updateRatio() {
            setRatio(window.innerWidth/window.innerHeight);
        }
        window.addEventListener('resize', updateRatio);
        updateRatio();
        return () => window.removeEventListener('resize', updateRatio);
    }, []);
    return aspectRatio;
}

function animateGallery() {
    const gallery = document.getElementById('Gallery');
    const gallery_top = gallery.getBoundingClientRect().top;
    if (gallery_top < window.innerHeight*0.75) {
        const title = gallery.getElementsByTagName('h2').item(0);
        title.classList.add(styles.slideRightAppear);
        setTimeout(() => {
            const container = gallery.getElementsByClassName(styles.container).item(0);
            container.classList.add(styles.smoothAppear);
            const images = container.children;
            images.item(0).classList.add(styles.slideUpAppear);
            setTimeout(() => {
                images.item(1).classList.add(styles.slideUpAppear);
            }, 200);
        }, 700);
        window.removeEventListener('scroll', animateGallery);
    }
}

function Gallery() {
    const aspectRatio = useWindowSize();

    window.addEventListener('scroll', animateGallery);

    if (aspectRatio < 1) {
        return(
            <section id='Gallery'>
                <h2>Улыбчивый я 😼</h2>
                <div className={styles.container + ' ' + styles.vertical}>
                    <figure>
                        <figcaption>Привет из прошлого</figcaption>
                        <img src={hs_landscape}></img>
                    </figure>
                    <figure>
                        <img src={now_landscape}></img>
                        <figcaption>А где очки?</figcaption>
                    </figure>
                </div>
            </section>
        );
    }

    return(
        <section id='Gallery'>
            <h2>Улыбчивый я 😼</h2>
            <div className={styles.container + ' ' + styles.horizontal}>
                <figure>
                    <img src={hs_portrait}></img>
                    <figcaption>Привет из прошлого</figcaption>
                </figure>
                <figure>
                    <img src={now_portrait}></img>
                    <figcaption>А где очки?</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Gallery;