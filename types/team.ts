export interface Team {
  name: string;
  position: string;
  experience: string;
  specialty: string;
  socialMedia: string;
  education?: string;
  img: {
    src: string;
    alt: string;
  };
}
