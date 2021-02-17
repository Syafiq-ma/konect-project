import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import Image from 'next/image';
import React from 'react';

import Navbar from '../../navbar';
import Detail from './detail';
import Preview from './preview';


export default function Example() {
  const [open] = useState(true)
  const sheetRef = React.useRef()
  const [fullHeight, setFullHeight] = useState(false)

  return (
    <div>
        
        <Image
        src="/image.jpg"
        layout="fill"
        objectFit="cover"
        />
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
  )
}