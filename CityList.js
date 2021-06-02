import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

// after `expo install react-native-safe-area-context`.
import { SafeAreaView } from "react-native-safe-area-context";

export default class CityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  // 중복된 city 이름이 key값으로 지정된다 -> set으로 해결
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/example0312/weather-crawler/e3168f2b4e316691f8ab385f738783976eef7f0d/availableCityNames"
    )
      .then((response) => response.json())
      .then((cities) => {
        const set = new Set(cities);
        const citySet = [...set];
        this.setState({
          cities: citySet,
        });
      });
  }

  onPressCity(item) {
    console.log(`onPressCity = ${item}`);
  }

  renderItem = (city) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.onPressCity(city)}
    >
      <Text style={styles.text}>{city}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          keyExtractor={(item) => item}
          renderItem={({ item }) => this.renderItem(item)}
          data={this.state.cities}
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "orange",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
