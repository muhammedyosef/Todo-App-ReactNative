import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  Text, View } from 'react-native';
import AddTodo from './src/components/add-todo';
import { AppStyles } from './style';
import TodoList from './src/components/todo-list';
export default function App() {
  const [todos,setTodos] = useState([])
  const [todoDone,setTodoDone]=useState([])
  const handleAddTodo = (todo)=>{
    console.log('parent',todo)
    setTodos([todo,...todos])
  }
  const handleTodoList=(todo1)=>{
    setTodoDone([...todoDone,todo1])
    // console.log(todoDone);
  }
  return (
    <View style={{height:"100%"}}>
      <StatusBar hidden />
      <Text style={AppStyles.header}>My Todos!! you have finished {todoDone.length} !</Text>
      <AddTodo onTodoAdd = {handleAddTodo}/>
      <TodoList  todos={todos} onTodoList={handleTodoList}/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
