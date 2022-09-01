import React from "react";
import { Button, View, StyleSheet } from "react-native";

export const TodoFilters = ({setFilter, activeFilterActive, completedFilterActive, allFilterActive}) => {

    function handleFilterAll() {
        setFilter('all');
    }

    function handleFilterActive() {
        setFilter('active');
    }

    function handleFilterComplete() {
        setFilter('completed');
    }


    return (
        <View style={styles.filter}>
            <Button
                title={'All'}
                allFilterActive={allFilterActive}
                onPress={handleFilterAll}>
            </Button>
            <Button
                title={'Active'}
                activeFilterActive={activeFilterActive}
                onPress={handleFilterActive}>
            </Button>
            <Button
                title={'Completed'}
                completedFilterActive={completedFilterActive}
                onPress={handleFilterComplete}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    filter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        paddingBottom: 20,
    },
})