```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
        // Handle the deep link here
        console.log('Initial URL:', url);
      }
    };
    handleUrl();
  }, []);
  
  useEffect(() => {
    const subscription = Linking.addEventListener('url', ({ url }) => {
        console.log('url', url);
        // Handle the deep link here
    });
    return () => subscription.remove();
}, []);

  // ... rest of your app
  return (
    <div>Deep Link: {initialUrl ? initialUrl : 'None'}</div>
  );
}

export default App;
```