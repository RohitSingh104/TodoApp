import React, { useState } from 'react'
import "./todo.css"

export default function Todo (){
    
    const [list,setList] = useState("");
    const [item,setItem] =useState([]);
    const displayItem =(item)=>
    {
       setList(item.target.value)
    }

    const listDisplay=(e)=>{
        if(list=="")
        {

        }else{
            e.preventDefault();
            setItem(
                 [...item,list]
            )
        }

      setList("");
      
    }
    const deleteList=(event)=>{
        let result= item.filter((currElement,index)=>{
            return Number(event.target.id)!==index;
        })
       setItem(result);
        

    
    }

   
    
    const removeAll=()=>{
      
        setItem([])
    }
    return (
        <div className="container">
            <div className='header'>
                
                <span><input type="text" id="textarea" value={list} onChange={displayItem}/></span>
                <span><button id="button" onClick={listDisplay}>Add</button></span>
                <span><button className="remove" onClick={removeAll}>Remove All</button></span>
                
            </div>
            
            <div className="list">
                <ul>
                    <li key="arrayItem">
                        {item.map((arrayItem,index)=>{
                            return <div key={index}>
                                <span><input type="text" value={arrayItem}/></span> 
                                <span><button id={index} onClick={deleteList}>Delete</button></span>
                               
                            </div>
                        })}
                    </li>
                </ul>
             
            </div>
            
        </div>
    )
}
