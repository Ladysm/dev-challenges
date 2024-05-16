import React from "react"
import Image from "next/image"
export default function card({img}:{ img:string }){
    return(
        <div>
 <Image src={img} alt="Card Image" />
        </div>
    )
}