import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import Image from 'next/image';
import React from 'react';

import Navbar from '../../navbar';
import Detail from './detail';
import Preview from './preview';
import styles from '../../../styles/mobile.module.css'


export default function Example() {
  const [open] = useState(true)
  const sheetRef = React.useRef()
  const [fullHeight, setFullHeight] = useState(false)

  return (
    <div className={styles.background}>
        <div className={styles.video}>
            <video height={640} width={360} autoPlay loop>
                <source src="/video.mp4" type="video/mp4"/>
            </video>
        </div>
        <div style={{position:'absolute'}}>
            <Navbar/>
            <BottomSheet
                ref={sheetRef}
                open={open} 
                snapPoints={({ maxHeight }) => [350, maxHeight]}
                blocking={false}
                onSpringStart={async(event)=>{
                    if (event.type==='SNAP') {
                        sheetRef.current.height==350?setFullHeight(true):setFullHeight(false)
                    }
                    
                }}
                onSpringEnd={()=>{
                    sheetRef.current.height==350?setFullHeight(false):setFullHeight(true)
                }}
            >
                <div>
                {fullHeight?<Detail/>:<Preview/>}
                </div>
                
            </BottomSheet>
        </div>
    </div>
  )
}