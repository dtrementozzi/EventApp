import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {AsyncStorage} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Buttons from './Buttons';
import {db} from './Firebase';
import Firebase from './Firebase';
import SelectImage from './SelectImage';


export default class CreateEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			name: '',
			location: '',
			date: '',
			posted: Firebase.auth().currentUser.email,
			filePath: '',
			fileData: '',
			fileUri: ''
		}
	}

	handleNewEvent() {
		//addItems(this.state.name, currUser);
		console.log(this.state.posted);
		db.ref('items').push({
			name: this.state.name,
			location: this.state.location,
			date: this.state.date,
			posted: this.state.posted,
			img: this.state.fileData
		});
		console.log("Saved!");
	}

	handleUploadPhoto() {
		ImagePicker.showImagePicker((response) => {

			  if (response.didCancel) {
			    console.log('User cancelled image picker');
			  } else if (response.error) {
			    console.log('ImagePicker Error: ', response.error);
			  } else if (response.customButton) {
			    console.log('User tapped custom button: ', response.customButton);
			  } else {
			    const source = { uri: response.uri };

			    // You can also display the image using data:
			    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

			    this.setState({
			     filePath: response,
			     fileData: response.data,
			     fileUri: response.uri,
			    });
			    console.log(this.state.fileData);
			    //<Text> 'data:image/jpeg;base64,' + this.state.fileData</Text>
			  }
			})
	}

	render() {
		return(
			<View style={styles.container}>
				<TextInput
					placeholder="Enter New Event Name"
					onChangeText={(text) => this.setState({
						name: text
					})}
					value={this.state.text}/>
				<TextInput
					placeholder="Enter Location"
					onChangeText={(text) => this.setState({
						location: text
					})}
					value={this.state.text}/>
				<TextInput
					placeholder="Enter Date"
					onChangeText={(text) => this.setState({
						date: text
					})}
					value={this.state.text}/>
				<Buttons
				value="Upload Photo"
				onClick={() => this.handleUploadPhoto()}/>
				<SelectImage img={this.state.fileData}/>
				<Buttons
				value="Save Event"
				onClick={() => this.handleNewEvent()}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		alignItems: 'stretch'
	},
	button: {

	}
})