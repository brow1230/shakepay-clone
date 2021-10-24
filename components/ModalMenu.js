import React, {useState, useCallback} from 'react';
import {StyleSheet,  Text, View, ScrollView, RefreshControl } from 'react-native';

export default function ModalMenu(props) {
    return (
        <View style={styles.parentView}>
            <View>
                <Text>add some funds yo</Text>
                <Text>add some funds yo</Text>
                <Text>add some funds yo</Text>
                <Text>add some funds yo</Text>
            </View>
            <View>
                <Text>Cancel</Text>
            </View>
        </View>
    )
}
let styles = StyleSheet.create({
    parentView:{
        backgroundColor: 'transparent'
    }
})