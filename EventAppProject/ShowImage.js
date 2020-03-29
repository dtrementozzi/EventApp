import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class ShowImage extends React.Component {
	render() {
		return(
			<View>
				<Image style={styles.img} source={{ uri: 'data:image/png;base64,' + this.props.value }}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		width: 350,
		height: 200,
		alignItems: 'center'
	}
});