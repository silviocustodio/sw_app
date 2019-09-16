import React, { Component } from 'react';
import BarStarWars from './app_bar';
import SearchBar from '../containers/search_bar';
import SwapiList from '../containers/swapi_list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSwapi } from '../actions/index';

class App extends Component {
    constructor(props) {         
        super(props)
        this.search = this.search.bind(this)
        this.state = {distance: ""}
    }

 search(x){
    this.setState({distance: x})
    this.props.fetchSwapi(x)
 }


    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <BarStarWars />
                </MuiThemeProvider>
                <MuiThemeProvider  >
                    <SearchBar search={this.search}/>
                </MuiThemeProvider >
                <SwapiList spaceships={this.props.swapi} distance={this.state.distance} />
            </div>
        );
    }
}



const mapStateToProps = state => ({swapi: state.swapi})
const mapDispatchToProps = dispatch => bindActionCreators({fetchSwapi}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
