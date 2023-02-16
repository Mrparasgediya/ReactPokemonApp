import { Power } from "./Power";

export default interface Pokemon {
  id: number;
  name: string;
  imageUrl?: string;
  powers: Power[];
}
