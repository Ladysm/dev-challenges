import React from "react"
import Image from "next/image"
interface CardProps {
    img: string;
    width: number;
    height: number;
    alt: string
}
const Card = ({ img, width, height,alt }: CardProps) => {
    return(
        <div>
<img src={img} alt={alt} width={width} height={height} />
        </div>
    )
}
export default Card