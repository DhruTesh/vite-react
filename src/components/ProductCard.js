import React from "react";
import BuyForm from "./BuyForm";

async function BuyProduct({ id }) {
    // API Documentation
    // https://dummyjson.com/docs/product
    const data = await fetch("https://dummyjson.com/products", {
        method: "POST",
    })
    .then((res) => res.json())
    .then((data) => data);

    return data;
}

function ProductCard({ props }) {
    return React.createElement(
        'div',
        { className: 'aspect-[3/4] border p-5 text-left flexCol gap-5 rounded-md max-w-[25rem] min-w-[10rem]' },
        React.createElement(
            'img',
            {
                src: props.thumbnail,
                alt: props.thumbnail,
                className: 'w-full bg-gray-300 object-contain aspect-video'
            }
        ),
        React.createElement(
            'h1',
            { className: 'text-2xl text-left text-slate-900 font-medium' },
            props.title
        ),
        React.createElement(
            'p',
            { className: 'text-sm text-left bg-slate-500 text-white rounded-full w-fit px-2 py-1' },
            props.category
        ),
        React.createElement(
            'p',
            { className: 'w-fit text-xl text-slate-800 font-medium' },
            `Price : ${props.price}`
        ),
        React.createElement(
            'p',
            { className: 'text-slate-900 font-normal text-base w-fit' },
            props.description
        ),
        React.createElement(BuyForm, {
            email: "haider@edquest.propp",
            orderData: props
        })
    );
}

export default ProductCard;