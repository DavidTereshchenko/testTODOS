import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import React, {useState, useEffect} from "react";
import {AddTodo} from "./src/addTodo";
import {Todo} from "./src/Todo";
import DraggableFlatList from "react-native-draggable-flatlist";
import {TodoFilters} from "./src/TodoFilters";


export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [allFilterActive, setAllFilterActive] = useState(true);
  const [activeFilterActive, setActiveFilterActive] = useState(false);
  const [completedFilterActive, setCompletedFilterActive] = useState(false);

  const addTodo = (title) => {
    setTodos(prev => [...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const countRemaining = ()=> {
    const count = todos.filter(todo => !todo.complete);

    if (count.length === 1) {
      return `1 item left`;
    } else {
      return `${count.length} items left`;
    }
  }

  useEffect(() => {
    filterList();
  }, [todos, filter])

  const filterList = () => {
    console.log(11111, todos)
    if (filter === 'all') {
      setFilteredTodos(todos)
      setAllFilterActive(true)
      setActiveFilterActive(false)
      setCompletedFilterActive(false)
    } else  if (filter === 'active') {
      const activeTodos = todos.filter(todo => !todo.complete)
      console.log('activeTodos',todos)
      setFilteredTodos(activeTodos)
      setAllFilterActive(false)
      setActiveFilterActive(true)
      setCompletedFilterActive(false)
    } else if (filter === 'completed') {
      const completedTodos = todos.filter(todo => todo.complete)
      console.log('completedTodos',todos)
      setFilteredTodos(completedTodos)
      setCompletedFilterActive(true)
      setActiveFilterActive(false)
      setAllFilterActive(false)
    }
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
      <View>
        <Navbar title='Todo App!'/>
        <View style={styles.container}>
          <TodoFilters
              setFilter={setFilter}
              allFilterActive={allFilterActive}
              activeFilterActive={activeFilterActive}
              completedFilterActive={completedFilterActive}
          />
          <AddTodo onSubmit={addTodo}/>
          <DraggableFlatList
              keyExtractor={(item => item.id.toString())}
              data={todos}
              onDragEnd={({ data }) => setTodos(data)}
              renderItem={({item, drag, isActive}) =>
                  <Todo
                      onLongPress={drag}
                      disable={isActive}
                      onRemove={removeTodo}
                      todo={item}
                      todos={filteredTodos}
                      setTodos={setTodos}
                  />}
          />
          <Text style={styles.count}>{countRemaining()}</Text>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  count: {
    justifyContent: "flex-end",
    alignItems:"center",
    fontSize: 20,
    color: '#000'
  },
})
