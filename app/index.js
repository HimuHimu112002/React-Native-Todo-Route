import React, { useState } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'

const Home = () => {
  let [text, setText] = useState("");
  let [textEditCng, setTextEditCng] = useState("");
  let [list, setlist] = useState([]);
  let [error, seterror] = useState("");
  let [box, setBox] = useState(false);
  let [editiD, seteditID] = useState("");

  // ============== SUBMIT BUTTON ================
  let handlebutton = (e) =>{
    if(!text){
      seterror("Please Input Here")
    }else{
      setlist([...list, {task:text}])
    }
  }

  // ============== DELETE ================
  let handlDelete =(item)=>{
      let arr = [...list];
      arr.splice(item,1)
      setlist(arr)
  }

  // ============== UPDATE BUTTON ================
  let handlUpdate =(item)=>{
    setBox(true)
    seteditID(item)
    let arr = [...list];
    setlist(arr)
    
  }

  // ============== FINAL UPDATE ================
  let handleUpdateChange = ()=>{
    let arr = [...list];
    arr[editiD] = {task:textEditCng}
    setlist(arr)
    setBox(false)
     
  }
  return (
    <View  style={styles.centeredView}>
     
      <Text style={{color:"white", backgroundColor:"green",padding: 20, margin: 10, textAlign:"center", borderRadius:5}}>Hello React Native</Text>

      <Text style={styles.heading}>ADD YOUR NEW TASK</Text>
      <TextInput onChangeText={setText} style={styles.input} value={text}/>
      {box &&
        <>
          <TextInput onChangeText={setTextEditCng} style={styles.input} value={textEditCng}/>

          <TouchableOpacity onPress={handleUpdateChange}>
          <Text style={styles.button}>SAVE</Text>
          </TouchableOpacity>

        </>
      }

      <TouchableOpacity onPress={handlebutton}>
        <Text style={styles.button}>SUBMIT</Text>
      </TouchableOpacity>
      {/* {error && <Text>{error}</Text>} */}
      <ScrollView>

      {list.map((item,index)=>(
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
          <Text style={styles.todoList}>{item.task}</Text>

            <View style={{width:130,flexDirection: "row", justifyContent: "space-around", marginRight: 10, marginTop: 5}}>
              <TouchableOpacity onPress={()=>handlUpdate(index)}>
                <Text style={styles.editbtn}>UPDATE</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>handlDelete(index)}>
                <Text style={styles.dltbtn}>DELETE</Text>
              </TouchableOpacity>
            </View>
        
        </View>
        
      ))}
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "green",
    borderRadius: 5,
  },
  heading: {
    fontSize: 25,
    padding: 10,
    textAlign:"center",
  },
  button: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "green",
    textAlign: "center",
    color: "white",
  },
  editbtn: {
    fontSize: 10,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "green",
    textAlign: "center",
    color: "white",
  },
  dltbtn: {
    fontSize: 10,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "red",
    textAlign: "center",
    color: "white",
  },
  todoList: {
    width: 230,
    borderWidth:1,
    padding:10,
    margin:12,
    borderRadius: 5,
    borderColor: "green",
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});


const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});