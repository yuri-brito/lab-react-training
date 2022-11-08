import {useState} from 'react'
import './NumbersTable.css'
function NumbersTable(props){
    const tableArray=[]
    for (let i =1;i<=props.limit;i++){
        i%2===0?tableArray.push(<p key={i} style={{backgroundColor:'red'}}>{i}</p>):tableArray.push(<p key={i}>{i}</p>)
    }

    return(
        <div className='numbers'>
            {tableArray}
        </div>
    )
}
export default NumbersTable;