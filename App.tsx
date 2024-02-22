import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import Home from './src/views/Home/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingTop: Platform.OS === "android" ? 50 : 0}}>
        <Home />
       
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)"
  },
});
