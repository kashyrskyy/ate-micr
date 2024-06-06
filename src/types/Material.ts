import { Timestamp } from 'firebase/firestore';

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
  subSubsections: SubSubsection[];
}

export interface SubSubsection {
  id: string;
  title: string;
  content: string;
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