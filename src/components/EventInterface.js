import React,{useState,useEffect} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import EventDisplay from './EventDisplay'
import CreateEventForm from './CreateEventForm';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import {getEvent} from '../Actions/fireBaseActions'


export default function EventInterface({open,setOpen,date}) {
const [event,setEvent] =  useState(null)
  

  const handleClose = () => {
    setOpen(false);
  };
  //check if the event exist and make it into event state
  useEffect(() => {
    getEvent(date,setEvent)
  }, [open,date])
  
  


  return (
    
<div>

<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title"><h2>Event Manager</h2></DialogTitle>
  <DialogContent>
    { event ? (<EventDisplay event={event}/>) :(<CreateEventForm  date={date} setOpen={setOpen}/>)}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}  style={{fontSize : '15px', color :"red"}}>
      Close
    </Button>
   
  </DialogActions>
</Dialog>
</div>
  );
}
