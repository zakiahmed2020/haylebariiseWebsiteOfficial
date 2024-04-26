import { useLanguage } from "./useLanguage";
const getLanguageJSON = () => {
  const language = useLanguage();
  const languageJSON = {
    Banner: {
      h5: language === 'EN' ? 'Welcome to Hayle Bariise!' : 'kuso Dhawoow Hayle Bariise!',
      h1: language === 'EN' ? 'Unlock your' : 'Soo Muuji',
      span: language === 'EN' ? 'potential' : 'kartida',
      p: language === 'EN' ? 'At Hayle Barise Technical Development Centre we believe that it is imperative to set high expectations for our trainees and ourselves to ensure that all our students achieve greatness.' : 'Xarunta Horumarinta Farsamada ee Hayle Bariise waxaan aaminsanahay inay lama huraan tahay in la dejiyo rajooyinka ardaydeena iyo nafteena si aan u hubinno in dhammaan ardaydeena ay gaadhaan heer sare.',
      Link: language === 'EN' ? 'View Courses' : 'Daawo Koorsooyinka',
    },
    About: {
      h5: language === 'EN' ? 'OUR About Us!' : 'somali',
      p1: language === 'EN' ? ' Hayle Barise Technical Development Centre is a dynamic and inspirational place to study, merging raw technical talent with academic brilliance.' : 'Xarunta Horumarinta Farsamada ee Hayle Bariise waa meel firfircoon oo dhiirigelin leh in wax lagu barto, iyada oo ku daraysa xirfadda farsamada cayriin iyo hufnaan tacliimeed.',
      p2: language === 'EN' ? 'HBTDC provides a unique service through the use of state-of-the-art equipment and modern teaching standards.' : 'HBTDC waxay bixisaa adeeg gaar ah iyadoo la isticmaalayo qalab casri ah iyo heerarka waxbarida casriga ah.',
      h4: language === 'EN' ? 'Successflly Trained' : 'Si guul leh loo tababaray',
      p3: language === 'EN' ? 'Business tailored it design, management support services.' : 'Ganacsigu waxa uu ku habeeyey qaabayntiisa, adeegyada taageerada maamulka.',
      h42: language === 'EN' ? 'Education Growth' : 'Kobaca Waxbarashada',
      p4: language === 'EN' ? 'Business tailored it design, management support services.' : 'Ganacsigu waxa uu ku habeeyey qaabayntiisa, adeegyada taageerada maamulka.',
      h43: language === 'EN' ? 'Students Trained' : 'Ardayda la tababaray',
      p5: language === 'EN' ? 'Business tailored it design, management support services.' : 'Ganacsigu waxa uu ku habeeyey qaabayntiisa, adeegyada taageerada maamulka.',
      h44: language === 'EN' ? 'Successflly Trained' : 'Si guul leh loo tababaray',
      p6: language === 'EN' ? 'Business tailored it design, management support services.' : 'Ganacsigu waxa uu ku habeeyey qaabayntiisa, adeegyada taageerada maamulka.'
    }
  };

  return languageJSON;
};

export default getLanguageJSON;
