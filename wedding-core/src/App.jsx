import Media from 'react-media';
import './App.css'

import "./fonts/MarckScript-Regular.ttf";
import ringPhoto from './images/ring-photo.jpg';
import togetherWall from './images/together-wall.jpg';

//import mapPoint from './svgs/map-point.svg';

function App() {
  return (
    <div className='main-container'>
      {/* <Media queries={{
        small: "(max-width: 1299px)",
        large: "(min-width: 1300px)",
      }}>
        {matches => (
          <>
            {matches.small && <div className='image-conteiner'>
              <img className='backgrount-image-single' src={ringPhoto}></img>
            </div>}
            {matches.large && <>
              <img className='background-image background-image-right' src={ringPhoto}></img>
              <img className='background-image background-image-left' src={togetherWall}></img>
            </>}
          </>
        )}
      </Media> */}
      <div className='image-container'>
        <img className='background-image' src={ringPhoto}></img>
        <img className='background-image' src={togetherWall}></img>
      </div>
      <div className='content-feed'>
        <div className='background-transparent'>

        </div>
        <div className='content-feed-content'>
          <span className='ms-text initials'>K + V</span>
          <span className='ms-text invite'>Приглашаем на свадьбу</span>
          <span className='date'>ИЮНЬ</span>
          <span className='date'>{'12 13 14 (15) 16 17 18'}</span>
          <a href="https://yandex.by/maps/org/hrodnenska_oblasna_filarmoniia/127044541592/?ll=23.822186%2C53.668056&z=17.05"><span>Место отправки</span></a>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
          <span className='ms-text initials'>КОНТЕНТ</span>
        </div>
      </div>
    </div>
  );
}

export default App
