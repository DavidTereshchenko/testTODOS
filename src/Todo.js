import React, {useState} from "react";
import {Button, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Todo = ({todo, onRemove, todos, setTodos, disable, onLongPress}) => {

    const onRemoveHandler = () => {
        onRemove(todo.id)
    }

    const [isSelected, setSelected] = useState(false)
    const [textEdit, setTextEdit] = useState(true)
    const [change, setChange] = useState('')

    const pressSave = () => {
        todo.title = change
        const newTodos = todos.map(element => element.id === todo.id ? todo : element)
        setTodos(newTodos)
        setTextEdit(!textEdit)
    }

    const pressHandler = () => {
        setTextEdit(!textEdit)
        setChange(change)
    }

    const onPressCheckBox = () => {
        const foundTodo = todos.find(e => e.id === todo.id)
        setTodos(foundTodo)
        setSelected(!isSelected)
    }

    if (textEdit) {
        return (
            <TouchableOpacity activeOpacity={0.5} onLongPress={onLongPress} disabled={disable}>
                <View style={styles.todo}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={isSelected}
                        fillColor="#3949AB"
                        text={todo.title}
                        iconStyle={{borderColor: "red"}}
                        innerIconStyle={{borderWidth: 2}}
                        onPress={onPressCheckBox}
                    />
                    <View style={styles.modalContainer}>
                        <Button title={'Delete'} onPress={onRemoveHandler}/>
                        <Button title={'Delete'} onPress={onRemoveHandler}/>
                        <Button title={'Edit'} onPress={pressHandler}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <View>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.todo}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setChange}
                            value={change}
                            placeholder={todo.title}
                            placeholderTextColor={'black'}
                        >
                        </TextInput>
                        <View style={styles.modalContainer}>
                            <Button title={'Save'} onPress={pressSave}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '70%',
        height: 40,
        borderRadius: 1,
        padding: 10
    },
    modalContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center"
    }
})
