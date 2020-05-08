import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [number , setNumber] = useState(0)
  
  const decrement = () => {
    if(number == 0){
      alert('NUmber cannot be smaller than 0')
    } 
    else{
      setNumber(number-1)
    }
  }

  return (
    <View style = {styles.container}>
      <Text>Exercise: Counter App</Text>
      <Text>{number}</Text>
      <Button
      title = 'Increment'
      color = 'green'
      onPress = {() => setNumber(number+1)}
      />
      <Button
      title = 'Decrement'
      color = 'red'
      onPress = {decrement}
      />
      <Button
      title = 'Reset'
      onPress = {() => setNumber(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
