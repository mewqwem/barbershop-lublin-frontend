export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  author: string;
  type: "short" | "long" | "beard" | "child";
}

export const images: GalleryImage[] = [
  {
    id: "img-001",
    url: "gallery/1.jpg",
    alt: "Classic side fade haircut with sharp line up",
    author: "Max",
    type: "short",
  },
  {
    id: "img-002",
    url: "gallery/2.jpg",
    alt: "Full beard grooming with hot towel treatment",
    author: "Alex",
    type: "beard",
  },
  {
    id: "img-003",
    url: "gallery/3.jpg",
    alt: "Modern textured top knot for long hair",
    author: "Dmitry",
    type: "long",
  },
  {
    id: "img-004",
    url: "gallery/4.jpg",
    alt: "Stylish and clean haircut for a young boy",
    author: "Max",
    type: "child",
  },
  {
    id: "img-005",
    url: "gallery/5.jpg",
    alt: "Textured crop haircut with low skin fade",
    author: "Alex",
    type: "short",
  },
  {
    id: "img-006",
    url: "gallery/6.jpg",
    alt: "Textured crop haircut with low skin fade",
    author: "Alex",
    type: "short",
  },
  {
    id: "img-007",
    url: "gallery/7.jpg",
    alt: "Textured crop haircut with low skin fade",
    author: "Alex",
    type: "short",
  },
];
