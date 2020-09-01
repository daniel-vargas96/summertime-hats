import React from 'react';

export default function ProductListItem(props) {
  return (
    <button onClick={props.details} type="button" className="btn">
      <div className="card shadow object-fit items cards">
        <img className="card-img-top card-image" src={props.image}></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text text-muted">{'$' + (props.price / 100).toFixed(2)}</p>
          <p className="card-text paragraph">{props.description}</p>
        </div>
      </div>
    </button>

  );
}
