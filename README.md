# Test Module

This Test Module demonstrates communication between React Native & native Android or iOS code.

**Tested with the following setup:**
* macOS Monterey version 12.4
* Xcode 13.4.1 (iPhone 11 emulator)
* Android Studio Chipmunk | 2021.2.1 Patch 1 (Pixel 5 API 30 emulator)

## Setting up the development environment

### Prerequisites

* Node.js
* yarn
* cocoapods
* Xcode
* Android Studio + at least one emulator configured

### Getting started

Run the following commands in the project root.

**Install dependencies:**
```sh
yarn
```

**Run the example project with Android emulator:**
```sh
yarn example android
```

**Run the example project with iOS emulator:**
```sh
yarn example ios
```

## Usage

Get platform and version:

```js
import { getPlatformAndVersion } from "test-module";

// ...

const result = await getPlatformAndVersion()
```

Add event listener for simple-event:

```js
import { addSimpleEventListener } from "test-module";

// ...

addSimpleEventListener()
```

Dispatch simple-event:

```js
import { dispatchSimpleEvent } from "test-module";

// ...

dispatchSimpleEvent()
```

Remove event listener for simple-event:

```js
import { removeSimpleEventListener } from "test-module";

// ...

removeSimpleEventListener()
```

## License

MIT
