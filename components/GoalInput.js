import React, {useState} from 'react';
import { StyleSheet,  View, Button, TextInput, Modal  } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState();

    const goalInputHandeler = (enteredText) => {
        setEnteredGoal(enteredText);
      }
    
      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      }

    return(
        <Modal visible={props.visible} animationType="slide"> 
        <View style={styles.inputData}>
        <TextInput placeholder='Reach Goal'
          style={styles.textInput}
          onChangeText={goalInputHandeler}
          value={enteredGoal} />
          <View style={styles.cancel}>
              <View style={styles.button}>
        <Button title='Add' onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
        <Button title='Cancel' color='red' onPress={props.onCancel}/>
        </View>
        </View>
      </View>
      </Modal>
    )
};

const styles = StyleSheet.create({
    inputData: {
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
      },
      textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
      },
      cancel: {
         flexDirection:'row',
         justifyContent:'space-around',
         width:'60%'
      },
      button:{
          width:'40%',
      }
})

export default GoalInput;