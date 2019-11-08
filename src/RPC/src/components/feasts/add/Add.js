import React from 'react';
import Styles from './Add.module.scss';

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: "",
            min: 0,
            max: 0,
            time: ""
        }

        this.setAddress = this.setAddress.bind(this)
        this.setMin = this.setMin.bind(this)
        this.setMax = this.setMax.bind(this)
        this.setTime = this.setTime.bind(this)
        this.sendItem = this.sendItem.bind(this)
    }

    render() {
        return (
            <div className={Styles.add}>
                <h2 className={Styles.title}>Устроить пирушку</h2>
                <div className={Styles.form}>
                    <div className={Styles.item}>
                        <p>Город</p>
                        <input className={Styles.input_text} onInput={e => this.setAddress(e.target.value)} placeholder="Город"></input>
                    </div>
                    <div className={Styles.item}>
                        <p>Улица</p>
                        <input className={Styles.input_text} onInput={e => this.setAddress(e.target.value)} placeholder="Улица"></input>
                    </div>
                    <div className={Styles.item}>
                        <p>Дом</p>
                        <input className={Styles.input_half} onInput={e => this.setAddress(e.target.value)} placeholder="Дом"></input>
                    </div>
                    <div className={Styles.item}>
                        <p>Описание</p>
                        <input className={Styles.input_about} placeholder="Описание" maxLength="150"></input>
                    </div>
                    <div className={Styles.item}>
                        <p>Время начала</p>
                        <input type="time" className={Styles.input_time} onInput={e => this.setTime(e.target.value)}></input>
                    </div>
                    <div className={Styles.item}>
                        <button className={Styles.input_submit} onClick={this.sendItem}>Пируем</button>
                    </div>
                </div>
            </div>
        )
    }

    setAddress(address) {
        this.setState({ address: address })
    }

    setMin(min) {
        this.setState({ min: min })
    }

    setMax(max) {
        this.setState({ max: max })
    }

    setTime(time) {
        this.setState({ time: time })
    }

    // https://beerasta.herokuapp.com/user/personal
    // PUT
    //{address, min, max, time}

    sendItem() {
        let body = JSON.stringify(this.state)
        console.table(this.state)

        fetch("https://beerasta.herokuapp.com/user/personal?username=" + localStorage.getItem("user"), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).then(res => {
            if (res.ok) {
                document.location.reload(true)
            }
        })
    }
}

export default Add;