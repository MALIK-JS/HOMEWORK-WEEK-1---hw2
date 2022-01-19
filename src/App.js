// import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    product: {
      item: null,
      brand: null,
      unit: null,
      quantity: 0,
      isPurchased: false,
    },
    grocery: [
      {
        id: 1,
        item: "WATER",
        brand: "FIJI",
        unit: "BOTTLE",
        quantity: 24,
        isPurchased: false,
      },
      {
        id: 2,
        item: "Pistachios",
        brand: "Wonderful",
        unit: "BAG",
        quantity: 9,
        isPurchased: true,
      },
      {
        id: 3,
        item: "Chips",
        brand: "Pringles",
        unit: "BAG",
        quantity: 12,
        isPurchased: false,
      },
    ],
  };

  handlePurchased = (id, name) => {
    let xyz = this.state.grocery;

    const index = xyz.indexOf(xyz.filter((x) => x.id === id)[0]);
    xyz[index].isPurchased = !xyz[index].isPurchased;
    this.setState({ xyz });
  };

  onDelete = (id) => {
    let groceries = this.state.grocery;

    let xyz = groceries.filter((groc) => {
      return groc.id !== id;
    });
    this.setState({ grocery: xyz });
  };

  handleInputChange = (event) => {
    this.setState({
      product: {
        ...this.state.product,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      prevState.product.id = prevState.grocery.length + 1;

      return { grocery: [...prevState.grocery, prevState.product] };
    });
  };
  render() {
    return (
      <div className="container">
        <div className="addItem">
          <form onSubmit={this.handleSubmit}>
            <label>ITEM:</label>
            <br />
            <input
              type="text"
              id="ITEM"
              name="item"
              value={this.state.product.item}
              onChange={this.handleInputChange}
            />
            <br />
            <label for="brand">Brand:</label>
            <br />
            <input
              type="text"
              id="brand"
              name="brand"
              value={this.state.product.brand}
              onChange={this.handleInputChange}
            />
            <br />
            <label for="quantity">QUANTITY:</label>
            <br />
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={this.state.product.quantity}
              onChange={this.handleInputChange}
            />
            <br />
            <label for="unit">UNIT:</label>
            <br />
            <input
              type="text"
              id="unit"
              name="unit"
              value={this.state.product.unit}
              onChange={this.handleInputChange}
            />
            <br />
            <input type="submit" value="ADD" onClick={this.handleSubmit} />
          </form>
        </div>
        {Array.isArray(this.state.grocery) &&
          this.state.grocery.length !== 0 &&
          this.state.grocery.map((items) => {
            return (
              <div key={items.id}>
                <ul
                  onClick={() => {
                    this.handlePurchased(items.id, items.name);
                  }}
                  className={
                    items.isPurchased
                      ? "itemList geenBack"
                      : "itemList orngBack"
                  }
                >
                  <li>{items.item}</li>
                  <li>{items.brand}</li>
                  <li>{items.quantity}</li>
                  <li>{items.unit}</li>
                </ul>
                <button
                  onClick={() => {
                    this.onDelete(items.id);
                  }}
                >
                  DELETE
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
