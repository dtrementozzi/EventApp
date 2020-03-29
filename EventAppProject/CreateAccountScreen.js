import React from 'react';
import {Text, View} from 'react-native';
import Buttons from './Buttons';
import CreateAccount from './CreateAccount';

export default function CreateAccountScreen({navigation}) {
	return(
		<View>
			<CreateAccount value={navigation}/>
			<Buttons value="Back to Log In" onClick={() => navigation.navigate("LoginScreen")}/>
		</View>
	);
}