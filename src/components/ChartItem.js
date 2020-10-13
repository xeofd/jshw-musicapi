// Imports
import React from 'react';

// Build Component - ChartItem (Child component of the larger Chart List components)
export default function ChartItem(props) {

    // Render
    return (
        <div className="chart-item" id="chart_item">
            <div className="chart-item-position">
                <h3>{ props.position + 1 }</h3>
            </div>
            <div className="chart-item-data">
                <p>{ props.item['im:name'].label }</p>
                <p>{ props.item['im:artist'].label }</p>
                <p>{ props.item['im:releaseDate'].attributes.label }</p>
            </div>
            <div className="chart-item-image-container">
                <img src={ props.item['im:image'][2].label } className="chart-item-image" alt="album_cover" />
            </div>
            <div className="chart-item-preview">
                <p>Preview song</p>
                <audio className="chart-item-player" src={ props.item.link[1].attributes.href } controls />
            </div>
        </div>
    );

}