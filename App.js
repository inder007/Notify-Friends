/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Share, StyleSheet, Text, TextInput, View, ToastAndroid, TouchableOpacity, PermissionsAndroid} from 'react-native';
// import SwichExample from './assests/geolocation.js';
import SendSMS from 'react-native-sms-x';


type Props = {};
export default class App extends Component<Props> {
  state = {
      initialPositionLon: 'unknown',
      initialPositionLat:'unknown',
      Message: '',
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: ''
   }

   // var mm = this.state.Message+ "\n" +"www.google.com/maps/?q="+this.state.initialPositionLat+","+this.state.initialPositionLon

   // constuctor(props){
   //  // super(props);
   //  this.state = {initialPosition:false};
   // }

   componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            initialPosLon = JSON.stringify(position.coords.longitude);
           initialPosLat = JSON.stringify(position.coords.latitude);
           this.setState({ initialPositionLon: initialPosLon, initialPositionLat: initialPosLat });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
   }

  sharing = () => {
    Share.share({
      title: 'Help!!',
      message: this.state.Message+ "\n" +
      "www.google.com/maps/?q="+this.state.initialPositionLat+","+this.state.initialPositionLon, // Note that according to the documentation at least one of "message" or "url" fields is required
      // url: 'x',
      subject: 'Subject'
    });
  }

  async onSharePress() {
    navigator.geolocation.getCurrentPosition(
         (position) => {
           initialPosLon = JSON.stringify(position.coords.longitude);
           initialPosLat = JSON.stringify(position.coords.latitude);
           this.setState({ initialPositionLon: initialPosLon, initialPositionLat: initialPosLat }, this.sharing);
            // ToastAndroid.show(initialPosLat, ToastAndroid.SHORT);
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
  }

  async sendSMSFunction() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        'title': 'Disaster App',
        'message': 'Disaster App needs to access your sms services'
      }
    )
    if(granted){
      // SendSMS.send(123, "+918447026286", "Hey.., this is me!\nGood to see you. Have a nice day.",
      //   (msg)=>{
      //     // ToastAndroid.show(msg, ToastAndroid.SHORT);
      //   }
      // );
      if(this.state.p1 != ''){
      	SendSMS.send(123, this.state.p1, this.state.Message+ "\n" +"www.google.com/maps/?q="+this.state.initialPositionLat+","+this.state.initialPositionLon,(msg)=>{} );
      }
      if(this.state.p2 != ''){
      	SendSMS.send(123, this.state.p2, this.state.Message+ "\n" +"www.google.com/maps/?q="+this.state.initialPositionLat+","+this.state.initialPositionLon,(msg)=>{} );
      }
      if(this.state.p3 != ''){
      	SendSMS.send(123, this.state.p3, this.state.Message+ "\n" +"www.google.com/maps/?q="+this.state.initialPositionLat+","+this.state.initialPositionLon,(msg)=>{} );
      }
      if(this.state.p4 != ''){
      	SendSMS.send(123, this.state.p4, this.state.Message+ "\n" +"www.google.com/maps/?q="+this.state.initialPositionLat+","+this.state.initialPositionLon,(msg)=>{} );
      }
      if(this.state.p5 != ''){
      	SendSMS.send(123, this.state.p5, this.state.Message+ "\n" +"www.google.com/maps/?q="+this.state.initialPositionLat+","+this.state.initialPositionLon,(msg)=>{} );
      }
    }
    else{
      ToastAndroid.show("NOT WORKING!!", ToastAndroid.SHORT);
    }
  }

  render() {
  	return (
        <View style={{padding:10}}>
        <View style={{padding:10}}>
        <TextInput style={styles.textSytle}
        	 placeholder = {this.state.Message === '' ? "Enter Message to send" : ''}
        	 value = {this.state.Message === '' ? '' : this.state.Message}
        	 onChangeText = {(text) => this.setState({Message : text})}
        /></View>
        <View style={{padding:10}}>
        <TextInput style={styles.textSytle}
        	 placeholder = {this.state.p1 === '' ? "Enter Phone Number to whom to send sms" : ''}
        	 value = {this.state.p1 === '' ? '' : this.state.p1}
        	 keyboardType = 'numeric'
        	 onChangeText = {(text) => this.setState({p1 : text})}
        /></View>
        <View style={{padding:10}}>
        <TextInput style={styles.textSytle}
        	 placeholder = {this.state.p2 === '' ? "Enter Phone Number to whom to send sms" : ''}
        	 value = {this.state.p2 === '' ? '' : this.state.p2}
        	 keyboardType = 'numeric'
        	 onChangeText = {(text) => this.setState({p2 : text})}
        /></View>
        <View style={{padding:10}}>
        <TextInput style={styles.textSytle}
        	 placeholder = {this.state.p3 === '' ? "Enter Phone Number to whom to send sms" : ''}
        	 value = {this.state.p3 === '' ? '' : this.state.p3}
        	 keyboardType = 'numeric'
        	 onChangeText = {(text) => this.setState({p3 : text})}
        /></View>
        <View style={{padding:10}}>
        <TextInput style={styles.textSytle}
        	 placeholder = {this.state.p4 === '' ? "Enter Phone Number to whom to send sms" : ''}
        	 value = {this.state.p4 === '' ? '' : this.state.p4}
        	 keyboardType = 'numeric'
        	 onChangeText = {(text) => this.setState({p4 : text})}
        /></View>
        <View style={{padding:10}}>
        <TextInput style={styles.textSytle}
        	 placeholder = {this.state.p5 === '' ? "Enter Phone Number to whom to send sms" : ''}
        	 value = {this.state.p5 === '' ? '' : this.state.p5}
        	 keyboardType = 'numeric'
        	 onChangeText = {(text) => this.setState({p5 : text})}
        />
        </View>
          <TouchableOpacity style={styles.button} onPress={this.onSharePress.bind(this)} >
            <Text>Share Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.sendSMSFunction.bind(this)}>
          <Text>Send SMS</Text>
        </TouchableOpacity>
        </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 10,
    borderWidth: .5,
    borderColor: '#bbb',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSytle: {height: 40, borderColor: 'gray', borderWidth: 1}
});
