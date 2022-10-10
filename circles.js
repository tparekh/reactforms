import React from "react"; 
import Circle from "./Circle"

const ColoredCircles = () => {
    const circles = ['indigo', 'peachpuff', 'lavander']
    return (
        <div>
            {circles.map(color, idx) => (
                <Circle coor ={color}></Circle>
            ))}
        </div>
    )
}

return default ColoredCirclesa