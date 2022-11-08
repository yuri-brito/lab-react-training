import {useState} from 'react'
import './Carousel.css'
function Carousel(props){
    const images= props.images
    const [state,setState]=useState(0)
    function left(){
        state===0?setState(images.length-1):setState(state-1)
    }
    function right(){
        state===images.length-1?setState(0):setState(state+1)

    }
    return(
        <div className='carousel'>
            <button onClick={left}>&#11164;</button>
            <img src={images[state]}/>
            <button onClick={right}>&#11166;</button>
        </div>
    )
}
export default Carousel