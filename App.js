import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jounalEntries: []
      feelingField: ''
    }
  }

  feelingHandler = (event) => {
    this.setState({
      feelingField: event
    })
  }

  handleSubmit = (event) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.feelingView}>
          <TextInput
          style={styles.feelingInput}
          onChangeText={this.feelingHandler}
          value={this.state.feelingField}
          placeholder='How are you feeling today?'
          />
          <Button
          style={styles.feelingButton}
          title='add'
          onPress={this.handleSubmit}
          />
        </View>
      </View>
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
  feelingView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  feelingInput: {
    width: '80%'
  },
  feelingButton: {
    width: '20%'
  }
});
