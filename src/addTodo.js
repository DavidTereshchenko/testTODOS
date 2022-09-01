import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('The name Todo cannot be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder={'Enter task name...'}
                autoCorrect={false}
            />
            <Button title={'Add Task'} onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        backgroundColor: '#eee',
        borderStyle: "solid",
        borderWidth: 1,
        width: '70%',
        height: 40,
        borderRadius: 5,
        padding: 10
    },
})