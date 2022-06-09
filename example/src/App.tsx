import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { addSimpleEventListener, dispatchSimpleEvent, getPlatformAndVersion, removeSimpleEventListener } from 'test-module';

export default function App() {
  const [methodResult, setMethodResult] = React.useState<string | undefined>('');
  const [simpleEventResult, setSimpleEventResult] = React.useState<string>('no events received');

  const handlePress = () => {
    dispatchSimpleEvent()
  }

  React.useEffect(() => {
    getPlatformAndVersion().then(setMethodResult)
    addSimpleEventListener(setSimpleEventResult)

    return () => removeSimpleEventListener()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.labelText}>Result from method:</Text>
        <Text style={styles.valueText}>{methodResult}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.labelText}>Result from event:</Text>
        <Text style={styles.valueText}>{simpleEventResult}</Text>
      </View>
      <Button title="Dispatch simple-event" onPress={handlePress} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    marginBottom: 30
  },
  labelText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  valueText: {
    textAlign: 'center'
  }
});
