import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import Image from 'next/image';
import React from 'react';

import Navbar from '../../navbar';
import Detail from './detail';
import Preview from './preview';
import Small from './small';
import styles from '../../../styles/mobile.module.css'

function content(height){
    if (height==250) {
        return <Small/>
  } else if (height==350){
      return <Preview/>
  } else if (height=1000){
      return <Detail/>
  }
}

export default function Example() {
  const [open] = useState(true)
  const sheetRef = React.useRef()
  const [height, setHeight] = useState(200)


  return (
    <div className={styles.background}>
        <div className={styles.video}>
            <video height={640} width={360} autoPlay loop>
                <source src="/video.mp4" type="video/mp4" autoPlay loop/>
            </video>
        </div>
        <div style={{position:'absolute'}}>
            <Navbar/>
            <BottomSheet
                ref={sheetRef}
                open={open} 
                snapPoints={({ maxHeight }) => [250, 350, maxHeight]}
                blocking={false}
                onSpringStart={async(event)=>{
                    if (event.type==='SNAP' && event.source === 'dragging') {
                        switch (sheetRef.current.height) {
                            case 250:
                                setHeight(350)
                                break;
                            case 350:
                                setHeight(1000)
                                break;
                            default:
                                setHeight(350)
                                break;
                        }
                    }
                    
                }}
                onSpringEnd={()=>{
                    switch (sheetRef.current.height) {
                        case 250:
                            setHeight(250)
                            break;
                        case 350:
                            setHeight(350)
                            break;
                        default:
                            setHeight(1000)
                            break;
                    }
                }}
            >
                <div>
                    {content(height)}
                </div>
                
            </BottomSheet>
        </div>
    </div>
  )
}