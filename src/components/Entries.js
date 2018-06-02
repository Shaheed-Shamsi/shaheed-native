import React from 'react';
import { StyleSheet, Text, FlatList, TouchableHighlight, View } from 'react-native';

const Entries = (props) => {
  
  return (
    <FlatList
    keyboardShouldPersistTaps='always'
    data={props.jounalEntries}
    renderItem={(elem) => (
    <TouchableHighlight onPress={() => props.handleDelete(elem.item.key)}>
    <View style={styles.textWrapper}>
    <Text>{elem.item.content}</Text>
    </View>
    </TouchableHighlight>
    )}
    />
  )
}


const styles = StyleSheet.create({
  textWrapper: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10
    // backgroundColor: 'blue'
  }
})

export default Entries
