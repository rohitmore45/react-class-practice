import React from 'react'

export default function ConditionalDemo2() {
  let dayNumber = +prompt("Enter todays day number");
  let dayname = ''
  
  switch(dayNumber){
        case 1 : dayname='Monday'; break;
        case 2 : dayname='Tuesday'; break;
        case 3 : dayname='Wensday'; break;
        case 4 : dayname='Thursday'; break;
        case 5 : dayname='Friday'; break;
        case 6 : dayname='Saturday'; break;
        case 7 : dayname='Sonday'; break;
        default: return <h2>Not a valid day number</h2>
  }

    return <h2>{dayname}</h2>;
}
