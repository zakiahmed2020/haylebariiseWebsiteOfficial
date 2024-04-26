import { useEduorContext } from '@/context/EduorContext';
// import { useContext } from 'react';

export const useLanguage = () => {
    const { Language } = useEduorContext();
  return Language;
};

