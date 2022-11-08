import './Rating.css'
function Rating(props){
    const starArray=[]
    for (let i=0;i<Math.round(props.children);i++){
        starArray.push(<a>&#9733;</a>)
    }
    for (let i=0;i<5-Math.round(props.children);i++){
        starArray.push(<a>&#9734;</a>)
    }
    const another=starArray.map((ele,index)=>{
        return(<span key={index}>{ele}</span>)
    })

    return(
        <div className="rating">
            {another}
        </div>
    )
}
export default Rating