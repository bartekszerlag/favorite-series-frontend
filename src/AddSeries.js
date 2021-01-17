import React, {Component} from "react";
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './AddSeries.css'
import SeriesAlert from "./SeriesAlert";

class AddSeries extends Component {

    constructor(props) {
        super(props);
        this.addSeriesAlert = React.createRef()
    }

    handleSubmit = event => {
        event.preventDefault();
        this.addSeries(event.target.title.value, event.target.platform.value)
    }

    showAddSeriesAlert(variant, heading, message) {
        this.addSeriesAlert.current.setVariant(variant);
        this.addSeriesAlert.current.setHeading(heading);
        this.addSeriesAlert.current.setMessage(message);
        this.addSeriesAlert.current.setVisible(true);
    }

    addSeries(title, platform) {
        fetch('http://localhost:8080/series', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                platform: platform
            })
        }).then(function (response) {
            if (response.status === 201) {
                this.showAddSeriesAlert("success", "TV series added", "Reload page to see updated list");
            } else if (response.status === 403) {
                this.showAddSeriesAlert("danger", "TV series not added", "Maximum number of TV series is reached");
            } else if (response.status === 409) {
                this.showAddSeriesAlert("danger", "TV series not added", "TV series already exist");
            } else {
                this.showAddSeriesAlert("danger", "TV series not added", "Something went wrong");
            }
        }.bind(this)).catch(function (error) {
            this.showAddSeriesAlert("danger", "TV series not added", "Something went wrong");
        }.bind(this));
    }

    render() {
        return (
            <div className="add-series-view">
                <h2>Add new TV series</h2>
                <div className="add-series">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title" size="lg">
                            <Form.Label><b>Title</b></Form.Label>
                            <Form.Control autoFocus name="title"/>
                        </Form.Group>
                        <Form.Group controlId="platform" size="lg">
                            <Form.Label><b>Platform</b></Form.Label>
                            <Form.Control autoFocus name="platform"/>
                        </Form.Group>
                        <Button id="add" block size="lg" type="submit">Add</Button>
                    </Form>
                </div>
                <SeriesAlert ref={this.addSeriesAlert}/>
            </div>
        )
    }
}

export default AddSeries;
