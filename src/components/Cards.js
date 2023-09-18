import React from 'react';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div className="col-lg-4">
    <div className="card">
        <img src={props.imgpath} className={props.classNameTxt} alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center text-dark fw-bold">{props.cardTitlename}</h5>
            <p className="card-text">{props.cardTxt}</p>
            <Link to="#" className="btn btn-primary">Read More</Link>
        </div>
    </div>
</div>
  )
}

export default Cards
