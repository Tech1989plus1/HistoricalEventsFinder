import React from 'react';
import Event from './Event.jsx';

const Group = ({ data }) => {
  return(
    <div className="list-group w-75">
      {data.map((event, key) => 
        <Event event={event} key={key}/>
      )}  
    </div>
  );
}

export default Group;
