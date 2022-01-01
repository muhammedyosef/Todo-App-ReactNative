import Checkbox from "expo-checkbox"
import React, { useState } from "react"
import { View,Text,FlatList }  from"react-native"
import { todoListStyles } from "../../style"


const TodoList=({todos,onTodoList})=>{
const [list,setList]=useState(todos)
console.log("todolist",list); 
const handleChecked=(id)=>{
    // console.log(index);
    if(id>-1){
        todos.splice(id,1);
     setList(...list,todos)
 
     }
     onTodoList(list);
    

}



    return (   <FlatList
        style={{ height: "100%" }}
        data={todos}
        // keyExtractor={(item,index)}
        renderItem={({ item,index }) => {
          return (
            <View style={todoListStyles.item}>
              <Text> {item.title}</Text>
              <Checkbox value={item.done}  onValueChange={()=>handleChecked(index)}/>
            </View>
          );
        }}
        ListHeaderComponent={() => <Text style={todoListStyles.header}>My todos</Text>}
        ListFooterComponent={() => <Text style = {{...todoListStyles.header,fontSize:18}}>End of Todos</Text>}
        ListEmptyComponent={() => <Text>no todos today </Text>}
        ItemSeparatorComponent={() => <View style={todoListStyles.seperator}></View>}
       
      />)
}

export default TodoList;