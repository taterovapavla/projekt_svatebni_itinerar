import { Chrono } from 'react-chrono';
import './style.css';

const items = [
  {
    title: 'Začátek účesu a líčení družiček.',
    media: {
      name: 'hairstylist',
      source: {
        url: './images/hairstyle.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title:
      'Nevěsta začíná s účesem a líčením. Doručení kytic. Dodavatelé se začínají připravovat v místě konání.',
    media: {
      name: 'flowers',
      source: {
        url: './images/flowers.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Nevěsta se obléká. Přijíždí fotograf.',
    media: {
      name: 'photo',
      source: {
        url: './images/photo.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Ženich a svatebčané na místě. Hosté začínají přicházet.',
    media: {
      name: 'guests',
      source: {
        url: './images/guests.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Nevěsta a svatebčané odcházejí na místo konání.',
    media: {
      name: 'bride',
      source: {
        url: './images/bride.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Obřad začíná.',
    media: {
      name: 'church',
      source: {
        url: './images/church.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Konec obřadu. Pár odchází na fotografování.',
    media: {
      name: 'newlyweds',
      source: {
        url: './images/newlyweds.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Pár se vrací. Skupinové fotografie.',
    media: {
      name: 'photos',
      source: {
        url: './images/photos.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Hosté se usadí k obědu. Podává se oběd o třech chodech.',
    media: {
      name: 'lunch',
      source: {
        url: './images/lunch.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Proslovy a káva.',
    media: {
      name: 'speech',
      source: {
        url: './images/speech.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Krájení dortu a první tanec.',
    media: {
      name: 'weddingcake',
      source: {
        url: './images/weddingcake.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Otevření tanečního parketu.',
    media: {
      name: 'dancefloor',
      source: {
        url: './images/dancefloor.png',
      },
      type: 'IMAGE',
    },
  },

  {
    title: 'Podává se večerní bufet.',
    media: {
      name: 'bufet',
      source: {
        url: './images/bufet.png',
      },
      type: 'IMAGE',
    },
  },
];

export const Harmonogram = () => {
  return (
    <>
      <div className="harmonogram__header">
        <h1 className="harmonogram__heading">Harmonogram svatebního dne</h1>
      </div>
      <div className="harmonogram__content">
        <Chrono
          items={items}
          mode="VERTICAL"
          cardWidth={64}
          showSingle
          hideControls
          flipLayout
          theme={{
            primary: 'grey',
            secondary: '#DB9EC5',
            cardTitleColor: 'black',
            cardBgColor: 'none',
            nestedCardBgColor: 'white',
            titleColor: 'black',
            titleColorActive: 'black',
            iconBackgroundColor: '#97B1CC',
          }}
        />
      </div>
    </>
  );
};

export default Harmonogram;
