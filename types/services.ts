export interface Image {
  src: string;
  alt: string;
}

export interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
  image: Image;
}
