import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { Container, Content, Header } from "native-base";

export default class TexQuestion extends Component {
  render() {
    return (
      <View style={styles.quizWrapper}>
        <View>
          <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>{this.props.question}</Text>
        </View>
        <View
          style={{
            marginVertical: 20,
            borderWidth: 0.5,
            height: 150,
            borderRadius: 10,
            width: "100%"
          }}
        >
          <TextInput
            onChangeText={text =>
              this.props.answeringValue(text)
            }
            placeholder="Type Your Answer"
            multiline={true}
            style={{ textAlignVertical: "top", height: "100%",fontSize:16, fontWeight:'bold', color:'#000' }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
