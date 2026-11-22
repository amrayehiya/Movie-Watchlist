import { useState } from "react";
import WatchForm from "../components/WatchForm.jsx";
import WatchList from "../components/WatchList.jsx";

export default function WatchlistPage() {

  const [watchlist, setWatchlist] = useState([]);

  function addItem(text) {
    setWatchlist([...watchlist, { id: crypto.randomUUID(), text, watched: false }]);
  }

  function toggleItem(id) {
    setWatchlist(
      watchlist.map((item) =>
        item.id === id ? { ...item, watched: !item.watched } : item
      )
    );
  }

  function deleteItem(id) {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  }

  
  const toWatch = watchlist.filter((item) => !item.watched).length;

  return (
    <section className="panel">
      <h2>Watchlist ({toWatch} to watch)</h2>
      <WatchForm onAdd={addItem} />
      <WatchList watchlist={watchlist} onToggle={toggleItem} onDelete={deleteItem} />
    </section>
  );
}