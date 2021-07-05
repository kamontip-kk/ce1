import React from 'react'
import Image from 'next/image'
import jojiwalk from '../public/image/joji-walk.gif'
import jojijump from '../public/image/joji-highjump-up.gif'
import cat from '../public/image/cat.png'

export default function graphic() {
    
    return (
        <div id="graphic">
            <h1>Graphic Design</h1>
            <Image src={jojiwalk} alt="jojiwalk" styles={{width : 200, height: 200}}/>
            <Image src={jojijump} alt="jojijump" styles={{width : 200, height: 200}}/>
            <Image src={cat} alt="cat" styles={{width : 200, height: 200}}/>
        </div>
    )
}