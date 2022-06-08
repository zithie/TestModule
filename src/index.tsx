import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'test-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const TestModule = NativeModules.TestModule
  ? NativeModules.TestModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return TestModule.multiply(a, b);
}

export function getPlatformAndVersion(): Promise<number> {
  return TestModule.getPlatformAndVersion();
}

export function dispatchEventEverySecond() {
  TestModule.dispatchEventEverySecond();
}

export function getCurrentTimeEvents(callback: (time: number) => void): void {
  const clockEvents = new NativeEventEmitter(NativeModules.Clock);
  clockEvents.addListener('onTimeUpdated', (time: {count: number}) => {
    callback(time.count);
  });
};
