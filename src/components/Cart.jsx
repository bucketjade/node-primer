// import './Cart.css';

// const formatPrice = new Intl.NumberFormat([], { style: 'currency', currency: 'USD' }).format;

const Cart = ({selectedCards, courses}) => (
  <div className="cart">
    {
      selectedCards.length === 0
      ? <div>
            <h2>No classes selected</h2>
            <p>To select a class, close this window and click on the class card.</p>
        </div>
      : <div>
            <h3>Selected Classes</h3>
            <ul>
                {selectedCards.map(id => (
                <li key={id}>
                    {courses[id].term} CS{courses[id].number}: {courses[id].title} ({courses[id].meets})
                </li>
                ))}
            </ul>
        </div>
    }
  </div>
);

export default Cart;