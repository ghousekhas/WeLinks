import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'


var showRealApp=false;
const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../assets/1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Refrigerator',
      image: require('../assets/2.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Title 3',
      text: 'Freezer',
      image: require('../assets/3.jpg'),
      backgroundColor: '#22bcb5',
    },
    {
        key: 'four',
        title: 'Title 4',
        text: 'Morgue',
        image: require('../assets/4.jpg'),
        backgroundColor: '#FFFFFF'
  }];


  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    showRealApp= true;
  };

const Introduction= ()=>{
      /*render(){
        /*if (this.state.showRealApp) {
          return <App />;
        } else {*/
          return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
       /* }*/
      /*}*/
    }


const styles= StyleSheet.create({
    slide:{
        flex: 1
    },
    title:{
        fontSize: 30
    },
    image:{
        height: 300,
        width: 300,
        alignContent: 'center',
    },
    text:{
        fontSize: 20
    }
});
export default Introduction;