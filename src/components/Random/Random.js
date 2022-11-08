import "./Random.css"

function Random(props){
    let randomNumber=Math.floor(Math.random()*(props.max-props.min+1)+props.min)

    return (
        <div className="random">
            Random value between {props.min} and {props.max} => {randomNumber}
        </div>
    )
}
export default Random;