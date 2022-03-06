import React from 'react';
import './master.css';
import episode from './episode.json'; 

function CardModel() {

        return (
            
          <div className="card">
            <img className="card-img-top" src="./img/tech1.jpeg" alt="asd" />
            <div className="card-body">
              <h5 className="card-title">{this.props.number}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://google.com" className="btn btn-primary">Go to google</a>
            </div>
          </div>
      
        )
}

export default CardModel;