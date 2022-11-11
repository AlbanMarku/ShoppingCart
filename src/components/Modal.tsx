function Modal() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button type="button">x</button>
        <div className="title">
          <h2>Cart items</h2>
        </div>
        <div className="body">
          <p>stuff in here</p>
        </div>
        <div className="footer">
          <button type="button">Checkout</button>
          <button type="button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
