import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
//import RNFetchBlob from 'react-native-fetch-bloc';
import Firebase from './Firebase';

/*const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
*/
export default class SelectImage extends React.Component {
	render() {
		if (this.props.img) {
			return(<Image style={styles.img} source={{ uri: 'data:image/png;base64,' + this.props.img }}/>);
		} else {
				
			return(<Text style={styles.text}>No Image Selected</Text>);
			
		}
	}
}

const styles = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
		margin: 20
	},
	text: {
		padding: 20
	}

})