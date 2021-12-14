import { useState,useEffect } from 'react';
import './Cities.css';
import axios from 'axios';
import $ from 'jquery';


function Cities() {
    const [country, setCountry] = useState('');
const [name, setName] = useState('');
const [iso2, setIso2] = useState('');
const [population, setPopulation] = useState('');
const [region, setRegion] = useState('');
const [capital, setCapital] = useState('');
const [surfaceArea, setSurfaceArea] = useState('');
const [currencyName, setCurrencyName] = useState('');


const [isTrue, setIseTrue] = useState('none');



useEffect(() => {
 // $('button').on('click',function(){
//    $('.child').show('slow')
 // })
}, [])

const getData =(country)=>{
axios({
  method :'GET',
  url:`https://api.api-ninjas.com/v1/country?name=${country}`,
  headers: { 'X-Api-Key': '5EufIFcBjCHJLulV1V2HHA==L0QRbB3jgw95DjFA'},
  contentType: 'application/json',
}).then((response)=>{
  console.log(response.data[0])
  //name
  setName(response.data[0].name)
  //capital
  setCapital(response.data[0].capital)
  //iso2
  setIso2(response.data[0].iso2)
  //population
  setPopulation(response.data[0].population)
  //region
  setRegion(response.data[0].region)
      //currency full name
      setCurrencyName(response.data[0].currency.name)
  //surfaceArea 
  setSurfaceArea(response.data[0].surface_area)


})
  .then((error)=>console.error(error))
}

    return (
          <div>
              <img src='https://wallpapercave.com/wp/7INjqUa.jpg' />
       <div className='controls'>
      <input placeholder='enter country!' onChange={(e)=>{setCountry(e.target.value.toLowerCase())}} />
      <button onClick={()=>{getData(country); setIseTrue(isTrue.replace('none','block'))}}>get</button>
      </div>
      <div className='child'  style={{display:isTrue}}>
      <br/>
     <p>name: <span>{name}({iso2})</span></p>
    
    <p>capital: <span>{capital}</span></p>
    
      <p>population:  <span>{population}</span></p>
    
      <p>region: <span>{region}</span></p>
     
    <p>currency:  <span>{currencyName}</span></p>
    
   <p>surface Area: <span>{surfaceArea}</span></p> 
    </div>
    </div>
       
    )
}

export default Cities

