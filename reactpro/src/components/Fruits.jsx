export default function Fruits() {
  const fruits = ["apple", "mango", "banane", "orange", "Pineapple"];

  return (
    <div>
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
    </div>
  );
}
