import { useLanguage } from "./useLanguage";
const getLanguageJSON = () => {
  const language = useLanguage();
  const languageJSON = {
    Banner: {
      h5: language === 'EN' ? 'Welcome to Hayle Bariise!' : 'kuso Dhawoow Hayle Bariise!',
      h1: language === 'EN' ? 'Empowering Futures' : 'Empowering Futures',
      p: language === 'EN' ? 'Explore Hayle Barise and unlock your potential.' : 'Explore Hayle Barise and unlock your potential.',
      Link: language === 'EN' ? 'All Courses' : 'Daawo Koorsooyinka',
    },
    About: {
      h5: language === 'EN' ? 'Message for the Director' : 'Message for the Director',
      p: language === 'EN' ? ' Hayle Barise looks to promote the development of skills and competencies across Somalia.' : 'Hayle Barise looks to promote the development of skills and competencies across Somalia.',
     p2:`Welcome to Hayle Barise Technical Development Centre`,
     p21:"Our core values and goals for the centre will be centred on commitment.",
     p22:"When trainees are committed to their studies and driven to succeed they will achieve their goals.",
      h4: language === 'EN' ? 'Environment' : 'Environment',
      p3: language === 'EN' ? 'Dynamic and Inspirational Learning Environment' : 'Dynamic and Inspirational Learning Environment.',
      h42: language === 'EN' ? 'Equipment' : 'Equipment',
      p4: language === 'EN' ? 'Cutting-edge equipment and modern teaching standards.' : 'Cutting-edge equipment and modern teaching standards.',
      h43: language === 'EN' ? 'Empowerment' : 'Empowerment',
      p5: language === 'EN' ? 'Transformative skills and connections towards employment, entrepreneurship and global leadership.' : 'Transformative skills and connections towards employment, entrepreneurship and global leadership.'
    }
  };

  return languageJSON;
};

export default getLanguageJSON;
