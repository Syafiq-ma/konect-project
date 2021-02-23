import React, {Component} from 'react';
import Image from 'next/image';

import Navbar from '../../navbar';
import styles from '../../../styles/desktop.module.scss';
import Profile from '../profile';

class Desktop extends Component{
    render(){
        return(
            <div className={styles.background}>
                <div className={styles.navbar}>
                    <Navbar/>
                </div>
                <div className={styles.container}>
                    <div className={styles.videoWrapper}>
                        <video autoPlay loop height={570} style={{borderRadius:'30px 0 0 30px'}}>
                            <source src="/video.mp4" type="video/mp4" autoPlay loop/>
                        </video>
                    </div>
                    <div className={styles.container}>
                        <Profile/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Desktop;