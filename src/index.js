import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Registration} from './components/Registration';
import {Login} from './components/Login';
import {Home} from './components/Home';

class RegistrationApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            userDetails: {
                firstName: '',
                lastName: '',
                emailAddress: '',
                password: '',
                mobileNumber: '',
            },
            storedPassword: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        switch (this.state.step) {
            case 1:
                // Store password for checking later
                let details = {};
                this.setState({storedPassword: this.state.userDetails.password});
                Object.assign(details, this.state.userDetails);
                details.password = '';
                this.setState({step: 2, userDetails: details})
                return;

            case 2:
                // Check login
                if (this.state.storedPassword === this.state.userDetails.password) {
                    this.setState({step: 3})
                    return;
                } else {
                    let details = {};
                    alert("Password incorrect, please try again");
                    Object.assign(details, this.state.userDetails);
                    details.password = '';
                    this.setState({userDetails: details})
                    return;
                }

            default:
                alert("You should not see this");
                return;
        }
    }

    handleChange(event) {
        let details = {};
        Object.assign(details, this.state.userDetails);
        details[event.target.name] = event.target.value;
        this.setState({userDetails: details});
    }

    renderRegistration(showPassword) {
        return (<div className="registration"><Registration handleChange={(e) => this.handleChange(e)}
                                                            handleSubmit={(e) => this.handleSubmit(e)}
                                                            userDetails={this.state.userDetails}
                                                            title="Registration"
                                                            showPassword={showPassword}/></div>);
    }

    renderLogin(showPassword) {
        return (<div className="login"><Login handleChange={(e) => this.handleChange(e)}
                                              handleSubmit={(e) => this.handleSubmit(e)}
                                              userDetails={this.state.userDetails}
                                              title="Login"
                                              showPassword={showPassword}/></div>);
    }

    renderHome(showPassword) {
        return (<div className="home"><Home handleChange={(e) => this.handleChange(e)}
                                            handleSubmit={(e) => this.handleSubmit(e)}
                                            userDetails={this.state.userDetails}
                                            title="Home"
                                            disabled={true}
                                            showPassword={showPassword}/></div>);
    }

    render() {
        switch (this.state.step) {
            case 1:
                return this.renderRegistration(true);
            case 2:
                return this.renderLogin(true);
            case 3:
                return this.renderHome(false);
            default:
                return (null);
        }
    }
}

export function formPopulated(userDetails, formName) {
    switch (formName) {
        case "Registration":
            return userDetails.password.length > 0 &&
                userDetails.emailAddress.length > 0 &&
                userDetails.firstName.length > 0 &&
                userDetails.lastName.length > 0;
        case "Login":
            return userDetails.password.length > 0 && userDetails.emailAddress.length > 0;
        default:
            return true;
    }
}

ReactDOM.render(<RegistrationApp/>, document.getElementById('root'));