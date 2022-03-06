import React from "react";
import episode from './episode.json';

class CardModel extends React.Component {
    render() {
        return (
            <div className="col-md-4 mb-4">
            <div className="card">
            <img className="card-img-top" src="./img/tech1.jpeg" alt="asd" />
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.episode} - {this.props.air_date}</p>
              <a href={this.props.url} className="btn btn-primary">{this.props.url}</a>
            </div>
          </div>
          </div>
        )
    }
}

export default CardModel;