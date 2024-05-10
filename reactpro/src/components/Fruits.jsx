export default function Fruits() {
  const fruits = ["apple", "mango", "banane", "orange", "Pineapple"];

  return (
    <div>
      {fruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}
    </div>
  );
}
