import { Token } from "./token.model";

export interface User {
  id: string;
  name: string;
  username: string;
  tokens: Token[];
}

