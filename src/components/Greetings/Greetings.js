import "./Greetings.css"
let msg=''
function Greetings(props){
    if (props.lang==='de'){
        msg='Hallo Ludwig'

    }else if (props.lang==='fr'){
        msg='Bonjour François'
    }else if(props.lang==='en'){
        msg='Hello Mayke'
    }else{
        msg='Holla Santiago'
    }
    
    return (
        <div className="greetings">
            {msg}
        </div>
    )
}
export default Greetings;