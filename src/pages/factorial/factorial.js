import './factorial.css';

function Factorial() {

  const clickedCalculation = () => {
    let numer = document.getElementById('number').value;
    let result = 1;

    if (numer === '' || isNaN(numer)) {
      document.getElementById('result').innerHTML = 'To nie liczba';
      return;
    }

    if (numer < 0) {
      document.getElementById('result').innerHTML = 'Wartość nie może być poniżej zera';
      return;
    }

    for (let i = 1; i <= numer; i++) {
      result = result * i;
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('number').value = '';
  }

  function clearResult() {
    document.getElementById('result').innerHTML = '';
  }

  return (
    <div className="Factorial">
      <h3>Liczenie silni</h3> 
      <input type="text" id='number' onChange={() => clearResult()} />
      <br/>
      <input className="calculation-button" type="button" value="Policz" onClick={() => clickedCalculation()} />
      <div id='result'></div>
    </div>
  );
}

export default Factorial;