import React from 'react';
import Styles from './Filter.module.scss';

function Filter() {
    return (
        <div className={Styles.filter}>
            <div className={Styles.item}>
                <h2 className={Styles.title}>Искать пирушку</h2>
            </div>
            <div className={Styles.item}>
                <p className={Styles.title}>Город</p>
                <input className={Styles.input_text} placeholder="Город"></input>
            </div>
            <div className={Styles.item}>
                <p className={Styles.title}>Улица</p>
                <input className={Styles.input_text} placeholder="Улица"></input>
            </div>
            <div className={Styles.item}>
                <p className={Styles.title}>Дом</p>
                <input className={Styles.input_half} placeholder="Дом"></input>
            </div>
            <div className={Styles.item}>
                <p className={Styles.title}>Время начала</p>
                <input type="time" className={Styles.input_time}></input>
            </div>
            <div className={Styles.item}>
                <button className={Styles.btn}>Найти</button>
            </div>
        </div>
    );
}

export default Filter;