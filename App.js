import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class App extends React.Component {
  state = {
    counter: 0,
  };
  
  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={this.clickHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 30,
    paddingBottom: 20,
  },
});