import React, { createContext, useContext, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // API Data Page
    'api.title': 'API Data Explorer',
    'api.subtitle': 'Explore data from JSONPlaceholder API with search and pagination',
    'api.search.placeholder': 'Search posts and users...',
    'api.search.button': 'Search',
    'api.posts': 'Posts',
    'api.users': 'Users',
    'api.loading': 'Loading data from API...',
    'api.error.title': 'Failed to Load Data',
    'api.error.button': 'Try Again',
    'api.noResults.title': 'No results found',
    'api.noResults.subtitle': 'Try adjusting your search terms or check back later.',
    'api.post.prefix': 'Post #',
    'api.user.prefix': 'User',
    'api.user.worksAt': 'Works at',
    'api.viewDetails': 'View Details',
    'api.visitWebsite': 'Visit Website',
    'api.pagination.previous': 'Previous',
    'api.pagination.next': 'Next',
    'api.language.switch': 'Español',
  },
  es: {
    // API Data Page
    'api.title': 'Explorador de Datos API',
    'api.subtitle': 'Explora datos de la API JSONPlaceholder con búsqueda y paginación',
    'api.search.placeholder': 'Buscar publicaciones y usuarios...',
    'api.search.button': 'Buscar',
    'api.posts': 'Publicaciones',
    'api.users': 'Usuarios',
    'api.loading': 'Cargando datos de la API...',
    'api.error.title': 'Error al Cargar Datos',
    'api.error.button': 'Intentar de Nuevo',
    'api.noResults.title': 'No se encontraron resultados',
    'api.noResults.subtitle': 'Intenta ajustar tus términos de búsqueda o vuelve más tarde.',
    'api.post.prefix': 'Publicación #',
    'api.user.prefix': 'Usuario',
    'api.user.worksAt': 'Trabaja en',
    'api.viewDetails': 'Ver Detalles',
    'api.visitWebsite': 'Visitar Sitio Web',
    'api.pagination.previous': 'Anterior',
    'api.pagination.next': 'Siguiente',
    'api.language.switch': 'English',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};