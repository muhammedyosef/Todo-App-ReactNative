import React, { useState } from "react";
import { View, Text, TextInput, LayoutAnimation, TouchableOpacity,NativeModules} from "react-native";
import { addTodoStyles } from "../../style";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const AddTodo = ({onTodoAdd}) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [focusToggle, setFocusToggle] = useState(false);
  const handleAddTodoPress = ()=>{
    const todo = {
        title:todoTitle,
        done:false
    }
    onTodoAdd(todo)
    setTodoTitle("")
    console.log('child',todo)
}

  return (
    <View style={addTodoStyles.container}>
      <TextInput
        value={todoTitle}
        onChangeText={(text) => {
          setTodoTitle(text);
        }}
        onFocus={() => {
          LayoutAnimation.easeInEaseOut();
          setFocusToggle(true)
        }}
        onBlur={() => {
            LayoutAnimation.easeInEaseOut()
          setFocusToggle(false);
        }}
        placeholder="Enter your Task"
        style={{
            ...addTodoStyles.todoInput,
            ...(focusToggle?addTodoStyles.todoInputFocused:{}),
        }}
      />
      <TouchableOpacity style={addTodoStyles.todoAddBtn}
      onPress={handleAddTodoPress}
      >

<Text style={addTodoStyles.todoAddBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
