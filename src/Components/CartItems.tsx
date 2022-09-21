import React, { Fragment, useState } from "react";

const CartItems = () => {
    let QUANTITY = 1;
    const [quantity, setQuantity] = useState(QUANTITY);

    const handleIncrement: React.MouseEventHandler = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        // props.setIncrementQuantity(quantity, Number(props.price));
    };

    const handleDecrement: React.MouseEventHandler = () => {
        setQuantity((prevQuantity) => (prevQuantity !== 0 && prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
        // props.setDecermentQuantity(quantity, Number(props.price));
    };

    const handleRemoveEvent: React.MouseEventHandler = () => {
        // props.onRemoveCart(props.id);
    };

    return (
        <Fragment>
            <div className="card m-4">
                <div className="row align-items-center text-center">
                    <div className="col-sm-2 ">
                        <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/g/3/-original-imaggbrccwsnygar.jpeg?q=70" className={`card-img-top m-3`} alt="..." />
                    </div>
                    <div className="col-sm-10">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-sm-3 text-center">
                                    <div className="card-title fs-4">{"Google Pixel 6a"}</div>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <div className="fs-2">Cart Quantity</div>
                                    <div className="my-2">
                                        <button onClick={handleDecrement} title="increase" type="button" className="btn btn-outline-secondary">
                                            <span className="mx-1">-</span>
                                        </button>
                                        <span className="mx-4">{quantity}</span>
                                        <button onClick={handleIncrement} title="increase" type="button" className="btn btn-outline-secondary">
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <div className="card-text fs-4">₹ {43999}</div>
                                </div>
                                <div className="col-sm-2 text-center">
                                    <button onClick={handleRemoveEvent} title="removeItem" type="button" className="btn btn-danger">
                                        <i className="bi bi-trash">{" Remove "}</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CartItems;
