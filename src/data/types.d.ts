interface SocialMedia {
  Linkedin?: string;
  Github?: string;
  Blog?: string;
  AboutMe?: string;
  Website?: string;
  [key: string]: string;
}

interface Person {
  name: string;
  status: string;
  role: string;
  location: string;
  social_media: string | SocialMedia;
  tech_stack: string[];
  hired?: boolean;
}

interface Employer {
  name: string;
  category: string;
  link: string;
  description: string;
}
