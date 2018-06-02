import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, ScrollView, View } from 'react-native';

const Entries = (props) => {
  if (!props.jounalEntries.length) {
    return <Text style={styles.noText}>No entries to view</Text>
  }
  return (
    <ScrollView keyboardShouldPersistTaps='always'>
    <Text style={styles.entryTitle}>Entries</Text>
    <FlatList
    keyboardShouldPersistTaps='always'
    style={styles.entryFlatlist}
    data={props.jounalEntries}
    renderItem={(elem) => (
    <TouchableOpacity keyboardShouldPersistTaps='always' style={styles.touchable} onPress={() => props.handleDelete(elem.item.key)}>
      <ScrollView keyboardShouldPersistTaps='always' style={styles.textWrapper}>
        <Text style={styles.eachText}>{elem.item.content}</Text>
      </ScrollView>
    </TouchableOpacity>
    )}
    />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  textWrapper: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 15,
    width: 300,
  },
  eachText: {
    textAlign: 'center',
    padding: 10
  },
  touchable: {
    padding: 10,
  },
  noText: {
    padding: 10,
    textAlign: 'center'
  },
  entryTitle: {
    textAlign: 'center',
    padding: 10
  },
  entryFlatlist: {
    width: '100%'
  }
})

export default Entries
