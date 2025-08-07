import { itemsData } from "../data/ItemsData";
import { Items } from "./Items";

export function Listing() {
  return <Items itemsData={itemsData} />;
}
