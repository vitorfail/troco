import './App.css';
import Nota2 from './images/2.png'
import Nota5 from './images/5.jpg'
import Nota10 from './images/10.jpg'
import Nota20 from './images/20.jpg'
import Nota50 from './images/50.jpg'
import Nota100 from './images/100.jpg'
import { useEffect, useState } from 'react';
import Certo from './images/certo.png'
import Errado from './images/errado.png'
import Vermelho from './Vermelho/Vermelho';
import Verde from './Verde/Verde';
import Loading from './Loading/Loading';



function App() {
  const [ notas, setnotas] = useState([<>
          <img src={Nota2}  key={1} onClick={() => remover_nota('2', '2c')} id='2c' name='2' alt='2' className='nota' />
          <img src={Nota5}  key={2} onClick={() => remover_nota('5', '5c')} id='5c' name='5' alt='5' className='nota' />
          <img src={Nota10} key={3}  onClick={() => remover_nota('10', '10c')} id='10c' name='10' alt='10' className='nota'/>
          <img src={Nota20} key={4}  onClick={() => remover_nota('20', '20c')} id='20c' name='20' alt='20' className='nota'/>
          <img src={Nota50} key={5}  onClick={() => remover_nota('50', '50c')} id='50c' name='50' alt='50' className='nota'/>
          <img src={Nota100} key={6}  onClick={() => remover_nota('100', '100c')} id='100c' name='100' alt='100' className='nota'/>
  </>])
  const perguntas = [
    [<p>A conto ficou por <Vermelho>R$ 18,00</Vermelho> e o cliente deu <Verde>1</Verde> de <Verde>R$ 50,00</Verde></p>, 32], 
    [<p>O preço foi <Vermelho>R$ 31,00</Vermelho> e deram <Verde>1</Verde> nota de <Verde>R$ 100,00</Verde></p>, 69],
    [<p>O serviço saiu por <Vermelho>R$ 7,00</Vermelho> e te entregam <Verde>1</Verde> nota de <Verde>R$ 20,00</Verde></p>, 13], 
    [<p>O serviço saiu por <Vermelho>R$ 32,00</Vermelho> e te entregam <Verde>2</Verde> nota de <Verde>R$ 20,00</Verde></p>, 8],
    [<p>A pizza foi <Vermelho>R$ 49,00</Vermelho> e te entregam <Verde>4</Verde> notas de <Verde>R$ 20,00</Verde></p>, 31],
    [<p>O doce foi <Vermelho>R$ 23,00</Vermelho> e te entregam <Verde>1</Verde> de <Verde>R$ 50,00</Verde></p>, 27],
    [<p>A troca saiu por <Vermelho>R$ 148,00</Vermelho> e te entregam <Verde>2</Verde> notas <Verde>R$ 100,00</Verde></p>, 52],
    [<p>A macaneta saiu por <Vermelho>R$ 19,00</Vermelho> e te entregam <Verde>2</Verde> notas <Verde>R$ 20,00</Verde></p>, 11],
    [<p>O pendrive ficou por <Vermelho>R$ 73,00</Vermelho> e te entregam <Verde>2</Verde> notas <Verde>R$ 100,00</Verde></p>, 27],
    [<p>O presente foi <Vermelho>R$ 37,00</Vermelho> e te entregam <Verde>1</Verde> nota de <Verde>R$ 50,00</Verde></p>, 13],
    [<p>O concerto foi <Vermelho>R$ 213,00</Vermelho> e te entregam <Verde>3</Verde> notas de <Verde>R$ 100,00</Verde></p>, 97],
    [<p>Ao encher o tanque do carro  o valor ficou por <Vermelho>R$ 15,00</Vermelho> e te entregam <Verde>1</Verde> nota de <Verde>R$ 50,00</Verde></p>, 35],
    [<p>Depois de formatar o celular o celular o concerto saiu por <Vermelho>R$ 41,00</Vermelho> e te entregam <Verde>3</Verde> notas de <Verde>R$ 20,00</Verde></p>, 19],
    [<p>As compras fecharam em <Vermelho>R$ 54,00</Vermelho> e o cliente te entregam <Verde>2</Verde> notas de <Verde>R$ 50,00</Verde></p>, 46],
    [<p>Maria comprou uma pizza média por <Vermelho>R$ 21,00</Vermelho> e ela entrega <Verde>3</Verde> notas de <Verde>R$ 10,00</Verde> passe o troco</p>, 9],
    [<p>Roberto Carlos foi comprar uma chuteira por <Vermelho>R$ 117,00</Vermelho> e te passou <Verde>2</Verde> notas de <Verde>R$ 200,00</Verde>, passe o troco</p>, 83],
    [<p>Bolsonaro comprou um pacote de viagra por <Vermelho>R$ 31,00</Vermelho> e te passou <Verde>1</Verde> nota de <Verde>R$ 50,00</Verde>, passe o troco</p>, 19],
    [<p>Asheley esta com uma dor horrível na perna e comprou muitos inflamatórios que sairam, o todo por <Vermelho>R$ 42,00</Vermelho> e ela te passou <Verde>1</Verde> nota de <Verde>R$ 100,00</Verde>, passe o troco</p>, 58]
  ]
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
  const [popup_errado, setpopup_errado] = useState(false)
  const [popup_certo, setpopup_certo] = useState(false)
  const [popup_inicio, setpopup_inicio] = useState(false)
  const [popup_resultado, setpopup_resultado] = useState(false)
  const [animation, setanimation] = useState(false)
  const [inicio, setinicio] = useState(false)
  const pos = 27
  const [time, setTime] = useState(12000);
  const [isRunning, setIsRunning] = useState(false);
  const [contagem_de_acertos, setcontagem_de_acertos] = useState(0)
  const [rank,setrank] = useState('')
  const [cor_rank, setcor_rank] = useState(false)
  const [loading, setloading] = useState(true)
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
    let element = <img src={n} onClick={() => remover_nota(nome, r)} id={r} name={nome}  alt={nome} className='nota'/>
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
      setIsRunning(false)
      var sub = time-2000
      if(sub <= 0) setTime(0)
      if(sub > 0) setTime(sub)
      setdisplay_troco('troco errado')
      setpopup_errado(true)
    }
    if(troco+parseInt(nota) === resposta){
      setIsRunning(false)
      setdisplay_troco('troco certo')
      setpopup_certo(true)
      var acertos = contagem_de_acertos+1
      setcontagem_de_acertos(acertos)
    }
    setanimation(true)
    setTimeout(() =>{
      setanimation(false)
    }, 600)
  }
  useEffect(() =>{
    if(isRunning === false){
      if(inicio === false){
        reacarregar()
        setpopup_inicio(true)
        setTimeout(() =>{
          setloading(false)
        }, 1000)
      }
    }
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time - 1), 10);
      if(time-1 === 0 || time ===0){
        setIsRunning(false)
        setpopup_resultado(true)
        if(contagem_de_acertos > 10){
          setcor_rank(true)
          setrank('S')
        }
        if(contagem_de_acertos === 10){
          setrank('A')
          setcor_rank(true)
        }
        if(contagem_de_acertos < 10 && contagem_de_acertos >= 8){
          setrank('A+')
          setcor_rank(true)
        }
        if(contagem_de_acertos < 8 && contagem_de_acertos >= 6){
          setrank('B')
          setcor_rank(true)
        }
        if(contagem_de_acertos < 6 && contagem_de_acertos >= 4){
          setrank('C')
          setcor_rank(false)
        }
        if(contagem_de_acertos === 3){
          setrank('D')
          setcor_rank(false)
        }
        if(contagem_de_acertos < 3 && contagem_de_acertos >= 0){
          setrank('E')
          setcor_rank(false)
        }  
      }
    }
      return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  }
  function iniciar(){
    setpopup_inicio(false)
    startAndStop()
    setinicio(true)
  }
  function reacarregar(){
    var r = perguntas[Math.floor(Math.random()*perguntas.length)]
    setpergunta_principal(r[0])
    setresposta(r[1])
    setpopup_certo(false)
    settroco(0.00)
    setdisplay_troco('troco')
    setpopup_resultado(false)
  }
  function apagar_notas(){
    var n = Math.floor(Math.random()*perguntas.length)
    var r = perguntas[n]
    console.log(n)
    setpergunta_principal(r[0])
    setresposta(r[1])
    setpopup_certo(false)
    setpopup_errado(false)
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
      <img src={Nota2} key={1} onClick={() => remover_nota('2', '2c')} id='2c' name='2' alt='2' className='nota' />
      <img src={Nota5} key={2} onClick={() => remover_nota('5', '5c')} id='5c' name='5' alt='5' className='nota' />
      <img src={Nota10} key={3} onClick={() => remover_nota('10', '10c')} id='10c' name='10' alt='10' className='nota'/>
      <img src={Nota20} key={4} onClick={() => remover_nota('20', '20c')} id='20c' name='20' alt='20' className='nota'/>
      <img src={Nota50} key={5} onClick={() => remover_nota('50', '50c')} id='50c' name='50' alt='50' className='nota'/>
      <img src={Nota100} key={6} onClick={() => remover_nota('100', '100c')} id='100c' name='100' alt='100' className='nota'/>
    </>])

    }, 1000)
  }
  function remover_nota(nota, id){
    ativador()
    //var novo_troco = troco-parseInt(nota)
    //if(novo_troco < resposta) setdisplay_troco('troco')
    //settroco(novo_troco)

    //var element = document.getElementById(id)
    //element.remove()
  }
  function ativador(){
    console.log(display_troco)
    console.log(count2)
  }
  function voltar_ao_jogo(){
    apagar_notas()
    setIsRunning(true)
    setpopup_certo(false)
    setpopup_errado(false)
  }
  return (
    <div className="App">
      <Loading>{loading}</Loading>
      <div className={popup_certo?'popup-certo show': 'popup-certo'}>
        <div className='modal'>
          <img src={Certo} alt='certo'></img>
          <p>O troco foi correto!</p>
          <button onClick={() => voltar_ao_jogo()}>OK</button>
        </div>
      </div>
      <div className={popup_errado?'popup-errado show': 'popup-errado'}>
        <div className='modal'>
          <img src={Errado} alt='errado'></img>
          <p>O troco errado!</p>
          <p>O correto seria <Vermelho>R$ {resposta}</Vermelho> </p>
          <p>Você acabou de perder <Vermelho>20 segundos</Vermelho> </p>
          <button onClick={() => voltar_ao_jogo()}>OK</button>
        </div>
      </div>
      <div className={popup_inicio?'popup-inicio show': 'popup-inicio'}>
        <div className='modal'>
          <p>Olá!! Agora você irá responder inúmeras situações onde terá que 
            respassar o troco. Será dado um tempo de <strong>2 minutos</strong>. A medida que você errar será descontado 20 segundos do tempo que lhe resta. Ao final será data sua pontuação</p>
          <button onClick={() => iniciar()}>Iniciar</button>
        </div>
      </div>
      <div className={popup_resultado?'popup-resultado show': 'popup-resultado'}>
        <div className='modal'>
          <p className="titulo">ACABOU!!</p>
          <p>Ao todo você acertou {contagem_de_acertos} peguntas. Parabens!!</p>          
          <div className='rank'>
            <h3>Rank:</h3>
            <p className={cor_rank? 'class-verde': 'class-vermelho'}>{rank}</p>
          </div>
          <button onClick={() => window.location.reload()}>OK</button>
        </div>
      </div>
      <div className='pergunta'>
        <div id={animation? 'troco': ''} className={display_troco}>R$ {troco}</div>
        <div className='questao'>
          <p className='cronometro'>
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
          </p>
          <div className='pergunta_principal'>{pergunta_principal}</div>
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
