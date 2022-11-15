import './home.css';
import nails from './nails.jpg'
import right from './right.gif'
import znak from './znak.jpg'

function Home() {
  return (
    <>
      <h3 className='style-head'>Podsumowanie zawodowe</h3>
      <p className='style-me'>Kilka miesięcy temu rozpoczęłam swoją przygodę w świecie IT.<br/> Po przejrzeniu dostępnych technologii 
        zdecydowałam się iść w kierunku frontend developera przy wykorzystaniu biblioteki React.js do tworzenia 
        aplikacji internetowych. W poprzedniej pracy na stanowisku menagera miałam stały kontakt z klientami 
        i z organizacją pracy zespołu.</p>
      <img src={nails} alt='nails' className='style-nails'/>
      <img src={right} alt='right' className='style-right'/>
      <img src={znak} alt='znak' className='style-char'/>
    </>
  );
}

export default Home;