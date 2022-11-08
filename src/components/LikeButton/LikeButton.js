import {useState} from 'react'
import './LikeButton.css'
function LikeButton(){
    const [state, setstate]=useState({'numero':0,'color':'purple'})
    function buttonClick(ev){
        const colors=['purple','blue','green','yellow','orange','red']
        setstate({'numero':state.numero+1,'color':colors[(state.numero+1)%6]})
    }
    return(
        <div className='likeButton'>
            <button onClick={buttonClick} style={{backgroundColor:state.color}}>
                {state.numero} Likes
            </button>
        </div>
    )
}
export default LikeButton