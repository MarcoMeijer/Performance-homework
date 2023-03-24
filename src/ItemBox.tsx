import React from "react";
import { memo } from "react";
import { IoIosClose } from "react-icons/io";
import { Item } from "./getRandomItem";

interface ItemBoxProps {
  item: Item;
  onRemove: () => void;
  style: React.CSSProperties;
}

export const ItemBox = ({ item, onRemove, style }: ItemBoxProps) => {
  console.log("item");
  return (
    <div style={style}>
      <div style={{ background: item.background }} className="itembox">
        <h3>{item.word}</h3>
        <button onClick={onRemove}>
          <IoIosClose onClick={onRemove} className="icon-remove" size="2.5em" />
        </button>
      </div>
    </div>
  );
};

interface MemoItemBoxProps {
  item: Item;
  removeItem: (item: Item) => void;
  style: React.CSSProperties;
}

export const MemoizedItemBox = memo(function MemoizedItemBox({
  item,
  removeItem,
  style,
}: MemoItemBoxProps) {
  console.log(`memo ${item.word}`);
  return (
    <ItemBox style={style} item={item} onRemove={() => removeItem(item)} />
  );
});
