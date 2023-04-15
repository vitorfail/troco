import './App.css';
import Nota2 from './images/2.png'
import Nota5 from './images/5.jpg'
import Nota10 from './images/10.jpg'
import Nota20 from './images/20.jpg'
import Nota50 from './images/50.jpg'
import Nota100 from './images/100.jpg'
import { useState } from 'react';



function App() {
  const [ notas, setnotas] = useState([<>
          <img src={Nota2} onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} id='2c' name='2' alt='2' className='nota' />
          <img src={Nota5} onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} id='5c' name='5' alt='5' className='nota' />
          <img src={Nota10} onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} id='10c' name='10' alt='10' className='nota'/>
          <img src={Nota20} onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} id='20c' name='20' alt='20' className='nota'/>
          <img src={Nota50} onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} id='50c' name='50' alt='50' className='nota'/>
          <img src={Nota100} onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} id='100c' name='100' alt='100' className='nota'/>
  </>])

  const [pos1, setpos1] = useState(['10%', '10%'])
  const [pos2, setpos2] = useState(['10%', '20%'])
  const [pos3, setpos3] = useState(['10%', '30%'])
  const [pos4, setpos4] = useState(['10%', '40%'])
  function adicionar_nota(nota, nome){
    var n = null
    var r = Math.random()+String(nota)+'c'
    console.log(notas.length)
    if(nome === '2') n= Nota2
    if(nome === '5') n= Nota5
    if(nome === '10') n= Nota10
    if(nome === '20') n= Nota20
    if(nome === '50') n= Nota50
    if(nome === '100') n= Nota100
    let element = <img src={n}   onClick={(e) => adicionar_nota(e.currentTarget.id)}  id={r} name={nome}  alt={nome} className='nota'/>
    setnotas([...notas, element]);
    let ele = document.getElementById(r)
    ele.style.top = '5%'
    ele.style.left = '5%' 
  }
  return (
    <div className="App">
      <div className='pergunta'></div>
      <div className='espaco_notas'>
      </div>
      <div className='cedulas'>
        {notas}
        <img src={Nota2}   onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)}  style={{zIndex:9}} id='2' name='2'  alt='2' className='nota'/>
        <img src={Nota5}   onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)}  style={{zIndex:9}} id='5' name='5'  alt='5'  className='nota'/>
        <img src={Nota10}   onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} style={{zIndex:9}} id='10' name='10' alt='10'  className='nota'/>
        <img src={Nota20}  onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} style={{zIndex:9}} id='20' name='20'  alt='20'  className='nota'/>
        <img src={Nota50}  onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} style={{zIndex:9}} id='50' name='50' alt='50'  className='nota'/>
        <img src={Nota100} onClick={(e) => adicionar_nota(e.currentTarget.id, e.currentTarget.name)} style={{zIndex:9}} id='100' name='100'  alt='100'  className='nota'/>
      </div>
    </div>
  );
}
export default App;
