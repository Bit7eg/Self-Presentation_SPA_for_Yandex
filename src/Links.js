import React from 'react';
import styles from './Link.css';

function animateLink() {
    const link = document.getElementById('Link');
    const link_top = link.getBoundingClientRect().top;
    if (link_top < window.innerHeight*0.9) {
        link.classList.add(styles.smoothAppear);
        const text = link.firstElementChild;
        const link_element = text.firstElementChild;
        const wrapper = document.createElement('span');
        text.replaceChild(wrapper, link_element);
        setTimeout(() => {
            const template = link_element.outerHTML;
            const i = 0;
            let timeout;
            function typing() {
                if (i < template.length) {
                    wrapper.innerHTML += template.charAt(i);
                    i++;
                    timeout = setTimeout(typing, 35);
                } else {
                    clearTimeout(timeout);
                    text.replaceChild(link_element, wrapper);
                }
            }
            typing();
        }, 850);
        window.removeEventListener('scroll', animateLink);
    }
}

function Link() {
    window.addEventListener('scroll', animateLink);

    return(
        <section id='Link' className={styles.container}>
            <p>
                Исходники можно найти здесь: 
                <a href='https://github.com/Bit7eg/Self-Presentation_SPA_for_Yandex' title='Исходники' target='_blank' rel='noopener'>GitHub</a>
            </p>
        </section>
    );
}

export default Link;