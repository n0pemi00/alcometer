import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState();
  const [result, setResult] = useState(0);

  function Calculate(e) {
   e.preventDefault();
   let litres = bottles * 0.33;
   let grams = litres * 8 * 4.5;

   let burning = weight / 10;
   let gramsleft = grams - (burning * time)

   if (gender === 'male') {

      let left =  gramsleft / (weight * 0.7)
      setResult(Math.max(0,left));
    }
    else {
      let left = gramsleft / (weight * 0.6)
      setResult(Math.max(0,left));
    }
  }
  return (
    <form onSubmit={Calculate}>
      <h1>Alcometer</h1>
      <div>
        <label>weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>bottles</label>
        <select value={bottles} onChange={e => setBottles(e.target.value)} >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label>time</label>
        <select type="number" value={time} onChange={e => setTime(e.target.value)} >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)}/>
        <label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
        <label>Female</label>
      </div>
      <div>
        <br></br>
        <output>{result.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
  );
}
export default App;
