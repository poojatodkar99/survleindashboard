import React from 'react';
import "../style-2/notifications.css"

function Notifications(props) {
    
  return (
    <>
      <div className="notifcontainer">
      <div>
        <span>Notifications</span>
        <button style={{height:'25px' , width:'25px', borderRadius:'50%',margin:'4px 5px'}}onClick={()=>props.close(false)} >x</button>
        
      </div>
      <div >
      <span style={{margin:'10px 7px',padding:'5px 5px'}}>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. </span>
      </div>
      </div>
    </>
  );
}

export default Notifications;
