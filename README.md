# Expo Linking API Deep Link Handling Failure During App Initialization

This repository demonstrates a bug and its solution related to Expo's `Linking` API and deep link handling during app initialization.  The bug manifests as an unhandled promise rejection or silent failure when a deep link is used to launch the app before the app is fully initialized.

## Bug Description:

When the app launches from a deep link, the `Linking.getInitialURL()` promise sometimes rejects or fails silently if the necessary components or listeners aren't ready. This can lead to unexpected behavior and difficulty in debugging.

## Solution:

The solution involves using asynchronous operations and ensuring the app's state is properly initialized before attempting to handle deep links. This is typically done by wrapping the deep link handling logic within an `useEffect` hook with an empty dependency array, so it only runs once after the component mounts, or using `Linking.addEventListener` after the `App` component has fully rendered.

## How to reproduce:

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Try launching the app directly from a deep link that matches the expected URL scheme.
5. Observe the console for error messages or the lack of expected behavior. With the bug, the deep link might not redirect to the expected page, while the solution fixes this.
