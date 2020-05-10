import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Todos } from './components/Todos';
import Bar from './components/Bar';
import { Header } from './components/Header';

export default function App() {

    const [todos, setTodos] = useState([])

    const addTodo = title => {
        if (title) {
            setTodos(prev => [{id: Date.now().toString(), title}, ...prev])
        }
    }

    return (
        <View style={styles.container}>
            <Header title='Todo'/>
            <View style={styles.block}>
                <Bar onSubmit={addTodo}/>
            </View>
            <ScrollView style={styles.scroll}>
                <Todos todos={todos} />
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
