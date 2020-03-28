import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      'displayName': '',
      'email': '',
      'password': '',
      'confirmPassword': '',
    }
  }

  returnStateToInitialStatus = () => {
    this.setState({
      'displayName': '',
      'email': '',
      'password': '',
      'confirmPassword': '',
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password does not match.'); 
      return false;
    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.returnStateToInitialStatus();

    } catch (error) {

      console.error(`An error occured wile signining up : ${error}`); 

    }
    
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-up'>
        <h2> I don't have an account </h2>
        <span> Sign up with your email and password </span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            onChange={this.handleChange}
            value={this.state.displayName}
            label='display name'
            required
          />

          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />

          <FormInput
            name='confirmPassword'
            type='password'
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            label='confirm password'
            required
          />

          <CustomButton type="submit" onClick={this.handleSubmit}> Sign Up </CustomButton>

        </form>
      </div>
    )
  }
}
export default SignUp;