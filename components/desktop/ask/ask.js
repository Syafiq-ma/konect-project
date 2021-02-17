import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';

import styles from '../../../styles/askDesktop.module.scss';

import Navbar from '../../navbar';
import Profile from '../profile';
import * as Action from '../../../action';

class Ask extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            time: ''
        }
    }

    timePicker = () => {
        let waktu = []
        switch (this.state.date.getDay()) {
            case 0:
                for (let i = 8*60; i < 13*60; i+=45) {
                    waktu.push(Math.floor(i/60) + ':' + ("0"+i%60).slice(-2))
                }
                break;
            case 1:
                for (let i = 8*60; i < 12*60; i+=45) {
                    waktu.push(Math.floor(i/60) + ':' + ("0"+i%60).slice(-2))
                }
                break;
            case 2:
                for (let i = 10*60; i < 14*60; i+=45) {
                    waktu.push(Math.floor(i/60) + ':' + ("0"+i%60).slice(-2))
                }
                break;
            case 3:
                for (let i = 9*60; i < 14*60; i+=45) {
                    waktu.push(Math.floor(i/60) + ':' + ("0"+i%60).slice(-2))
                }
                break;
            case 4:
                for (let i = 10*60; i < 14*60; i+=45) {
                    waktu.push(Math.floor(i/60) + ':' + ("0"+i%60).slice(-2))
                }
                break;
            case 5:
                for (let i = 8*60; i < 11*60; i+=45) {
                    waktu.push(Math.floor(i/60) + ':' + ("0"+i%60).slice(-2))
                }
                break;
            case 6:
                for (let i = 8*60; i < 11*60; i+=45) {
                    waktu.push(Math.floor(i/60) + ':' + ("0"+i%60).slice(-2))
                }
                break;
        
            default:
                return(
                    <div>
                        {waktu.map((item, i) =>
                            <ul>
                                <li className={styles.timePicker} key={i}>{item}</li>
                            </ul>
                        )}
                    </div>
                )
        }
        return(
            <div>
            {waktu.map((item, i) =>
                <ul>
                    <li className={styles.timePicker} key={i} onClick={()=> this.setState({time:item})}>{item}</li>
                </ul>
            )}
        </div>)
    }

    render(){
        return(
            <div className={styles.background}>
                <Navbar/>
                <div className={styles.container}>
                    <div className={styles.containerLeft}>
                        <Profile/>
                    </div>
                    <div className={styles.containerRight}>
                        <div className={styles.top}>
                            <p>Channel Feedback</p>
                            <Link href="/profile">
                                <a>
                                    <div className={styles.exitButton}>
                                        <Image
                                            src='/closeIcon.svg'
                                            layout='fixed'
                                            width={9}
                                            height={9}
                                        />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <p className={styles.desc}>
                            I’ll give you my tips that may improve your Youtube channel based on your inqueries and my experience 
                        </p>
                        <div className={styles.duration}>
                            <Image
                                src='/videoIcon.svg'
                                layout='fixed'
                                height={6}
                                width={9}
                            />
                            <p>45 min</p>
                            <h4>see more ></h4>
                        </div>
                        <div className={styles.review}>
                            <ul>
                                <li>
                                    <div className={styles.profile}>
                                        <p className={styles.name}>Zach</p>
                                        <p className={styles.from}>- High School</p>
                                    </div>
                                    <p className={styles.comment}>"Pria yang baik dan ramah"</p>
                                    <ul className={styles.nilai}>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                        />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                                className={styles.minus}
                                            />
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className={styles.profile}>
                                        <p className={styles.name}>Brown</p>
                                        <p className={styles.from}>- Youtuber</p>
                                    </div>
                                    <p className={styles.comment}>"Penjalasannya mudah dipahami"</p>
                                    <ul className={styles.nilai}>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                        />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                src="/star.svg"
                                                height={12}
                                                width={12}
                                                layout="fixed"
                                                className={styles.minus}
                                            />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className={styles.dateTime}>
                            <p>Select a Date & Time</p>
                            <div className={styles.picker}>
                                <Calendar
                                    value={this.state.date}
                                    onChange={(n)=> this.setState({date:n})}
                                    minDate={new Date()}
                                    maxDate={new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))}
                                    tileDisabled={({date}) => date.getDay() === 0 || date.getDay() === 6}
                                />
                                <this.timePicker/>
                            </div>
                            <div className={styles.date}>
                                <Image
                                    src='/dateIcon.svg'
                                    layout="fixed"
                                    width={11}
                                    height={15}/>
                                <p>{this.state.date.toDateString()}</p>
                            </div>
                            <div className={styles.time}>
                                <Image
                                    src='/clockIcon.svg'
                                    layout="fixed"
                                    width={11}
                                    height={15}/>
                                <p>{this.state.time}</p>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <p>Rp450.000</p>
                            <Link href='/profile/ask/confirm' onClick={this.props.addDatetime(this.state.date, this.state.time)}>
                                <a>
                                    <div className={styles.confirm}>
                                        <p>CONFIRM</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch) =>{
    return{
        addDatetime : (date, time) => {
            dispatch(Action.setDateTime(date,time))
        }
    }
}

export default connect(null, mapDispatchToProps)(Ask);