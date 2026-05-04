
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import axios from "axios";
import { useState } from 'react';
import { Button } from 'react-native';

export default function HomeScreen() {
  const [data, setData] = useState({} as any);
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <ThemedText type="title">Home Screen 11</ThemedText> */}
      <ThemedText type="subtitle">Welcome to the home screen!</ThemedText>
      <ThemedText type="subtitle">Title {data.title}</ThemedText>
      <Button title="Click me" onPress={axiostest} />
    </ThemedView>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12',
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <Link href="/modal">
    //       <Link.Trigger>
    //         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //       </Link.Trigger>
    //       <Link.Preview />
    //       <Link.Menu>
    //         <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
    //         <Link.MenuAction
    //           title="Share"
    //           icon="square.and.arrow.up"
    //           onPress={() => alert('Share pressed')}
    //         />
    //         <Link.Menu title="More" icon="ellipsis">
    //           <Link.MenuAction
    //             title="Delete"
    //             icon="trash"
    //             destructive
    //             onPress={() => alert('Delete pressed')}
    //           />
    //         </Link.Menu>
    //       </Link.Menu>
    //     </Link>

    //     <ThemedText>
    //       {`Tap the Explore tab to learn more about what's included in this starter app.`}
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       {`When you're ready, run `}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
  function axiostest() {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response: { data: any; }) => {
      console.log(response.data);
      setData(response.data);
    })
    .catch((error: any) => {
      console.error('Error fetching data:', error);
    });
  }
}

