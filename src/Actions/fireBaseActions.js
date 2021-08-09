import firebase from "../firebase/firebase";
 //get Events From database
 export const getEvent  = (date,setEvent) => {
    const eventDb = firebase.database().ref("DayEvent");

    eventDb.on('value', (snapshot) => {
 
        let events = snapshot.val()
        let eventsArray = [];
        for (let id in events) {
          eventsArray.push({id, ...events[id]})
        }
       
        const eventExist = eventsArray.find(e=>e.event.date===date)
       
        setEvent(eventExist ? eventExist : null)
      
       
    })
}

export const createEvent = (event) => {
  
  const db = firebase.database().ref("DayEvent");

        db.push({event})
  }

  export const removeEvent = (id) => {

    let event = firebase.database().ref("DayEvent").child(id)
    event.remove().then( () => {
        console.log(event, " removed")
    })
  }