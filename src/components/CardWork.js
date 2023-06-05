import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CardWork = ({ title, text, url, img, width, className, altText }) => {
  return (
    <Link to={url}>
      <Card className={`mx-auto ${className ? className : ""}`}>
        <Card.Img className="mx-auto" width={width} src={img} alt={altText} />
        <div className="box">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </div>
      </Card>
    </Link>
  );
};

export default CardWork;
