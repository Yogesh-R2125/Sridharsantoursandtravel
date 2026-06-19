import { useEffect } from 'react';

const defaultTitle = 'Sri Dharsan Tours and Travels | Team KD Brothers';
const defaultDescription = 'Sri Dharsan Tours and Travels | Team KD Brothers — Your trusted travel partner for domestic tours, international tours, holiday packages, pilgrimage tours, vehicle rentals, and customized travel experiences.';

export function useSEO({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    if (title) {
      document.title = `${title} | Sri Dharsan Tours and Travels`;
    } else {
      document.title = defaultTitle;
    }

    if (description) {
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    } else {
      if (metaDescription) {
        metaDescription.setAttribute('content', defaultDescription);
      }
    }

    return () => {
      document.title = previousTitle || defaultTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', previousDescription || defaultDescription);
      }
    };
  }, [title, description]);
}
