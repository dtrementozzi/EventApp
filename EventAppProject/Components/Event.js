import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Buttons from '../Components/Buttons';
import ShowImage from '../Components/ShowImage';

export default function Event ({route, navigation}) {

	return(
		<View style={styles.itemList}>
			<ShowImage value={route.params.img}/>
			<Text style={styles.itemText}>Event Name: {route.params.name}</Text>
			<Text style={styles.itemText}>Location: {route.params.location}</Text>
			<Text style={styles.itemText}>Date: {route.params.date}</Text>
			<Text style={styles.itemText}>Hosted By: {route.params.posted}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  itemText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
});