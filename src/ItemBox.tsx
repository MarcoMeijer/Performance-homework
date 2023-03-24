import React from "react";
import { memo } from "react";
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

interface MemoItemBoxProps {
  item: Item;
  removeItem: (item: Item) => void;
}

export const MemoizedItemBox = memo(function MemoizedItemBox({
  item,
  removeItem,
}: MemoItemBoxProps) {
  console.log(`memo ${item.word}`);
  return <ItemBox item={item} onRemove={() => removeItem(item)} />;
});
