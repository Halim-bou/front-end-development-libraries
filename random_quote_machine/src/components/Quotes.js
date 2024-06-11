import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuotesGenrator = (props) => {
    return (
        < >
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <div className="flex">
                        <FontAwesomeIcon className="fa fa-quote-left" ></FontAwesomeIcon>
                        <Card.Text id="text" className="fs-3 mt-4 mx-2 text-center">
                            {props.quoteSelected.quote}
                        </Card.Text>
                    </div>
                    <Card.Subtitle id="author" className="my-4 fs-6 text-end">
                        {`-${props.quoteSelected.author}`}
                    </Card.Subtitle>
                        <div className="d-flex justify-content-between align-items-center my-4">
                        <a id="tweet-quote" href={`https://www.twitter.com/intent/tweet?text=${props.quoteSelected.quote}-${props.quoteSelected.author}&hashtags=random-quote-machine`} rel="noreferrer" className="btn btn-primary item-start" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                        </a>
                        <Button id="new-quote" onClick={props.setQuoteIndex}  className="justify-end">Next quote</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default QuotesGenrator;