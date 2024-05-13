// types.ts
import { Timestamp, FieldValue } from 'firebase/firestore';

export interface NewDesign {
    title: string;
    description: string;
    dateDue: Timestamp | null;
    dateCreated: FieldValue | Timestamp;
    userId: string;
    images: Image[];
    files: FileDetails[];
}

export interface Design {
  id: string;
  title: string;
  description: string;
  dateDue: Timestamp | null;
  dateCreated: FieldValue | Timestamp | null;
  userId: string;
  images: Image[];
  files: FileDetails[];
}

export interface Image {
  url: string;
  path: string;
  title: string;
  deleted?: boolean;
}

export interface FileDetails {
  id: string;
  url: string;
  name: string;
  path: string;
  deleted?: boolean;
}