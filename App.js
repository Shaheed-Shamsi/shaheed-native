import React from 'react';
import Entries from './src/components/Entries'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jounalEntries: [],
      newEntry: '',
      entryCount: 0
    }
  }

  feelingHandler = (event) => {
    this.setState({
      newEntry: event
    })
  }

  handleSubmit = (event) => {
    const nextEntry = {
      content: this.state.newEntry,
      key: this.state.entryCount + ''
    }
    this.setState(prevstate => {
      return {
        jounalEntries: [...prevstate.jounalEntries, nextEntry]
      }
    })
    this.setState(prevstate => {
      return {
        newEntry: '',
        entryCount: prevstate.entryCount + 1
      }
    })
  }

  handleDelete = (itemId) => {
    this.setState(prevstate => {
      return {
        jounalEntries: prevstate.jounalEntries.filter(entry => {
          return entry.key !== itemId
        })
      }
    })
  }

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps='always'>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.container}>
          <Text style={styles.title}>Daily Diary</Text>
            <ScrollView keyboardShouldPersistTaps='always'>
              <Entries style={styles.entryList} handleDelete={this.handleDelete} jounalEntries={this.state.jounalEntries}/>
            </ScrollView>
          <ScrollView keyboardShouldPersistTaps='always' style={styles.feelingView}>
            <TextInput
            style={styles.feelingInput}
            onChangeText={this.feelingHandler}
            value={this.state.newEntry}
            placeholder='What did you do today?'
            />
            <Button

            style={styles.feelingButton}
            title='Submit'
            onPress={this.handleSubmit}
            />
          </ScrollView>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    justifyContent: 'center'
  },
  feelingView: {
    width: '100%',
  },
  feelingInput: {
    width: '100%',
    padding: 30,
    textAlign: 'center'
  },
  feelingButton: {

  },
  entryTitle: {
    textAlign: 'center',
    padding: 10
  },
  entryList: {
    alignItems: 'center',
    textAlign: 'center',

  }
});
