import React from 'react';
import {TextInput, View} from 'react-native';
import Buttons from './Buttons';
import Firebase from './Firebase';

export default class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			email: '',
			password: ''
		}
	}

	handleLogin = () => {
		Firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => this.props.value.navigate("LoginScreen"))
	}

	render() {
		return(
			<View>
				<TextInput placeholder="Enter Email" 
				onChangeText={email => this.setState({email})}
				value={this.state.email}/>
				<TextInput placeholder="Enter New Password" 
				onChangeText={password => this.setState({password})}
				value={this.state.password}/>
				<Buttons value="Create New Account" onClick={() => this.handleLogin()}/>
			</View>
		);
	}
}