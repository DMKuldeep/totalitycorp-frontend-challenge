export const Checkout = () => {
  return (
    <>
      <h2 className='chead'>Checkout</h2>
      <div className="checkout">
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label>Address:</label>
            <input type="text" id="address" name="address" required />
          </div>
          
          <div className="form-group">
            <label>Mobile No:</label>
            <input type="text" id="address" name="address" required />
          </div>
          
          <div className="form-group">
            <label>Card No</label>
            <input type="number" required />
          </div>
          
          <div className="form-group">
            <label>CVV</label>
            <input type="number" required />
          </div>
        
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="date" required />
          </div>
          <br/>

          <button type="submit">Place Order</button>
        </form>
      </div>
    </>
  );
};
