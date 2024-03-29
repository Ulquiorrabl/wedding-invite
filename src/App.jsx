import Media from 'react-media';
import './App.css'

// import ringPhoto from './images/ring-photo.jpg';
// import togetherWall from './images/together-wall.jpg';
// import togetherWallColor from './images/together-wall-color.jpg';
import iva1 from './images/iva1.jpg';

import mapPoint from './svgs/map-point.svg';
import hearts from './svgs/hearts.svg';
import rings from './svgs/rings.svg';

import calendar from './images/calendar.png';


const queries = {
  mobile: "(max-width: 1299px)",
  pc: "(min-width: 1300px)"
}

function App() {
  return (
    <div className='main-container'>
      <div className='content-feed'>
        <div className='content-feed-content'>
          <div className='header-div'>
            <div className='header-content-div'>
              <Media queries={queries}>
                {matches => (
                  <>
                    {matches.mobile && <div className='header-img-container'>
                      <img className='header-img-icon header-img-icon-left' src={hearts}></img>
                      <span className='ms-text initials'>K + V</span>
                      <img className='header-img-icon header-img-icon-right' alt='15 июня 2024' src={rings}></img>
                    </div>}
                    {matches.pc && <>
                      <span className='ms-text initials'>K + V</span>
                    </>}
                  </>
                )}
              </Media>

              <div className='header-img-container'>
                <Media queries={queries}>
                  {matches => (
                    <>
                      {matches.mobile && <>
                        <span className='exo-text invite'>Приглашаем на свадьбу</span>
                      </>}
                      {matches.pc && <>
                        <img className='header-img-icon header-img-icon-left' src={hearts}></img>
                        <span className='exo-text invite'>Приглашаем на свадьбу</span>
                        <img className='header-img-icon header-img-icon-right' alt='15 июня 2024' src={rings}></img>
                      </>}
                    </>
                  )}
                </Media>
              </div>
            </div>

          </div>
          <span className='exo-text header'>Дата</span>
          <img className='calendar-image photo-box-shadow' src={calendar}></img>
          <span className='exo-text header'>Место проведения</span>
          <a href='https://yandex.by/maps/org/usadba_iva_park/153258836002/?ll=23.874049%2C53.562482&z=17' className='link-place'><img className='svg' src={mapPoint}></img><span className='exo-text header2 link-text place-text'>{'Усадьба "Ива Парк", 5км от г. Гродно'}</span></a>
          <img className='place-image photo-box-shadow' src={iva1}></img>
          <span className='exo-text header'>Программа</span>
          <ul>
            <li className='b1'>15:00 - Сбор гостей около <a href="https://yandex.by/maps/org/hrodnenska_oblasna_filarmoniia/127044541592/?ll=23.822186%2C53.668056&z=17.05"><span className='exo-text b1 link-text place-text'>Гродненская областная филармония</span><img className='svg' src={mapPoint}></img></a> для трансфера к месту проведения мероприятия</li>
            <li className='b1'>15:30 - Приветственный фуршет</li>
            <li className='b1'>16:00 - Церемония бракосочетания</li>
            <li className='b1'>17:00 - Праздничный банкет</li>
          </ul>
          <span className='exo-text header'>Детали</span>
          <span className='exo-text b1'>К сожалению, долго наслаждаться красотой подаренных цветов нам не удастся, поэтому, если вместо них вы решите подарить нам бутылочку алкоголя, мы будем безумно рады.  </span>
          <span className='exo-text header'>Контакты для связи в день свадьбы</span>
          <Media queries={queries}>
            {matches => (
              <>
                {matches.mobile && <>
                  <span className='exo-text b1'>Организатор/Координатор <br></br> Щука Татьяна <br></br>8033 341-17-66</span>
                  <span className='exo-text b1'>Мама невесты <br></br> Балицкая Татьяна Николаевна <br></br>+375 29 677-43-16</span>
                </>}
                {matches.pc && <>
                  <span className='exo-text b1'>Организатор/Координатор Щука Татьяна: 8033 341-17-66</span>
                  <span className='exo-text b1'>{'Балицкая Татьяна Николаевна (мама Кати)'}: +375 29 677-43-16</span>
                </>}
              </>
            )}
          </Media>
        </div>
      </div>
    </div>
  );
}

export default App
