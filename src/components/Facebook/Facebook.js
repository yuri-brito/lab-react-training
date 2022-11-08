import profiles from './berlin.json'
import {useState} from 'react'
import './Facebook.css'
function Facebook(props){
    const profileArray=[]
    const buttonArray=[]
    const countries=[]
    const [renderArray,setRender]=useState(profileArray)
    const [renderArrayButton,setRenderButton]=useState(buttonArray)
    function aparecer(event){
        if (event.target.parentElement.children[1].getAttribute('style')==="display:block;"){
            event.target.parentElement.children[1].setAttribute('style','display:none;')
        }else{
            event.target.parentElement.children[1].setAttribute('style','display:block;')
        }
    }
    function filterPais(event){
        const newProfileArray=[]
        const newButtonArray=[]
        let paisButton=event.target.innerHTML
        for (let pais of countries){
            if(paisButton===pais){
                newButtonArray.push(<button style={{backgroundColor:'lightblue'}} onClick={filterPais} key={countries.indexOf(pais)}>
                {pais}
            </button>)
            }else{
                newButtonArray.push(<button style={{backgroundColor:'white'}} onClick={filterPais} key={countries.indexOf(pais)}>
                    {pais}
                </button>)
            }
        setRenderButton(newButtonArray)
    
        }
        
        console.log(newButtonArray.filter((obj)=>obj.props.children==='Brazil')[0].props.style.backgroundColor)

        for (let profile of profiles){
            let corFundo=newButtonArray.filter((obj)=>obj.props.children===profile.country)[0].props.style.backgroundColor
            let type=''
            profile.isStudent?type='Student':type='Teacher'
            newProfileArray.push(<div className="face" style={{backgroundColor:corFundo}} key={profiles.indexOf(profile)}><img onClick={aparecer} src={profile.img} alt="idCard" width={120}/>
                    <section className='pface' style={{display:'none'}}>
                        <p><b>First name:&nbsp;</b><span>{profile.firstName}</span></p>
                        <p><b>Last name:&nbsp;</b><span>{profile.lastName}</span></p>
                        <p><b>Country:&nbsp;</b><span>{profile.country}</span></p>
                        <p><b>Type:&nbsp;</b><span>{type}</span></p>
                    </section>
                    </div>)
        }
        setRender(newProfileArray)
    }
    
    
    for (let profile of profiles){
        if (!countries.includes(profile.country)){
            countries.push(profile.country)
        }
        let type=''
        profile.isStudent?type='Student':type='Teacher'


        profileArray.push(<div className="face" style={{backgroundColor:'white'}} key={profiles.indexOf(profile)}><img onClick={aparecer} src={profile.img} alt="idCard" width={120}/>
        <section className='pface' style={{display:'none'}}>
            <p><b>First name:&nbsp;</b><span>{profile.firstName}</span></p>
            <p><b>Last name:&nbsp;</b><span>{profile.lastName}</span></p>
            <p><b>Country:&nbsp;</b><span>{profile.country}</span></p>
            <p><b>Type:&nbsp;</b><span>{type}</span></p>
        </section>
        </div>)
    }
    
    for (let pais of countries){
        buttonArray.push(<button style={{backgroundColor:'white'}} onClick={filterPais} key={countries.indexOf(pais)}>
            {pais}
        </button>)

    }
    

    



    return(
        <div className="facebook">
            <div className='buttons'>{renderArrayButton}</div>
            
            {renderArray}

        </div>

    )
}
export default Facebook;