// Imports
import React from 'react';
import ChartItem from './ChartItem';

// Build Component - ChartList (Child component of the larger Chart List components)
export default function ChartList(props) {

    // console.log(props.list.entry);

    if(!props.list) {
        return (<p>Loading...</p>);
    }

    //Methods
    const items = props.list.map(c_item => {
        return <ChartItem item={ c_item } key={ props.list.indexOf(c_item) } position={ props.list.indexOf(c_item) } />
    });

    // console.log(props.listItems.entry);

    // Render
    return (
        <div id="chart_list">
            { items }
        </div>
    );

}