export default interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  imageUrl?: string;
}
