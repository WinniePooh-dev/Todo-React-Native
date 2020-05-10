import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Todos } from './components/Todos';
import Bar from './components/Bar';
import { Header } from './components/Header';

export default function App() {

    const [todos, setTodos] = useState([])

    const addTodo = title => {
        if (title) {
            setTodos(prev => [{id: Date.now().toString(), done: false, important: false, title}, ...prev])
        }
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const handleTodoDone = id => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: true} : todo))
    }

    const handleTodoImportant = id => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, important: !todo.important} : todo))
    }

    return (
        <View style={styles.container}>
            <Header title='Todo'/>
            <View style={styles.block}>
                <Bar onSubmit={addTodo}/>
            </View>
            <ScrollView style={styles.scroll}>
                <Todos todos={todos}
                       onRemove={removeTodo}
                       handleTodoDone={handleTodoDone}
                       handleTodoImportant={handleTodoImportant}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'ivory',
      justifyContent: 'center',
    },
    block: {
        marginTop: 10,
        alignItems: 'center',
    },
    scroll: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
});
