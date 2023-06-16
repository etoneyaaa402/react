import React from 'react';
import Product from './Product';

class SortTable extends React.Component {
    constructor(props) {
        super(props);
        this.sort = this.sort.bind(this);
        this.state = {
            products: this.props.products,
            sort: "fromLessToBigger",
        }
    }
    sort(e) {
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
            if (sortCritery === "№") sortCritery = "id";
            if (sortCritery === "Price") sortCritery = "price";
            if (sortCritery === "InStock") sortCritery = "inStock";

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

        const sortCritery = e.target.innerText;
        if (sortCritery === "Name") sortAlphabetically(this.state.sort);
        else sortNumerically(this.state.sort, sortCritery);
    }

    createProductRows() {
        return this.state.products.map(product => <Product key={product.id} product={product} />);
    };

    render() {
        return (
            <div className="sort_table">
                <table>
                    <tbody>
                        <tr>
                            {this.props.headings.map(heading => <th onClick={this.sort}>{heading}</th>)}
                        </tr>
                        {this.createProductRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SortTable;