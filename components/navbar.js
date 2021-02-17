import React, {Component} from 'react';
import Image from 'next/image';
import styles from '../styles/navbar.module.scss'

class Navbar extends Component{
    render(){
        return(
            <div className={styles.navbar}>
                <div className={styles.search}>
                    <Image 
                        src='/searchIcon.svg'
                        width={18}
                        height={18}
                    />
                </div>
                <p>konect</p>
                <div className={styles.back}>
                    <Image 
                        src='/backIcon.svg'
                        width={18}
                        height={18}
                    />
                </div>
            </div>
        )
    }
}

export default Navbar;