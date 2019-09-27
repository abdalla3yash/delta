import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';

export default class LoginScreen extends Component {
  render() {
    return (
      
      <Wallpaper>
        <Logo subtitle="Enter Email Or Phone Number"/>
        <Form firstInput="E-Mail" thirdpart="OR" secodndInput="Phone Number" />
        <ButtonSubmit /> 
      </Wallpaper>
    );
  }
}
