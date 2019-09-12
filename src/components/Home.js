import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {UserDetails} from "./FunctionalComponents";

export class Home extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title={this.props.title}/>
                {UserDetails(this.props)}
            </MuiThemeProvider>
        );
    }
}