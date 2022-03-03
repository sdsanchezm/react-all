import React from 'react';
import './master.css';
import entries from './photo-entries';

class PhotoEntry extends React.Component {

    render () {

        console.log(entries);
        console.log(this.props.caption);
        console.log(this.props.location);
        console.log(this.props.src);
        console.log("----------***---");

        const image_path = "../img/" + this.props.src;

        return <div className='photo-entry-block' >
                <a href={image_path} >
                    <img className='photo-img' src={image_path} alt={image_path} />
                </a>
                <h5>{this.props.caption}</h5>
                <h6>{this.props.location}</h6>
        </div>
    }

}

export default PhotoEntry;