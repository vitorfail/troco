import './App.css';
import Nota2 from './images/2.png'
import Nota5 from './images/5.jpg'
import Nota10 from './images/10.jpg'
import Nota20 from './images/20.jpg'
import Nota50 from './images/50.jpg'
import Nota100 from './images/100.jpg'
import { useEffect, useState } from 'react';



function App() {
  const [ notas, setnotas] = useState([<>
          <img src={Nota2} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='2c' name='2' alt='2' className='nota' />
          <img src={Nota5} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='5c' name='5' alt='5' className='nota' />
          <img src={Nota10} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='10c' name='10' alt='10' className='nota'/>
          <img src={Nota20} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='20c' name='20' alt='20' className='nota'/>
          <img src={Nota50} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='50c' name='50' alt='50' className='nota'/>
          <img src={Nota100} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='100c' name='100' alt='100' className='nota'/>
  </>])
  const perguntas = [["A conto ficou por R$ 18,00 e o cliente deu um nota de R$ 50,00", 32], 
  ["O preço foi R$ 31,00 e deram uma nota de R$ 100,00", 69],
  ["O serviço saiu por R$ 7,00 e te entregam um nota de R$ 20,00", 13], 
  ["O serviço saiu por R$ 32,00 e te entregam duas nota de R$ 20,00", 8]]
  const [ pergunta_principal, setpergunta_principal] = useState('')
  const [ resposta, setresposta] = useState(0)
  const [troco, settroco] = useState(0.00)
  const [ display_troco, setdisplay_troco]= useState('troco')
  const [count2, setcount2] = useState(0)
  const [count5, setcount5] = useState(0)
  const [count10, setcount10] = useState(0)
  const [count20, setcount20] = useState(0)
  const [count50, setcount50] = useState(0)
  const [count100, setcount100] = useState(0)
  const [ popup_certo, setpopup_certo] = useState(false)
  const pos = 27
  function adicionar_nota(nota, nome){
    var lista_conta = {'2':count2, '5':count5, '10':count10, '20':count20, '50':count50, '100':count100}
    var lista_pos = {'2':1, '5':2, '10':3, '20':4, '50':5, '100':6}
    var lista_conta_definir = {'2':setcount2, '5':setcount5, '10':setcount10, '20':setcount20, '50':setcount50, '100':setcount100}
    var n = null
    var r = lista_conta[String(nota)]+String(nota)+'c'
    if(nome === '2') n= Nota2
    if(nome === '5') n= Nota5
    if(nome === '10') n= Nota10
    if(nome === '20') n= Nota20
    if(nome === '50') n= Nota50
    if(nome === '100') n= Nota100
    let element = <img src={n} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id={r} name={nome}  alt={nome} className='nota'/>
    setnotas([...notas, element]);
    if(lista_conta[String(nota)] === 0){
      let ele = document.getElementById(nota+'c')
      ele.style.top = pos+'%'
      ele.style.left = (pos*(lista_pos[String(nota)])/2)+'%'
    }
    else{
      let ele = document.getElementById((lista_conta[String(nota)]-1)+String(nota)+'c')
      ele.style.top = (pos+lista_conta[String(nota)]+1)+'%'
      ele.style.left = (pos*(lista_pos[String(nota)]/2))+'%' 
    }
    lista_conta_definir[String(nota)](lista_conta[String(nota)]+1)
    settroco(troco+parseInt(nota))
    if(troco+parseInt(nota) > resposta){
      setdisplay_troco('troco errado')
    }
    if(troco+parseInt(nota) === resposta){
      setdisplay_troco('troco certo')
      setpopup_certo(true)
    }
    console.log(troco)
  }
  useEffect(() =>{
    reacarregar()
  }, [])
  function reacarregar(){
    var r = perguntas[Math.floor(Math.random()*perguntas.length)]
    setpergunta_principal(r[0])
    setresposta(r[1])
    setpopup_certo(false)
    settroco(0.00)
    setdisplay_troco('troco')
    
  }
  function apagar_notas(){
    var r = perguntas[Math.floor(Math.random()*perguntas.length)]
    setpergunta_principal(r[0])
    setresposta(r[1])
    setpopup_certo(false)
    settroco(0.00)
    setdisplay_troco('troco')
    setnotas([<></>])
    setcount2(0)
    setcount5(0)
    setcount10(0)
    setcount20(0)
    setcount50(0)
    setcount100(0)
    setTimeout(() => {
      setnotas([<>
      <img src={Nota2} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='2c' name='2' alt='2' className='nota' />
      <img src={Nota5} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='5c' name='5' alt='5' className='nota' />
      <img src={Nota10} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='10c' name='10' alt='10' className='nota'/>
      <img src={Nota20} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='20c' name='20' alt='20' className='nota'/>
      <img src={Nota50} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='50c' name='50' alt='50' className='nota'/>
      <img src={Nota100} onClick={(e) => remover_nota(e.currentTarget.name, e.currentTarget.id)} id='100c' name='100' alt='100' className='nota'/>
    </>])

    }, 1000)
  }
  function remover_nota(nota, id){
    console.log(troco)
    var novo_troco = troco-parseInt(nota)
    if(novo_troco < resposta) setdisplay_troco('troco')
    settroco(novo_troco)

    //var element = document.getElementById(id)
    //element.remove()
  }
  return (
    <div className="App">
      <div className={popup_certo?'popup-certo show': 'popup-certo'}>
        <div className='modal'>
          <p>O troco foi correto!</p>
          <button onClick={() => apagar_notas()}>OK</button>
        </div>
      </div>
      <div className='pergunta'>
        <div className='questao'>
          <div className={display_troco}>R$ {troco}</div>
          <p>{pergunta_principal}</p>
        </div>
      </div>
      <div className='espaco_notas'>
      </div>
      <div className='cedulas'>
        <div>{notas}</div>
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
