// Imports
import React, {Component} from 'react';
import ChartList from '../components/ChartList';

// Build Component - ChartWrapper (Parent component of the larger Chart List components)
export default class ChartWrapper extends Component {

    // Constructor
    constructor(props) {

        // Super
        super(props);

        // State
        this.state = {
            title: 'name',
            chartList: []
        }

        // Binds
        this.fetchData = this.fetchData.bind(this);

    }
    
    // Methods
    fetchData() {

        // Set URL
        const apiURL = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

        // Fetch data & set
        fetch(apiURL)
        .then(response => response.json())
        .then(data => this.setState({ chartList: data.feed.entry }))
        .catch(err => console.error('Error encountered:', err));

    }

    // Mounted
    componentDidMount() {

        // Run API call once component mounted
        this.fetchData();

    }

    // Render
    render() {
        return(
            <div className="chart-wrapper" id="chart_list_wrapper">
                <h2>Top 20 Songs - All genres</h2>
                <ChartList list={ this.state.chartList } />
            </div>
        );
    }

}