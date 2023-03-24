import React, { CSSProperties } from "react";
import { useCallback, useState } from "react";
import { MemoizedItemBox } from "./ItemBox";
import { getRandomItem, Item } from "./getRandomItem";
import { FixedSizeList as List } from "react-window";

interface ListItemProps {
  index: number;
  style: CSSProperties;
}

export const App = () => {
  const [items, setItems] = useState(() =>
    Array.from({ length: 1000 }, () => getRandomItem())
  );

  const addItem = () => {
    setItems((items) => [getRandomItem()].concat(items));
  };

  const removeItem = useCallback((itemToRemove: Item) => {
    setItems((items) => items.filter((item) => item !== itemToRemove));
  }, []);

  const ListItem = ({ index, style }: ListItemProps) => (
    <MemoizedItemBox
      key={items[index].id}
      item={items[index]}
      removeItem={removeItem}
      style={style}
    />
  );

  return (
    <>
      <div className="content">
        <List
          height={700}
          itemCount={items.length}
          itemSize={110}
          width={"100%"}
        >
          {ListItem}
        </List>
      </div>
      <button className="fab" onClick={addItem}>
        +
      </button>
    </>
  );
};

export default App;
