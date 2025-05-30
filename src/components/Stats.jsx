export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );
  const numsPacked = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numsPacked) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? `You've got everything! You are ready to go ✈️`
        : `You have ${numsPacked} items on your list. You have already packed ${packedItems} (${percentage}%)`}
    </footer>
  );
}
