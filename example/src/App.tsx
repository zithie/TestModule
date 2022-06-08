import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { dispatchEventEverySecond, getCurrentTimeEvents, getPlatformAndVersion } from 'test-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [seconds, setSeconds] = React.useState<number>(0);

  React.useEffect(() => {
    getPlatformAndVersion().then(setResult)
    getCurrentTimeEvents(setSeconds)
    dispatchEventEverySecond()

  }, []);

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <Text>Seconds count is: {seconds}</Text>
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
