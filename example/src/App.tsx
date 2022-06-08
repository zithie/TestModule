import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { dispatchSimpleEvent, getPlatformAndVersion, getSimpleEvents } from 'test-module';

export default function App() {
  const [methodResult, setMethodResult] = React.useState<string | undefined>('');
  const [simpleEventResult, setSimpleEventResult] = React.useState<string>('');

  React.useEffect(() => {
    getPlatformAndVersion().then(setMethodResult)
    getSimpleEvents(setSimpleEventResult)
    dispatchSimpleEvent()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result from method: {methodResult}</Text>
      <Text>Result from event: {simpleEventResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
