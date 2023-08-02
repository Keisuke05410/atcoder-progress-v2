import { FieldValue } from "firebase/firestore";

export type User = {
  uid: string;
  email: string;
  displayName: string;
};

export type UpdateData = {
  url: string;
  contestAlphabet: string;
  contestNumber: string;
  taskAlphabet: string;
  uid: string;
  verdici: "circle" | "triangle" | "cross";
  count: number;
  code: string;
  language: string;
  createdAt: FieldValue;
};
