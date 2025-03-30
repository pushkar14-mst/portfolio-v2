export interface Project {
  title: string;
  description: string;
  ghLink: string;
  imgPath: string;
}

export interface Skill {
  title: string;
  icon: any;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export interface ContactLink {
  title: string;
  icon: any;
  link: string;
}
