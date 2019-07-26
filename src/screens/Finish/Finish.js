import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  AsyncStorage
} from "react-native";
import { Container, Content, Header } from "native-base";

export default class Finish extends Component {
  _Finish = async () => {
    try {
      const token = await AsyncStorage.removeItem("token");
      console.log(token);
      if (token == null) {
        this.props.navigation.navigate("Register");
      }
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <Container style={styles.container}>

        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Congratulations</Text>
          <Text>You have finished your interView</Text>

          <TouchableOpacity style={[styles.buttonContainer, styles.startButton]} onPress={this._Finish}>
            <Text style={styles.startText}>Finish ...</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  welcome: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeText: {
    color: "#251b5a",
    fontWeight: "bold",
    fontSize: 25
  },
  buttonContainer: {
    marginTop:100,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30
  },
  startButton: {
    backgroundColor: "#f39b25"
  },
  startText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});
