import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './RemoveSeries.css'
import SeriesAlert from "./SeriesAlert";

class RemoveSeries extends Component {

    constructor(props) {
        super(props);
        this.removeSeriesAlert = React.createRef()
    }

    handleSubmit = event => {
        event.preventDefault();
        this.removeSeries(event.target.id.value)
    }

    showRemoveSeriesAlert(variant, heading, message) {
        this.removeSeriesAlert.current.setVariant(variant);
        this.removeSeriesAlert.current.setHeading(heading);
        this.removeSeriesAlert.current.setMessage(message);
        this.removeSeriesAlert.current.setVisible(true);
    }

    removeSeries(id) {
        fetch('http://localhost:8080/series/' + id, {
            method: 'DELETE'
        }).then(function (response) {
            if (response.status === 200) {
                this.showRemoveSeriesAlert("success", "TV series removed", "Reload page to see updated list");
            } else if (response.status === 404) {
                this.showRemoveSeriesAlert("danger", "TV series not removed", "Not found TV series with this ID");
            } else {
                this.showRemoveSeriesAlert("danger", "TV series not removed", "Something went wrong");
            }
        }.bind(this)).catch(function (error) {
            this.showRemoveSeriesAlert("danger", "TV series not removed", "Something went wrong");
        }.bind(this));
    }

    render() {
        return (
            <div className="remove-series-view">
                <h2>Remove TV series</h2>
                <div className="remove-series">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="id" size="lg">
                            <Form.Label><b>ID</b></Form.Label>
                            <Form.Control autoFocus name="id"/>
                        </Form.Group>
                        <Button id="remove" block size="lg" type="submit">Remove</Button>
                    </Form>
                </div>
                <SeriesAlert ref={this.removeSeriesAlert}/>
            </div>
        )
    }
}

export default RemoveSeries;