import './fibonacci.css';

function Fibonacci() {

  const scoreFibonacci = () => {
    let numer = document.getElementById("numeral").value;
    let resultOne = 0, resultTwo = 1, nextResult;

    if (numer === '' || isNaN(numer)) {
      document.getElementById('result').innerHTML = 'To nie jest liczba!';
      return;
    }

    if (numer <= 0) {
      document.getElementById('result').innerHTML = 'Wartość nie może być 0 lub poniżej zera!';
      return;
    }

    for (let i = 1; i <= numer; i++) {
      nextResult = resultOne + resultTwo;
      resultOne = resultTwo;
      resultTwo = nextResult
    }

    document.getElementById('result').innerHTML = resultOne;
    document.getElementById('numeral').value = '';
  }

  function clearResult() {
    document.getElementById('result').innerHTML = '';
  }

  return (
    <div>
      <h3 className='style-head'>Liczenie Fibonacci</h3>
      <br />
      <input type="text" id='numeral' onChange={() => clearResult()} />
      <br />
      <input type="button" value="Pokaż" className='view-button' onClick={() => scoreFibonacci()} />
      <div className='view-result' id='result'></div>
    </div>
  );
}

export default Fibonacci;