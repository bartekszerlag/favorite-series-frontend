import React, {Component} from "react";
import './AllSeries.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from "react-bootstrap/Button";

class AllSeries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seriesList: [],
            isLoaded: false
        }
    };

    refreshPage() {
        window.location.reload(false);
    }

    componentDidMount() {
        fetch('http://localhost:8080/series')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    seriesList: data,
                })
            })
    }

    render() {
        const {isLoaded, seriesList} = this.state;

        if (!isLoaded) {
            return <div className="loading-tv-series">Loading...</div>;
        } else {
            return (
                <div className="tv-series-list-view">
                    <h2>Favorite TV series</h2>
                    <div className="tv-series-list">
                        <ListGroup>
                            {seriesList.map(series => (
                                <ListGroup.Item key={series.id} className="tv-series">
                                    ID: <b>{series.id}</b> |
                                    Title: <b>{series.title}</b> |
                                    IMDB Rating: <b>{series.imdbRating}</b> |
                                    Platform: <b>{series.platform}</b>
                                </ListGroup.Item>
                            ))}
                            <Button block size="lg" onClick={this.refreshPage}>Reload Page</Button>
                        </ListGroup>
                    </div>
                </div>
            );
        }
    }
}

export default AllSeries;