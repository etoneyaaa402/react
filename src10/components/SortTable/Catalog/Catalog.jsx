import React from 'react';
import CatalogItem from './CatalogItem';
import ChooseSort from './ChooseSort';
import Search from './Search';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.sort = this.sort.bind(this);
        this.createCatalogItems = this.createCatalogItems.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);


        this.state = {
            searchString: "",
            products: this.props.products,
            sort: "fromBiggerToLess",
        }
    }

    sort(sortCritery) {
        const sortAlphabetically = (currentSort) => {
            let sortFromLessToBigger = () => {
                let productsSorted = this.state.products.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
                this.setState({
                    products: productsSorted,
                    sort: "fromLessToBigger"
                })
            }
            let sortFromBiggerToLess = () => {
                let productsSorted = this.state.products.sort(function (a, b) {
                    return b.name.localeCompare(a.name);
                });
                this.setState({
                    products: productsSorted,
                    sort: "fromBiggerToLess"
                })
            }

            if (currentSort === "fromLessToBigger") sortFromBiggerToLess();
            if (currentSort === "fromBiggerToLess") sortFromLessToBigger();
        }
        const sortNumerically = (currentSort, sortCritery) => {

            // To match initial property of index.js
            if (sortCritery === "amount") sortCritery = "inStock";

            let sortFromLessToBigger = (sortCritery) => {
                let productsSorted = this.state.products.sort(function (a, b) {
                    return a[sortCritery] - b[sortCritery];
                });
                this.setState({
                    products: productsSorted,
                    sort: "fromLessToBigger"
                })
            }
            let sortFromBiggerToLess = (sortCritery) => {
                let productsSorted = this.state.products.sort(function (a, b) {
                    return b[sortCritery] - a[sortCritery];
                });
                this.setState({
                    products: productsSorted,
                    sort: "fromBiggerToLess"
                })
            }

            if (currentSort === "fromLessToBigger") sortFromBiggerToLess(sortCritery);
            if (currentSort === "fromBiggerToLess") sortFromLessToBigger(sortCritery);
        }

        if (sortCritery === "name") sortAlphabetically(this.state.sort);
        else sortNumerically(this.state.sort, sortCritery);
    }

    handleSortChange(sortCritery) {
        this.setState({ sortCritery: sortCritery, });
        this.sort(sortCritery);
    }

    handleSearchInputChange(searchString) {
        searchString = searchString.toLowerCase();
        this.setState({searchString: searchString,})

        if (searchString === "") {
            this.setState({products: this.props.products,});
            return;
        }

        let products = this.props.products;

        let foundProducts = [];
        for (let i = 0; i < products.length; i++) {
            let productName = products[i].name.toLowerCase();
            if (productName.includes(searchString)) foundProducts.push(products[i]);
            this.setState({products: foundProducts,});
        }
    }

    createCatalogItems() {
        let products = this.state.products;

        let displayProducts = [];

        for (let i = 0; i < products.length; i++) {
            if (products[i].isNew) {
                displayProducts.unshift(<CatalogItem key={i} product={products[i]} />);
                continue;
            }
            displayProducts.push(<CatalogItem key={i} product={products[i]} />)
        }
        if (products.length === 0) return <h1 className="no-match">No match</h1>
        return displayProducts;
    }

    render() {
        return (
            <>
                <div className="main-catalog">
                    <ChooseSort onSortChange={this.handleSortChange} />
                    <div className="main-catalog-content">
                        <Search onSearchInputChange={this.handleSearchInputChange} />
                        <div className="catalog">
                            {this.createCatalogItems()}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Catalog;