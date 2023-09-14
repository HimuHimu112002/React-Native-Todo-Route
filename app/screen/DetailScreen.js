// DetailsScreen.js
import React from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import Todo from '../Todo';
import Slidermain from '../Slidermain';


function DetailScreen({navigation}) {
  return (
    <>

        
        <Slidermain></Slidermain>
        <ScrollView>
        <View>
        <Todo></Todo>

        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.button}>GO TO HOME</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>

    </>
  );
}

export default DetailScreen;
const styles = StyleSheet.create({
    button: {
      fontSize: 20,
      padding: 10,
      margin: 10,
      borderRadius: 5,
      backgroundColor: "green",
      textAlign: "center",
      color: "white",
    },
  });