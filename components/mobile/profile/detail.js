import React,{Component} from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../styles/detailMobile.module.scss';


class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            ask:true,
            product:false,
            review:false
        }
    }
    render(){
        return(
            <div className={styles.container}>
                <Image
                    className={styles.fotoProfile}
                    src="/image.jpg"
                    width={105}
                    height={100}
                    layout="fixed"
                    quality={100}
                    objectFit="cover"
                />
                <p className={styles.name}>Syafiq Alaudin</p>
                <p className={styles.role}>Youtuber</p>
                <ul className={styles.sosmed}>
                    <a href="https://www.instagram.com/" target="_blank">
                        <li>
                            <Image
                                src="/instagram.svg"
                                height={16}
                                width={16}
                                layout="fixed"
                            />
                        </li>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <li>
                            <Image
                                src="/twitter.svg"
                                height={16}
                                width={16}
                                layout="fixed"
                            />
                        </li>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <li>
                            <Image
                                src="/youtube.svg"
                                height={16}
                                width={16}
                                layout="fixed"
                            />
                        </li>
                    </a>
                </ul>
                <ul className={styles.tag}>
                    <li>
                        #contentcreator
                    </li>
                    <li>
                        #vlog
                    </li>
                    <li>
                        #videoads
                    </li>
                </ul>
                <ul className={styles.bintang}>
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
                <ul className={styles.service}>
                    <li className={this.state.ask?styles.active:styles.list}
                        onClick={()=>this.setState({ask:true, product:false, review:false})}
                    >
                        ASK
                    </li>
                    <li className={this.state.product?styles.active:styles.list}
                        onClick={()=>this.setState({ask:false, product:true, review:false})}
                    >
                        PRODUCT
                    </li>
                    <li className={this.state.review?styles.active:styles.list}
                        onClick={()=>this.setState({ask:false, product:false, review:true})}
                    >
                        REVIEW
                    </li>
                </ul>
                {this.state.ask?
                    <div className={styles.ask}>
                        <ul>
                            <Link href='/profile/ask'>
                                <a>
                                    <li>
                                        <p className={styles.title}>Channel Feedback</p>
                                        <p className={styles.desc}>I’ll review your Youtube channel</p>
                                        <div className={styles.more}>
                                            <Image
                                                src="/videoIcon.svg"
                                                width={9}
                                                height={6}
                                                layout="fixed"
                                            />
                                            <p>45 MIN</p>
                                            <h4>Rp450k</h4>
                                        </div>
                                    </li>
                                </a>
                            </Link>
                            <Link href='/profile/ask'>
                                <a>
                                    <li>
                                        <p className={styles.title}>Channel Feedback</p>
                                        <p className={styles.desc}>I’ll review your Youtube channel</p>
                                        <div className={styles.more}>
                                            <Image
                                                src="/videoIcon.svg"
                                                width={9}
                                                height={6}
                                                layout="fixed"
                                            />
                                            <p>45 MIN</p>
                                            <h4>Rp450k</h4>
                                        </div>
                                    </li>
                                </a>
                            </Link>
                            <Link href='/profile/ask'>
                                <a>
                                    <li>
                                        <p className={styles.title}>Channel Feedback</p>
                                        <p className={styles.desc}>I’ll review your Youtube channel</p>
                                        <div className={styles.more}>
                                            <Image
                                                src="/videoIcon.svg"
                                                width={9}
                                                height={6}
                                                layout="fixed"
                                            />
                                            <p>45 MIN</p>
                                            <h4>Rp450k</h4>
                                        </div>
                                    </li>
                                </a>
                            </Link>
                            <Link href='/profile/ask'>
                                <a>
                                    <li>
                                        <p className={styles.title}>Channel Feedback</p>
                                        <p className={styles.desc}>I’ll review your Youtube channel</p>
                                        <div className={styles.more}>
                                            <Image
                                                src="/videoIcon.svg"
                                                width={9}
                                                height={6}
                                                layout="fixed"
                                            />
                                            <p>45 MIN</p>
                                            <h4>Rp450k</h4>
                                        </div>
                                    </li>
                                </a>
                            </Link>
                        </ul>
                    </div>:<div></div>
                }
                {this.state.product?
                    <div className={styles.product}>
                        <ul>
                            <li>
                                <p className={styles.product}>Book</p>
                                <div className={styles.desc}>
                                    <p className={styles.title}>Youtube Strategy</p>
                                    <p className={styles.harga}>Rp50.000</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    :<div></div>
                }
                {this.state.review?
                    <div className={styles.review}>
                        <ul>
                            <li>
                                <div className={styles.profile}>
                                    <p className={styles.name}>Zach</p>
                                    <p className={styles.from}>- High School</p>
                                </div>
                                <p className={styles.desc}>"Pria yang baik dan ramah"</p>
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
                                <p className={styles.desc}>"Penjalasannya mudah dipahami"</p>
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
                    :<div></div>
                }
            </div>
        )
    }
}

export default Detail;