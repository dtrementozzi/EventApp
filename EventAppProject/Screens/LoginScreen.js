import React from 'react';
import {Text, View} from 'react-native';
import Buttons from '../Components/Buttons';
import Login from '../Components/Login';

export default function LoginScreen({navigation}) {
	return(
		<View>
			<Login value={navigation}/>
			<Buttons value="Create Account" onClick={() => navigation.navigate("CreateAccountScreen")}/>
		</View>
	);
}