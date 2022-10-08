import React, {useState} from 'react';
import { Text, View, Switch, TextInput, Button, Alert, ScrollView, } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input'
import { BasicTheme, FancyTheme } from './Themes';

export default function App() {

  const genders = [
    {label: "Male", value: 'male'},
    {label: "Female", value: 'female'}
  ]

  const [weight,setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours,setHours] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [gender,setGender] = useState(genders[0].value);
  const [result,SetResult] = useState(0);
  const [isfancy, setFancy] = useState(false);
  const theme = isfancy ? FancyTheme : BasicTheme;
  
  function calculate() {
    const liters = bottles * 0.33;
    const grams = liters * 8 * 4.5;
    const burning = weight / 10;
    const gleft = grams - burning * hours;
    const res = gender === 'male' ? (gleft / (weight * 0.7)) : (gleft / (weight * 0.6));
    SetResult(res);

    if(weight == '') {
      Alert.alert('Enter weight')
    }
  }
  
  return (
    <View style={theme.container}>
      <ScrollView style={theme.ScrollView}>

        <Switch onChange={ () => setIsOn( prev => !prev) } onValueChange={()=>setFancy( prev => !prev)} value={isOn} 
        trackColor={{false: 'grey', true: 'black'}} style={theme.switch}></Switch>

        <Text style={theme.text}>Alcometer</Text>

        <Text style={theme.text}>Weight</Text>

        <TextInput onChangeText={ text => setWeight(text) } keyboardType={'number-pad'} style={theme.input}></TextInput>

        <Text style={theme.text}>Bottles</Text>

        <NumericInput type='Bottles' onChange={bottles => setBottles(bottles)} iconstyle={theme.nume}></NumericInput>

        <Text style={theme.text}>Hours</Text>

        <NumericInput type='Hours' onChange={hours => setHours(hours)}></NumericInput>

        <RadioForm radio_props={genders} initial={0} onPress={value => setGender(value)} style={theme.radio}></RadioForm>

        <Text style={theme.text}>
          {result.toFixed(2)}
        </Text>

        <Button title = 'CALCULATE' onPress={calculate} style={theme.button}></Button>

      </ScrollView>
    </View>
  );
}