import React, {Component} from "react";
import Alert from 'react-bootstrap/Alert'
import './SeriesAlert.css'

class SeriesAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            variant: this.props.variant,
            heading: this.props.heading,
            message: this.props.message
        }
    }

    setVisible = (visible) => {
        this.setState({visible: visible});
    }

    setVariant = (variant) => {
        this.setState({variant: variant});
    }

    setHeading = (heading) => {
        this.setState({heading: heading});
    }

    setMessage = (message) => {
        this.setState({message: message});
    }

    render() {
        if (this.state.visible) {
            return (
                <>
                    <div className="tv-series-alert">
                        <Alert variant={this.state.variant} onClose={() => this.setState({visible: false})} dismissible>
                            <Alert.Heading>{this.state.heading}</Alert.Heading>
                            <p>
                                {this.state.message}
                            </p>
                        </Alert>
                    </div>
                </>
            )
        }
        return null;
    }
}

export default SeriesAlert;