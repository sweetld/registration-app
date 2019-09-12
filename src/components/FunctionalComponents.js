import React from "react";
import TextField from "material-ui/TextField";

export function Password(props) {
    return (
        <div>
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                name="password"
                disabled={props.disabled}
                onChange={props.handleChange}
                value={props.userDetails.password}
            />
            <br/>
        </div>
    );
}

export function UserDetails(props) {
    return (
        <div>
            <TextField
                hintText="Enter your First Name"
                floatingLabelText="First Name"
                name="firstName"
                disabled={props.disabled}
                onChange={props.handleChange}
                value={props.userDetails.firstName}
            />
            <br/>
            <TextField
                hintText="Enter your Last Name"
                floatingLabelText="Last Name"
                name="lastName"
                disabled={props.disabled}
                onChange={props.handleChange}
                value={props.userDetails.lastName}
            />
            <br/>
            <TextField
                hintText="Enter your Email Address"
                floatingLabelText="Email Address"
                name="emailAddress"
                disabled={props.disabled}
                onChange={props.handleChange}
                value={props.userDetails.emailAddress}
            />
            <br/>
            {props.showPassword ? Password(props) : null}
            <TextField
                hintText="Enter your Mobile Number"
                floatingLabelText="Mobile Number" this
                name="mobileNumber"
                disabled={props.disabled}
                onChange={props.handleChange}
                value={props.userDetails.mobileNumber}
            />
            <br/>
        </div>
    );
}
