const Product = (props) => {

    function putObjPropsInTd(obj) {
        let propsArr = [];
        
        const setColor = (amount) => {
            let bgColor;
            if (amount < 3) bgColor = { backgroundColor: "yellow" };
            if (amount === 0) bgColor = { backgroundColor: "red" };
            return bgColor;
        }

        for (let prop in obj) {

            if (prop === "price") {
                propsArr.push(<td>${obj[prop]}</td>);
                continue;
            }
            if (prop === "inStock") {
                propsArr.push(<td style={setColor(obj[prop])}>{obj[prop]}</td>);
                continue;
            }

            propsArr.push(<td>{obj[prop]}</td>);
        }
        return propsArr;
    }
    return (
        <tr>
            {putObjPropsInTd(props.product)}
        </tr>
    );
}

export default Product;