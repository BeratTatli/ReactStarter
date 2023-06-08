import React, { useState } from 'react'
import './App.css';
import Navbar,{Alt_Navbar} from './components/navbar';
import Govde from './components/body';
import Container from './components/container';
import Icerik from './components/icerik';

const tema={
  dark:{
    color:"white",
    backgroundColor:"black"
  } ,
  light:{
    color:"black",
    backgroundColor:"white"
  }
};
export const TemaVerisi = React.createContext();

function App() {

  //STATE

  // const [deger,setDeger] = useState(0);

  // function Azalt(){
  //   setDeger(deger-1)
  // }

  // const Azalt =()=>{setDeger(deger-1231)}

  // return (
  //   <div className="App">
  //   <p><button onClick={()=>{setDeger(deger+1232)}}>Arttır</button></p>
  //   <p>{deger}</p>
  //   <p><button onClick={Azalt}>Azalt</button></p>
        
  //   </div>
  // );

  //PROPS

  // const [baslik,setBaslik] = useState("React Ögreniyorum");
  // const numara = 1923;
  // return(
  //   <div className='App'>
  //     <Container title={baslik} number={numara}/>
  //     <button onClick={()=>{setBaslik("Degistirdim")}}>Degistir</button>
  //   </div>
  // )


  
  
  
  //USE CONTEXT KULLANIMI(COMPONENTLER ARASI STATE TASIMA)

  const[degers,setDegers] = useState(tema.dark);
  // const degers = "Berat Tatli";
  function degistir(){
    if(tema.dark===degers){
      setDegers(tema.light);
      console.log(degers);
    }
    else{
      setDegers(tema.dark);
      console.log(degers);
    } 
  }

  return(
    <div className='App'>
      <button onClick={degistir}>
        {tema.dark === degers ? "Açık" : "Koyu"}
      </button>
      <TemaVerisi.Provider value={degers}>
        
        <Icerik/>
      </TemaVerisi.Provider>
    </div>
  );
}


export default App;
