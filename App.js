import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { Todos } from './components/Todos';
import Bar from './components/Bar';
import { Header } from './components/Header';
import { Edit } from './components/Edit';

async function loadApp() {
    await Font.loadAsync({
        'vinchand': require('./assets/fonts/VINCHAND.ttf'),
        'coca-cola': require('./assets/fonts/LOKICOLA.ttf'),
        'Jurassic Park': require('./assets/fonts/JurassicPark.ttf')
    })
}

export default function App() {

    const [app_loaded, setAppLoaded] = useState(false);
    const [todos, setTodos] = useState([]);
    const [lastTap, setLastTap] = useState(null);
    const [edit, setEdit] = useState(false);
    const [selected, setSelected] = useState('');

    if (!app_loaded) {
        return <AppLoading startAsync={loadApp}
                           onError={err => console.log(err)}
                           onFinish={() => setAppLoaded(true)}/>
    }

    const addTodo = title => {
        if (title) {
            setTodos(prev => [{id: Date.now().toString(), done: false, important: false, title}, ...prev])
        }
    }

    const removeTodo = id => {
        
        const todo = todos.find(todo => todo.id === id);
        setSelected(todo);

        Alert.alert(
            null,
            'Пожалуйста, выберите действие!',
            [
                {text: !todo.done ? 'Редактировать' : 'Отмена', onPress: !todo.done ? () => setEdit(true) : null},
                {text: 'Удалить', onPress: () => setTodos(prev => prev.filter(todo => todo.id !== id))}
            ],
            {cancelable: false}
        )
    }

    const updateTodo = id => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;

        lastTap && now - lastTap < DOUBLE_PRESS_DELAY ?
            setTodos(prev => prev.map(todo => todo.id === id ?
                {...todo, done: true} : todo)) : (setLastTap(now),
                    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, important: !todo.important} : todo)
            )
        )
    }

    const handleSave = (id, title) => {
        setTodos(prev => prev.map(todo => todo.id === id ? { id, title } : todo))
        setEdit(false)
    }

    return (
        <View style={styles.container}>
            <Header title='Todo App'/>
            <View style={styles.block}>
                <Bar onSubmit={addTodo}/>
            </View>
            <ScrollView style={styles.scroll}>
                <Todos todos={todos}
                       onRemove={removeTodo}
                       onUpdate={updateTodo}/>
            </ScrollView>
            <Edit visible={edit}
                  {...selected}
                  handleCancel={() => setEdit(false)}
                  handleSave={handleSave}/>
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
