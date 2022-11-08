import {useState} from 'react'
import dice from './dice-empty.png'
import dice1 from './dice1.png'
import dice2 from './dice2.png'
import dice3 from './dice3.png'
import dice4 from './dice4.png'
import dice5 from './dice5.png'
import dice6 from './dice6.png'

function Dice(){
    const dices=[dice1,dice2,dice3,dice4,dice5,dice6]
    const[state,setState]=useState(dice)
    function change(){
        setState(dice)
        setTimeout(()=>{setState(dices[Math.floor(Math.random()*dices.length)])},1000)

    }
    return(
        <div onClick={change} style={{margin:10}}>
            <img src={state} width={100}/>
        </div>

    )
}
export default Dice;