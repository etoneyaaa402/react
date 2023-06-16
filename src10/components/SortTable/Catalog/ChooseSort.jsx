import React from 'react';

class ChooseSort extends React.Component {
    constructor(props) {
        super(props);

        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSortChange(event) {
        this.props.onSortChange(event.target.id)

        // Reset "checked" of all inputs
        let inputs = document.querySelectorAll(".sort input");
        inputs.forEach(input => {
            if (input.id === event.target.id) return;
            input.checked = false;
        })
    }

    render() {
        return (
            <>
                <div className="choose-sort">
                    <h1>Choose sort: </h1>
                    <div className="sorts">
                        <div className="sort">
                            <input type="checkbox" name="name" id="name" onChange={this.handleSortChange} />
                            <label htmlFor="name">Sort by name</label>
                        </div>
                        <div className="sort">
                            <input type="checkbox" name="price" id="price" onChange={this.handleSortChange} />
                            <label htmlFor="price">Sort by price</label>
                        </div>
                        <div className="sort">
                            <input type="checkbox" name="amount" id="amount" onChange={this.handleSortChange} />
                            <label htmlFor="">Sort by amount</label>
                        </div>
                        <div className="sort">
                            <input type="checkbox" name="discount" id="discount" onChange={this.handleSortChange} />
                            <label htmlFor="discount">Sort by discount</label>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ChooseSort;