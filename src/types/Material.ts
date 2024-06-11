import { Timestamp } from 'firebase/firestore';

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections: Subsection[];
  images: { url: string; title: string }[];
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
  subSubsections: SubSubsection[];
  images: { url: string; title: string }[];
}

export interface SubSubsection {
  id: string;
  title: string;
  content: string;
  images: { url: string; title: string }[];
}

export interface Material {
  id: string;
  title: string;  // Add this line
  header: { title: string; content: string };
  footer: { title: string; content: string };
  sections: Section[];
  author: string;
  timestamp: Timestamp;
  published: boolean;
}