import { ItemType } from "./ItemType";

export interface Item {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  type: ItemType;
  startDate: string | null;
  endDate: string | null;
  creationDate: string;
  updateDate: string;
}
