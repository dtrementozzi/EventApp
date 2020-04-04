import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Buttons from '../Components/Buttons';
import Firebase from '../config/Firebase';

export default function AccountScreen({navigation}) {

	const user = Firebase.auth().currentUser;

	return(
		<View>
			<Text style={styles.itemText}>{user.email}</Text>
			<Buttons value="Log Out" onClick={() => Firebase.auth().signOut()
				.then(() => navigation.navigate("LoginScreen"))}/>
			<Buttons value="Back To Home Screen" onClick={() => navigation.navigate("HomeScreen")}/>
		</View>
	);
}

const styles = StyleSheet.create({
  itemText: {
  	fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
});