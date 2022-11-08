import './CreditCard.css';
import figVisa from './visa.png';
import figMaster from './master-card.png';

function CreditCard(props){
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}=props
    let fig;
    type==='Master Card'?fig=figMaster:fig=figVisa
    let expire=`Expires ${expirationMonth}/${expirationYear}`
    let hideNumber=number.slice(12)
    return(
        <div className='creditCard' style={{backgroundColor:bgColor,color:color}}>
            <article><img src={fig} alt="figura"/></article>
            <h2>&#x2022;&#x2022;&#x2022;&#x2022;&nbsp; &#x2022;&#x2022;&#x2022;&#x2022;&nbsp; &#x2022;&#x2022;&#x2022;&#x2022;&nbsp; {hideNumber}</h2>
            <p>{expire} &nbsp;  &nbsp; &nbsp; {bank}</p>
            <p>{owner}</p>
                
        </div>
    )
}
export default CreditCard;