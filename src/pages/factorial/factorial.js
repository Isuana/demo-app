import './factorial.css';

function Factorial() {

  const clickedCalculation = () => {
    let numer = document.getElementById('number').value;
    let result = 1;

    if (numer === '' || isNaN(numer)) {
      document.getElementById('result').innerHTML = 'To nie jest liczba!';
      return;
    }

    if (numer <= 0) {
      document.getElementById('result').innerHTML = 'Wartość nie może być poniżej jeden!';
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
    <div>
      <h3 className='style-head'>Liczenie silni</h3>
      <br />
      <input type="text" id='number' onChange={() => clearResult()} />
      <br />
      <input type="button" value="Policz" className="calculation-button" onClick={() => clickedCalculation()} />
      <div id='result' className='calculation-result'></div>
    </div>
  );
}

export default Factorial;