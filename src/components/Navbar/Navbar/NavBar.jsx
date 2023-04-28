import CartWdiget from "./CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <h3>PhoneGear</h3>
      <div>
        <ul>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Marcas</a>
          </li>
          <li>
            <a href="#">Promociones</a>
          </li>
          <li>
            <a href="#">Ayuda y soporte</a>
          </li>
        </ul>
      </div>
      <CartWdiget />
    </nav>
  );
};

export default Navbar