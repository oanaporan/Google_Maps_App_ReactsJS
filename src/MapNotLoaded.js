import React, { Component } from 'react';

class MapNotLoaded extends Component {
    state = {
        show: false,
        timeout : null
    }

    componentDidMount() {
        let timeout = window.setTimeout(this.showMessage, 1000);
        this.setState({ timeout });
    }

    componentWillUnmount() {
        window.clearTimeout(this.state.timeout);
    }

    showMessage = () => {
        this.setState({ show: true });
    }

    render() {
        return(
            <div>
                {this.state.show ? (
                    <div>
                    <h1>Error occured while loading the map</h1>
                    <p>Map could not load, please check network connectivity</p>
                    </div>
                ): (<div>Loading...</div>)
                }
            </div>
        )
    }  
}

export default MapNotLoaded;