const products = [
  {
    name: "Classic Black Tee",
    price: "350 EGP",
    tag: "NEW",
  },
  {
    name: "Premium White Tee",
    price: "350 EGP",
    tag: "BEST SELLER",
  },
  {
    name: "Colombia Oversized Tee",
    price: "300 EGP",
    tag: "LIMITED",
  },
  {
    name: "Summer Collection Tee",
    price: "350 EGP",
    tag: "NEW",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <span>COLOMBIA</span>
          <small>STORE</small>
        </div>

        <div className="navLinks">
          <a href="#collection">Collection</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </div>

        <button className="cart">🛒</button>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">COLOMBIA_STORE · NEW SEASON</p>

          <h1>
            WEAR YOUR
            <br />
            <span>STATEMENT.</span>
          </h1>

          <p className="heroText">
            Premium imported fashion, selected for a clean everyday look.
          </p>

          <a className="primaryButton" href="#products">
            SHOP COLLECTION
          </a>
        </div>
      </section>

      <section id="collection" className="intro">
        <p className="eyebrow">THE COLLECTION</p>

        <h2>
          Clean. Modern. <span>Confident.</span>
        </h2>

        <p>
          Discover the latest COLOMBIA_STORE pieces, made for your everyday
          style. Shipping available across Egypt.
        </p>
      </section>

      <section id="products" className="productsSection">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">SHOP NOW</p>
            <h2>Featured pieces</h2>
          </div>

          <a href="#products">View all →</a>
        </div>

        <div className="grid">
          {products.map((product) => (
            <article className="productCard" key={product.name}>
              <div className="productImage">
                <span>{product.tag}</span>

                <div className="placeholder">
                  COLOMBIA_STORE
                </div>
              </div>

              <div className="productInfo">
                <div>
                  <h3>{product.name}</h3>
                  <p>Imported · Premium quality</p>
                </div>

                <strong>{product.price}</strong>
              </div>

              <button className="addButton">
                ADD TO CART
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <p className="eyebrow">COLOMBIA_STORE</p>

        <h2>Your style. Your statement.</h2>

        <p>
          Premium pieces, simple shopping, and delivery across Egypt.
          More collections are coming soon.
        </p>
      </section>

      <footer>
        <div className="brand">
          <span>COLOMBIA</span>
          <small>STORE</small>
        </div>

        <p>© 2026 COLOMBIA_STORE. All rights reserved.</p>
      </footer>
    </main>
  );
}
