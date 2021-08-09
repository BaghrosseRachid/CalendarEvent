import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import EventInterface from './EventInterface'


const  CalendarEvent = () => {
  //state handle day changes
  const [value, onChange] = useState(new Date());
  //control the dialog interface
  const [open, setOpen] = React.useState(false);
  // get the day selected
  const [date,setDate] = useState(null)



  //Click day Event

  const handleClickDay=(e)=>{
    //update states
    setDate(null)
     setOpen(true)
     setDate(new Date(e).getDate())
  }

   useEffect(() => {
   }, [date])
  
  return (
    <div style={{ width:'400px' ,margin:"auto"}}>
      <Calendar
        onChange={onChange}
        value={value}
        activeStartDate={new Date(2023, 0, 1)}
        calendarType='US'
        locale='en'
        onClickDay={(e)=>handleClickDay(e)}
        
      />
      {date &&<EventInterface open={open} setOpen={setOpen} date={date}/>}
    </div> 
  );
}
export default CalendarEvent