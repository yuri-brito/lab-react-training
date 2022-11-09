import {useState} from 'react'
import './SingleColorPicker.css'
function SingleColorPicker(props){
    let back=''
    if(props.color==='r'){
        back=`rgb(${props.value},0,0)`
    }else if(props.color==='g'){
        back=`rgb(0,${props.value},0)`
    } else{
        back=`rgb(0,0,${props.value})`
    }
    function change(e){
       
        props.func(e.target.value,e.target.parentElement.children[1].innerHTML)
    }
    
    return(
        <div className='single'>
            <p style={{backgroundColor:back}}></p>
            <label>{props.color.toUpperCase()}:</label>
            <input type='number'min={0} max={255} onChange={change}/>

        </div>
    )
}
export default SingleColorPicker;