import React from "react";
import Button from "./Button";

const QuotesGenrator = (props) => {
    return (
        <>
        <p>{ props.quoteSelected ? `${props.quoteSelected.quote} - ${props.quoteSelected.author}` : ''}</p>
        <Button buttonValue='button quote' buttonEffect={props.setQuoteIndex} />
        </>
    )
}

export default QuotesGenrator;