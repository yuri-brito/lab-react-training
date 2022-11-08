import {useState} from 'react'
import img from './maxence.png'
import imgClicked from './maxence-glasses.png'
function ClickablePicture(props){
    const [state, setState]=useState(img)
    function click(){
        state===img?setState(imgClicked):setState(img)
    }
    return(
        <div style={{margin:10}}>
            <img src={state} onClick={click}/>
        </div>
    )
}
export default ClickablePicture;