import './IdCard.css'

function IdCard(props){
    const {lastName,firstName,gender,height,birth,picture}=props
    return(
        <div className="IdCard">
            <img src={picture} alt="idCard"/>
            <section className='pIdCard'>
                <p> <b>First name: </b><span>{firstName}</span></p>
                <p> <b>Last name: </b><span>{lastName}</span></p>
                <p> <b>Gender: </b><span>{gender}</span></p>
                <p> <b>Height: </b><span>{height/100}m</span></p>
                <p> <b>Birth: </b><span>{birth.toLocaleDateString()}</span></p>
            </section>

        </div>
    )
}
export default IdCard