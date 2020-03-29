import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import Buttons from './Buttons';
import ShowImage from './ShowImage';
import PropTypes from 'prop-types';

export default class List extends React.Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	};

	handleClick(nav, name, location, date, posted, img) {
		nav.navigate("Event", {name, location, date, posted, img});
	}

	render() {
		return (
			<View style={styles.itemsList}>
	        	<FlatList
	        		data={this.props.items}
	        		renderItem={({item}) => <View>
	        		<TouchableOpacity
	        		style={styles.itemButton}
	        		onPress={() => this.handleClick(this.props.value, item.name, item.location, item.date, item.posted, item.img)}>
	        		<ShowImage value={item.img}/>
	        		<Text style={styles.itemText}>{item.name} hosted by {item.posted}</Text>
	        		</TouchableOpacity>
	        		</View>}/>



	     
	      	</View>
		);
	}
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  itemButton: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  itemText: {
  	fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});