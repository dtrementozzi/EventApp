import React from 'react';
import {TextInput, View} from 'react-native';
import Buttons from '../Components/Buttons';
import Firebase from '../config/Firebase';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			email: '',
			password: ''
		};
	}
	handleLogin = () => {
		Firebase.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => this.props.value.navigate("HomeScreen"))
			.catch(error => console.log("Email or Password is incorrect"))
		this.setState({
			email: '',
			password: ''
		})
	}

	render() {
		return(
			<View>
				<TextInput placeholder="Enter Email" 
				onChangeText={email => this.setState({email})}
				value={this.state.email}/>
				<TextInput placeholder="Enter Password" 
				onChangeText={password => this.setState({password})}
				value={this.state.password}/>
				<Buttons value="Log In" onClick={() => this.handleLogin()}/>
			</View>
		);
	}
}