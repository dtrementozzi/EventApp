import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import CreateEvent from '../Components/CreateEvent';
import Buttons from '../Components/Buttons';

export default function CreateEventScreen({navigation}) {
	return(
		<View style={styles.container}>
			<CreateEvent/>
			<Buttons
			style = {styles.button}
			value={"Go Home"}
			onClick={() => navigation.navigate("HomeScreen")}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		//justifyContent: 'center',
		alignItems: 'stretch',
		//position: 'absolute'
	},
	button: {
		width: 100
	}
})