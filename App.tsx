import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFontFamily } from './src/utils/fontFamily';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 48,
    fontFamily: getFontFamily('italic'),
  },
  subtitle: {
    fontSize: 48,
    fontFamily: getFontFamily('bold'),
  },
});

export default App;
