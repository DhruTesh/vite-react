import React from "react";

function handleBuy(form) {
    return fetch("http://localhost:3001/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: form.email,
            order: form.order,
        }),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    });
}

function BuyForm({ email, orderData }) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'button',
            {
                className: 'bg-red-900 rounded text-red-900 px-4 py-2',
                onClick: () => handleBuy({ email, order: orderData })
            },
            'Buy Product'
        )
    );
}

export default BuyForm;