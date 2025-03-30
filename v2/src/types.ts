export interface IProject {
  title: string;
  description: string;
  ghLink: string;
  imgPath: string;
}

export interface ISkill {
  title: string;
  icon: any;
}

export interface IExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export interface IContactLink {
  title: string;
  icon: any;
  link: string;
}
