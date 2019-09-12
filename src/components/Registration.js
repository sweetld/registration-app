import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {UserDetails} from "./FunctionalComponents";
import RaisedButton from "material-ui/RaisedButton";
import {formPopulated} from "../index";

export class Registration extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title={this.props.title}/>
                {UserDetails(this.props)}
                <RaisedButton name="Registration"
                              label="Submit"
                              primary={true}
                              disabled={!formPopulated(this.props.userDetails, "Registration")}
                              onClick={this.props.handleSubmit}/>
            </MuiThemeProvider>
        );
    }
}
