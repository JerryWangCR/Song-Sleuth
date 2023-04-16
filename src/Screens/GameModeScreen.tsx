import { StatusBar } from 'expo-status-bar';
import { Alert, Button,StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, TouchableHighlight} from 'react-native';
import * as React from 'react';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.view} >
          <Pressable style={styles.button} 
          onPress={() => Alert.alert('Pressed Multiple Choice Game Mode')}>
            <Text style={styles.text}> Multiple Choice Game Mode</Text>
          </Pressable>

          <Pressable style={styles.button} 
          onPress={() => Alert.alert('Pressed Fill in the blank Game Mode')}>
            <Text style={styles.text}> Fill In The Blank Game Mode</Text>
          </Pressable>

          <Pressable style={styles.button} 
          onPress={() => Alert.alert('Pressed Other Game Mode')}>
            <Text style={styles.text}> Other Game Mode</Text>
          </Pressable>

          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312D2D',
  },
  view: {
    // flexGrow : 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color:'#FFFFFF',
  },
  button: {
    backgroundColor: '#1B1B1F',
    width: 286,
    height: 295,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 50,
  }
});