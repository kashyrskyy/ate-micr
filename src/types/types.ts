// types.ts
import { Timestamp, FieldValue } from 'firebase/firestore';

export interface NewDesign {
    title: string;
    description: string;
    dateCreated: FieldValue | Timestamp;
    dateModified: FieldValue | Timestamp;
    userId: string;
    images: Image[];
    files: FileDetails[];
}

export interface Design {
  isAdmin?: boolean;
  id: string;
  title: string;
  description: string;
  dateCreated: FieldValue | Timestamp | null;
  dateModified: FieldValue | Timestamp | null;
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

// Utility functions
export const timestampToString = (timestamp: Timestamp | FieldValue | null): string => {
  return timestamp && timestamp instanceof Timestamp ? timestamp.toDate().toLocaleString() : '';
};