import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

class CounterButton extends React.Component {
  constructor(props) {
    const { 
      counter = 0
    } = props;
    super(props);

    this.state = {
      counter,
    };
  }

  state = {
    counter: 0,
  };

  clickHandler = () => this.setState({
      counter: this.state.counter + 1,
  });

  render = () => (
      <View style={styles.buttonContainer}>
        <Text style={styles.counter}>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={this.clickHandler}/>
      </View>
  );
}

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <CounterButton />
        <CounterButton counter={1} />
        <CounterButton counter={2} />
        <CounterButton counter={3} />
        <StatusBar style="auto" />
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
  buttonContainer: {
    alignItems: 'center',
    width: '100%',

    borderWidth: 1,
    borderColor: 'black',
  },
});