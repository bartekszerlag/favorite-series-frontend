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
            return <div className="loading-series">Loading...</div>;
        } else {
            return (
                <div className="series-list-view">
                    <h2>Favorite TV series</h2>
                    <div className="series-list">
                        <ListGroup>
                            {seriesList.map(series => (
                                <ListGroup.Item key={series.id}>
                                    ID: <b>{series.id}</b> |
                                    Title: <b>{series.title}</b> |
                                    IMDB Rating: <b>{series.imdbRating}</b> |
                                    Platform: <b>{series.platform}</b>
                                </ListGroup.Item>
                            ))}
                            <Button id="reload" block size="lg" onClick={this.refreshPage}>Reload Page</Button>
                        </ListGroup>
                    </div>
                </div>
            );
        }
    }
}

export default AllSeries;