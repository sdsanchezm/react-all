import React from "react";
import CardModel from "./CardModel";
import episode2 from './episode2.json';

class CardAlbum extends React.Component {
    render() {
        return (
            <div className="row">
                { episode2.results.map( (item) => { return <CardModel key={item.id} name={item.name} episode={item.episode} air_date={item.air_date} url={item.url} /> } ) }
            </div>
        )
    }
}

export default CardAlbum;