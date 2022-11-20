import './about_me.css';

function AboutMe() {
  return (
    <>
      <h3 className='style-head'>Umiejętności</h3>
      <div className='text-left'>
        <ul className='left-list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
        <ul className='float-right right-list'>
          <li>Komunikatywność</li>
          <li>Odpowiedzialność</li>
          <li>Zaangażowanie</li>
          <li>Praca w zespole</li>
          <li>Organizacja pracy</li>
        </ul>
      </div>
    </>
  );
}

export default AboutMe;