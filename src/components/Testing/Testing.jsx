import React, { Component } from "react";

const DATA = [
    {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
    },
    {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
    },
    {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
    },
    {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
    },
    {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
    },
    {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
    }
];

class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        );
    }
}

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? (
            product.name
        ) : (
            <span style={{ color: "red" }}>{product.name}</span>
        );
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(<ProductRow key={product.name} product={product} />);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends Component {
    handleFilterTextChange = e => {
        const value = e.target.value;
        this.props.onFilterTextChange(value);
    };

    handleInStockChange = e => {
        this.props.onInStockChange(e.target.checked);
    };

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={this.handleFilterTextChange}
                    value={filterText}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={this.handleInStockChange}
                    />{" "}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    render() {
        return <input type="text" ref={this.textInput} />;
    }
}

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        };
    }

    handleFilterTextChange = filterText => {
        this.setState({ filterText });
    };
    handleInStockChange = inStockOnly => {
        this.setState({ inStockOnly });
    };
    render() {
        return (
            <div class="container">
                <br />
                <br />
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onInStockChange={this.handleInStockChange}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <ProductTable
                    products={DATA}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <CustomTextInput />
            </div>
        );
    }
}

export default FilterableProductTable;
