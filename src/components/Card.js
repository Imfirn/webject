import React from 'react'
import { Link } from "react-router-dom";
import'./card.css'
import MovieimgNow from"./movieDataNow"

const Card =({number: name,img,time,btn=false,rD}) =>
<div className="card">
    
    <div className="test">
    <img className="pic" src={`/image/nowPic/Movie/${name}/${img}_1.jpg`} alt=""/>  
    <div className="movieName">
        {name}
    </div>  
    <div className="movieTime">
        {time} min
    </div> 
    
    <div className="ticket">
    {btn ?(
    <Link to={`/Buyticket/${name}`} className='buy-link'>
    <button className="btn-ticket">
        Get tickets
        </button>
        </Link>
    ):(
        <div className="reDate">
            <p className="text">RELEASE DATE</p>
            <p>{rD}</p>
             </div>
    )}
    
    </div>
    </div>
    
   
    
</div>

export default Card
