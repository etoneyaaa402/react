const CatalogItem = (props) => {

    const showPriceWithDiscount = () => {
        return (
            <>
                <div className="discount-price">{props.product.price * (100 - props.product.discount) / 100}$</div>
                <div className="initial-price">{props.product.price} $</div>
            </>
        );
    }

    const showPrice = () => {
        return (
            <>
                <div className="price">{props.product.price}$</div>
            </>
        );
    }
    return (
        <div className="catalog-item">
            <div className="item-left">
                <div className="item-props">
                    <div className="new" style={{ display: props.product.isNew ? "block" : "none" }}>Новинка</div>
                    <div className="discount">{props.product.discount}%</div>
                </div>
                <div className="catalog-img" style={{ backgroundImage: `url(${props.product.img})`, backgroundSize: "cover", }}></div>
            </div>
            <div className="item-right">
                <div className="product-name">{props.product.name}</div>
                <div className="product-price">
                    {props.product.discount === "0" ? showPrice() : showPriceWithDiscount()}
                </div>
                <div className="product-amount">Количество: {props.product.inStock} шт.</div>
                <div className="product-description">{props.product.description}</div>
            </div>
        </div>
    );
}

export default CatalogItem;