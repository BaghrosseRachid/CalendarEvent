import React from 'react'
import {removeEvent} from '../Actions/fireBaseActions'
const EventDisplay = ({event}) => {



    return (
        <div >
            <h4>Event OverView</h4>
           <div className='eventContainer'style={{backgroundColor:event.event.color}}><h3 >{event.event.name}</h3></div> 
            <div> <button type="button" style={{margin:" 0 auto"}} onClick={()=>{
            if(window.confirm("you will delete the event!!!?"))
             removeEvent(event.id)}} class="btn btn-danger">Delete the event</button></div>
               
         
          </div>
    )
}

export default EventDisplay
