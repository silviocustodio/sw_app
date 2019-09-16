import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.search(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        const disabled = !this.state.term.length;

        
        return (
            <MuiThemeProvider>
            <form onSubmit={this.onFormSubmit} className="input-group">
                 
                 <TextField
                    hintText="Type a Distance (MGLT) "
                    value={this.state.term}
                    onChange={this.onInputChange}
                    type="number" />
                <span className="input-group-btn">
               
                    <RaisedButton
                    label="Calculate"
                    primary={true}
                    type="submit"
                    disabled={disabled}>
                    </RaisedButton>
                </span>
            </form>
            </MuiThemeProvider>
        );
    }
}

