import React from 'react';
import styles from './Story.css';

function Story() {
    return(
        <section id='Story'>
            <h2 className={styles.title}>Немного истории 📖</h2>
            <p className={styles.text}>
                О чём может думать 9-летний мальчишка? Разумеется, развлечения! В моём случае 
                немалую долю досуга занимали видеоигры, а среди игрушек детства было много разных 
                конструкторов.
            </p>
            <p className={styles.text}>
                Я всегда любил создавать что-то крутое из простых деталей. И в какой-то момент в 
                моей юной голове возникла следующая мысль. Я люблю создавать и видеоигры. Почему бы 
                не совместить приятное с приятным? Так я попал на свой первый курс по 
                программироавнию. Это была Java. Потом была детская книжка по Scratch и Python. 
                Затем было длительное затишье. Мои детские мозги не дошли до того, что в интернете 
                неисчислимое количество обучающих материалов по любой теме. К тому же я начал 
                посматривать в сторону физики и инженерии.
            </p>
            <p className={styles.text}>
                А потом в моей жизни случился Высший колледж информатики при Новосибирском 
                государственном университете. Там я понял, что программироавние - моё всё. С тех 
                пор я постоянно что-то разрабатываю и изучаю. Ещё в ВКИ мне показали, что можно 
                гуглить.
            </p>
            <p className={styles.text}>
                Сейчас же я учусь в НГУ на Мехмате. Изучаю математику и её приложения к 
                программированию
            </p>
            <i className={styles.randomFact}>Как-то мне сказали, что я веду себя как кот.</i>
        </section>
    );
}

export default Story;
