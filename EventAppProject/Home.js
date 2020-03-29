import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {AsyncStorage} from 'react-native';
import Buttons from './Buttons';
import {db} from './Firebase';
import List from './List';
import {YellowBox} from 'react-native';

let itemsRef = db.ref('items');

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		YellowBox.ignoreWarnings(['Setting a timer']);
		this.state={
			items: []
		}
	}

	componentDidMount() {
		itemsRef.on('value', snapshot => {
			let data = snapshot.val();
			let newState = [];
			for (let item in data) {
				newState.push({
					id: item,
					name: data[item].name,
					location: data[item].location,
					date: data[item].date,
					posted: data[item].posted,
					img: data[item].img
				});
			}
			this.setState({
				items: newState
			})
		});
	}

	render() {
		return(
			<List value={this.props.value} items={this.state.items}/>
		);
	}
}
