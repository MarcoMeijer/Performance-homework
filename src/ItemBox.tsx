import { IoIosClose } from "react-icons/io";
import { Item } from "./getRandomItem";

interface ItemBoxProps {
  item: Item;
  onRemove: () => void;
}

export const ItemBox = ({ item, onRemove }: ItemBoxProps) => {
  console.log("item");
  return (
    <div style={{ background: item.background }}>
      <h3>{item.word}</h3>
      <button onClick={onRemove}>
        <IoIosClose onClick={onRemove} className="icon-remove" size="2.5em" />
      </button>
    </div>
  );
};
