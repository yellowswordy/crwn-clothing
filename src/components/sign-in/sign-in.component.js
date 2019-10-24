import React, {Component} from 'react';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import './sign-in.component.scss'
import {signInWithGoogle, SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    };
    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your account email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email}
                        label="email"
                        required
                        handleChange={this.handleChange}
                    />
                    {/*<label htmlFor="email">Email</label>*/}
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />
                    {/*<label htmlFor="password">Password</label>*/}

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
