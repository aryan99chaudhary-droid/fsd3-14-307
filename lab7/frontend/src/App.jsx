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
      <Book title="Lets Us React" price={765.00} quantity={5} />
      <h1>Hello React</h1>
      <Book />
    </div>
  );
}

function Book(props) {
  const { title, price, quantity } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>Price : {price}</h2>
      <h3>Quantity : {quantity}</h3>
    </div>
  );
}

export default function App() {
  return (
   <>
   <h1>Book Store</h1>
    <div>
      <Pen pen={p1} />
      <Pen pen={p2} />
      <Pen pen={p1} />
      <Pen pen={p2} />
    </div>
    </>
  );
}
