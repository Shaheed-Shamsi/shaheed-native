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
        entryCount: this.state.entryCount++
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
        <View style={styles.container}>
          <Text style={styles.title}>Daily Diary</Text>
          {
            (this.state.jounalEntries.length) ? <View><Text>Entries</Text><Entries handleDelete={this.handleDelete} jounalEntries={this.state.jounalEntries}/></View> : <Text style={styles.noText}>No entries to view</Text>
          }          
          <View style={styles.feelingView}>
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
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
  },
  feelingView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  feelingInput: {
    width: '100%',
    padding: 30,
    textAlign: 'center'
  },
  feelingButton: {

  },
  noText: {
    padding: 10
  }
});
