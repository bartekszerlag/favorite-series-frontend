import React, {Component} from "react";
import AddSeries from "./AddSeries";
import AllSeries from "./AllSeries";
import RemoveSeries from "./RemoveSeries";

class App extends Component {
    render() {
        return (
            <>
                <AllSeries/>
                <AddSeries/>
                <RemoveSeries/>
            </>
        )
    }
}

export default App;
