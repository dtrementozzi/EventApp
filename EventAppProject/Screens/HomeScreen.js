import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Buttons from '../Components/Buttons';
import Home from '../Components/Home';

export default function HomeScreen({navigation}) {
	return(
		<View style={styles.listview}>
			<Home value={navigation}/>
			<Buttons
			style={styles.button}
			value={"Create New Event"}
			onClick={() => navigation.navigate('CreateEventScreen')}/>
			<Buttons
			style={styles.button}
			value={"Account Info"}
			onClick={() => navigation.navigate('AccountScreen')}/>
		</View>
	);
}


const styles = StyleSheet.create({
	listview: {
		flex: 1,
		padding: 20,
		alignItems: 'stretch',
	},
	button: {
		margin: 20
	}
})