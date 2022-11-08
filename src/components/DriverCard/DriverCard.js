import './DriverCard.css'

function DriverCard(props){
    const {name,rating,img,car}=props
    const starArray=[]
    for (let i=0;i<Math.round(rating);i++){
        starArray.push(<a>&#9733;</a>)
    }
    for (let i=0;i<5-Math.round(rating);i++){
        starArray.push(<a>&#9734;</a>)
    }
    const another=starArray.map((ele,index)=>{
        return(<span key={index}>{ele}</span>)
    })
    return(
        <div className='driverCard'>
            <img src= {img} width="130px" height="130px"/>
            <article>
                <h3>{name}</h3>
                <p className="pStar">{another}</p>
                <p className="pCar">{car.model} - {car.licensePlate}</p>

            </article>
        </div>
    )
}

export default DriverCard;