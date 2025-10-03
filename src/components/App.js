import { useState } from "react";
import Logo from "./Logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
  { id: 4, description: "Laptop", quantity: 12, packed: false },
  { id: 5, description: "Belt", quantity: 12, packed: false },
  { id: 6, description: "Wallet", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const isConfirm = window.confirm(
      "Do you really want to clear the items list"
    );
    if (isConfirm) {
      setItems([]);
    }
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddNewItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
