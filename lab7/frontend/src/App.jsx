function Book() {
  return (
    <div>
      <h1>Lets Us React</h1>
      <h2>Price : 765.00</h2>
      <h3>Quantity : 5</h3>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Book></Book>
      <h1>Hello React</h1>
      <Book />
    </div>
  );
}