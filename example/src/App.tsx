import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getPlatformAndVersion } from 'test-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    getPlatformAndVersion().then(setResult)
  }, []);

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
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
