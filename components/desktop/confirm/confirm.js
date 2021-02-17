import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Formik, Field, Form } from "formik";

import styles from '../../../styles/confirmDesktop.module.scss';

import Navbar from '../../navbar';
import Profile from '../profile';
import {connect} from 'react-redux';

class Confirm extends Component{
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
                        <div className={styles.detailOrder}>
                            <div className={styles.dateTime}>
                                <div className={styles.duration}>
                                    <Image
                                        src='/videoIcon.svg'
                                        layout='fixed'
                                        height={9}
                                        width={12}/>
                                    <p>45 MIN</p>
                                </div>
                                <div className={styles.date}>
                                    <Image
                                        src='/dateIcon.svg'
                                        layout='fixed'
                                        height={9}
                                        width={12}/>
                                    <p>{this.props.date.toDateString()}</p>
                                </div>
                                <div className={styles.time}>
                                    <Image
                                        src='/clockIcon.svg'
                                        layout='fixed'
                                        height={9}
                                        width={12}/>
                                    <p>{this.props.time}</p>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <p>Rp450.000</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <p className={styles.formTitle}>Tell me about yourself</p>
                            <Formik
                                initialValues={{ name: "", job: "", phonenumber: "", email: "", content: "" }}
                            >
                                <Form className={styles.form}>
                                    <div className={styles.nama}>
                                        <label className={styles.namaLabel} htmlFor="name">What should i call you?</label>
                                        <Field className={styles.nama} name="name" type="text" placeholder="Zach" />
                                    </div>
                                    <div className={styles.job}>
                                        <label className={styles.jobLabel} htmlFor="job">What do you do?</label>
                                        <Field className={styles.job} name="job" type="text" placeholder="Student" />
                                    </div>
                                    <div className={styles.phonenumber}>
                                        <label className={styles.phonenumberLabel} htmlFor="phonenumber">What is your phone number?</label>
                                        <Field className={styles.phonenumber} name="phonenumber" type="text" placeholder="081123459876" />
                                    </div>
                                    <div className={styles.email}>
                                        <label className={styles.emailLabel} htmlFor="email">What is your email address?</label>
                                        <Field className={styles.email} name="email" type="email" placeholder="abc@gmail.com" />
                                    </div>
                                    <div className={styles.content}>
                                        <label className={styles.contentLabel} htmlFor="content">What do you wantt to ask?</label>
                                        <Field className={styles.content} name="content" type="text" />
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className={styles.button}>
                            <Link href='/profile/ask'>
                                <a>
                                    <div className={styles.changeDate}>
                                        <p>CHANGE DATE</p>
                                    </div>
                                </a>
                            </Link>
                            <Link href='/profile'>
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

const mapStateToProps = (state) => {
    return{
        date: state.datetime.date,
        time: state.datetime.time
    }
}

export default connect(mapStateToProps)(Confirm);