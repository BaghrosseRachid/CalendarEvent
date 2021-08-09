import React,{useState} from 'react'
import {colors} from '../utils/colors'
import {createEvent} from '../Actions/fireBaseActions'

const CreateEventForm = ({date}) => {
  //get the event from database if exist
const [event,setEvent]= useState({date:date})
    
    
        const handleInputChange = (e)=>{
            setEvent({...event,[e.target.name]:e.target.value})
        }
        
        const handleSubmit = (e)=>{
         e.preventDefault()
         createEvent(event);

        }
       
    return (
   
        <form onSubmit={handleSubmit}>
          <h4>Add Event</h4>

          <div class="form-group">
            <label for=""></label>
            <input type="text"
            required
              class="form-control" name="name" id="" aria-describedby="helpId" placeholder=" Event Title"
              onChange={handleInputChange}
              />
           
          </div>
             <div class="form-group">
               <label for=""></label>
               <select  class="form-control" name="color" id=""  onChange={handleInputChange}>

                 {colors && colors.map((color)=><option key={colors.code} value={color.name}>{color.name}</option>)}
                
               </select>
             </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        

        </form>
  
    )
}

export default CreateEventForm
