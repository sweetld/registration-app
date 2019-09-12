import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import {Password} from "./FunctionalComponents";
import RaisedButton from "material-ui/RaisedButton";
import {formPopulated} from "../index";

export class Login extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title={this.props.title}/>
                <TextField
                    hintText="Enter your Username/Email Address"
                    floatingLabelText="Email Address"
                    name="emailAddress"
                    onChange={this.props.handleChange}
                    value={this.props.userDetails.emailAddress}
                />
                <br/>
                {this.props.showPassword ? Password(this.props) : null}
                <RaisedButton name="Login"
                              label="Login"
                              primary={true}
                              disabled={!formPopulated(this.props.userDetails, "Login")}
                              onClick={this.props.handleSubmit}/>
            </MuiThemeProvider>
        );
    }
}