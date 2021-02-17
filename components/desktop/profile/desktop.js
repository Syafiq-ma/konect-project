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
                    <div className={styles.fotoWrapper}>
                        <Image
                        className={styles.foto}
                            src='/image.jpg'
                            width={370}
                            height={570}
                            quality={100}
                            objectFit="cover"
                        />
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