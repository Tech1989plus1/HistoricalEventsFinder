import React from 'react';

const Event = ({ event }) => {
  return (
    <a href="#" className="list-group-item list-group-item-action active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Place: {event.category2}</h5>
        <small>Year: {event.date}</small>
      </div>
      <p className="mb-1">{event.description}</p>
      <small>Language: {event.lang}</small>
    </a>
  );
};

export default Event;