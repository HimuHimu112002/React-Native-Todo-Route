// HomeScreen.js
import React from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet,ScrollView,Image } from 'react-native';
import Todo from '../Todo';



function HomeScreen({ navigation }) {
  return (
    <>

        <View>
        <Image style={styles2.image} source={require('../../assests/1.png')}></Image>

      <TouchableOpacity >
        <Text style={styles.button}>ADD YOUR NEW TASK</Text>
      </TouchableOpacity>

        </View>

        <ScrollView>

        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>TODO</Text>
            </TouchableOpacity>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10, marginBottom: 80}}>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-1</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-2</Text>
            </View>
            <View style={styles.cardButton}>
                <Text style={{textAlign:'center', color: 'white'}}>Level-3</Text>
            </View>
        </View>

        </ScrollView>

    </>
  );
}

export default HomeScreen;
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
    cardButton:{
        backgroundColor:'grey',
        width: 100,
        height: 100,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
  });

  const styles2 = StyleSheet.create({
    image: {
      width: '100%',
      resizeMode: 'cover',
    },
  });
  