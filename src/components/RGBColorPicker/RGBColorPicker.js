import {useState} from 'react'
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker';
import './RGBColorPicker.css'
function RBGColorPicker(){
    const[rValue,setrValue]=useState('')
    const[gValue,setgValue]=useState('')
    const[bValue,setbValue]=useState('')
    const[text,setText]=useState('rgb(,,)')
    
    function mixColor(value,color){
        if (color.includes('R')){
            
            setText(`rgb(${value},${gValue},${bValue})`)
            setrValue(value)
            
        }else if(color.includes('G')){
            setText(`rgb(${rValue},${value},${bValue})`)
            setgValue(value)
        }else{
            setText(`rgb(${rValue},${gValue},${value})`)
            setbValue(value)
        }

    }
    
    return(
        <div className='rgb'>
            <SingleColorPicker 
                color="r"
                value={rValue}
                func={mixColor}
            />

                <SingleColorPicker 
                color="g"
                value={gValue}
                func={mixColor}
            />

                <SingleColorPicker 
                color="b"
                value={bValue}
                func={mixColor}
            />
            <div className='result'>
                <p className='colored' style={{backgroundColor:text}}></p>
                <p >{text}</p>
            </div>
        </div>
    )
}
export default RBGColorPicker;