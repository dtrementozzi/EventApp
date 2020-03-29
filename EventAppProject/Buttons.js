import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default class Buttons extends React.Component {
	render() {
		return(
			<Button
			style={styles.button}
			title={this.props.value}
			onPress={() => this.props.onClick()}/>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 20
	}
})