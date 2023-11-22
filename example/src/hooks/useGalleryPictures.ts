import type { GalleryPicture } from '../mock/api';
import { useEffect, useState } from 'react';

export function useGalleryPictures(fn: () => GalleryPicture[]) {
  const [galleryPictures, setGalleryPictures] = useState<GalleryPicture[]>([]);
  useEffect(() => {
    const pictures = fn();
    setGalleryPictures(pictures);
  }, []);

  return galleryPictures;
}
