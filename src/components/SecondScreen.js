import React, {Component} from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './loginSubmit';


export default class SecondScreen extends Component {
  render() {
    return (      
      <Wallpaper>
        <Logo subtitle="Please Sign In To Continue"/>
        <Form firstInput="User Name" secodndInput="Password" />
        <ButtonSubmit /> 
      </Wallpaper>
    );
  }
}
