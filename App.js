import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

// after `expo install react-native-safe-area-context`.
import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.fullscreen}>
        <View style={styles.container}>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
              width: 128,
              height: 128,
            }} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
              width: 128,
              height: 128,
            }} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
              width: 128,
              height: 128,
            }} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
              width: 128,
              height: 128,
            }} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
              width: 128,
              height: 128,
            }} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
              width: 128,
              height: 128,
          }} />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  container: {
    flex: 1,

    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 10,

    // justifyContent: 'center',
    alignItems: 'center',
  },
});