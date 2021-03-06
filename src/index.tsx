import { EmitterSubscription, NativeEventEmitter, NativeModules, Platform } from 'react-native';

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

let simpleEventListener: EmitterSubscription

export function getPlatformAndVersion(): Promise<string> {
  return TestModule.getPlatformAndVersion();
}

export function dispatchSimpleEvent() {
  TestModule.dispatchSimpleEvent();
}

export function addSimpleEventListener(callback: (simpleEventResult: string) => void): void {
  const eventEmitter = new NativeEventEmitter(TestModule);
  simpleEventListener = eventEmitter.addListener('simple-event', (event) => {
    callback(event.info)
 });
};

export function removeSimpleEventListener(): void {
  simpleEventListener.remove()
};
