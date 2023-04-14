import './App.css';
import Nota2 from './images/2.png'
import Nota5 from './images/5.jpg'
import Nota10 from './images/10.jpg'
import Nota20 from './images/20.jpg'
import Nota50 from './images/50.jpg'
import Nota100 from './images/100.jpg'
import { useState } from 'react';



function App() {
  const [ notas, setnotas] = useState([])
  const [pos1, setpos1] = useState(['10%', '10%'])
  const [pos2, setpos2] = useState(['10%', '20%'])
  const [pos3, setpos3] = useState(['10%', '30%'])
  const [pos4, setpos4] = useState(['10%', '40%'])
  function adicionar_nota(nota){

  }
  return (
    <div className="App">
      <div className='pergunta'></div>
      <div className='espaco_notas'>
      </div>
      <div className='cedulas'>
        {notas}
        <img src={Nota2}  name='2'  alt='2' className='nota'/>
        <img src={Nota5} name='5'  alt='5'  className='nota'/>
        <img src={Nota10}  name='10' alt='10'  className='nota'/>
        <img src={Nota20} name='20'  alt='20'  className='nota'/>
        <img src={Nota50}  name='50' alt='50'  className='nota'/>
        <img src={Nota100} name='100'  alt='100'  className='nota'/>
      </div>
    </div>
  );
}

export default App;
