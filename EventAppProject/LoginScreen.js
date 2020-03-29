import React from 'react';
import {Text, View} from 'react-native';
import Buttons from './Buttons';
import Login from './Login';

export default function LoginScreen({navigation}) {
	return(
		<View>
			<Login value={navigation}/>
			<Buttons value="Create Account" onClick={() => navigation.navigate("CreateAccountScreen")}/>
		</View>
	);
}