import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Navbar,{Alt_Navbar} from './components/navbar';
import Govde from './components/body';
import Container from './components/container';
import Icerik from './components/icerik';

//USE CONTEXT ICIN OLUSTURULAN DEGERLER
// const tema={
//   dark:{
//     color:"white",
//     backgroundColor:"black"
//   } ,
//   light:{
//     color:"black",
//     backgroundColor:"white"
//   }
// };
// export const TemaVerisi = React.createContext();

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


  
  
  
  // USE CONTEXT KULLANIMI(COMPONENTLER ARASI STATE TASIMA)

  // const degers = "Berat Tatli";
  // const[degers,setDegers] = useState(tema.dark);
  // function degistir(){
  //   if(tema.dark===degers){
  //     setDegers(tema.light);
  //     console.log(degers);
  //   }
  //   else{
  //     setDegers(tema.dark);
  //     console.log(degers);
  //   } 
  // }

  // return(
  //   <div className='App'>
  //     <button onClick={degistir}>
  //       {tema.dark === degers ? "Açık" : "Koyu"}
  //     </button>
  //     <TemaVerisi.Provider value={degers}>
        
  //       <Icerik/>
  //     </TemaVerisi.Provider>
  //   </div>
  // );

  

  // UseEffect hook'u ile timer yapımı
  // const [timer,setTimer] = useState(5);

  // useEffect(()=>{

  //   if(timer!==0){
  //     const interval = setInterval(()=>{
  //       setTimer(timer-1)
  //     }, 1000);

  //     return()=>clearInterval(interval);
  //   }
  // },[timer])


  // return(
  //   <div className='App'>
  //     <div style ={{height:"250px", width:"250px", backgroundColor:"blue", borderRadius:"50%", color:"white", fontSize:"60px",margin:"10px auto", lineHeight:"250px"}}>
  //       {timer}
  //     </div>
  //   </div>
  // )


  const[renk,setRenk] = useState();

  const renkDegisimi = useRef(null);

  const degisim=()=>{
    document.body.style.backgroundColor = renkDegisimi.current.value;
    setRenk(()=>renkDegisimi.current.value)
  }
  return(

    <div className='App'>
      <p> Inputa ingilizce rengi gir</p>
      <input type='text' ref={renkDegisimi} onChange={degisim}/>
      <p>{renk}</p>
    </div>
  )

}


export default App;
