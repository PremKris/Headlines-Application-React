import React from "react";
import defaultImage from "../assets/images/21601-news-logo.png";

function Newitems(props) {
  let { title, description, imgurl, newsurl, date, author, source } = props;
  return (
    <div className="card position-relative" style={{ width: "18rem" }}>
      <span
        className="badge rounded-pill text-light"
        style={{
          position: "absolute",
          top: "3px",
          right: "-10px",
          zIndex: "1",
          backgroundColor: "rgb(59 203 228)",
        }}
      >
        {source}
      </span>
      <img
        src={imgurl ? imgurl : defaultImage}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description ? description : "No description Available"}
        </p>
        <small class="text-muted">{new Date(date).toGMTString()}</small>
        <p>
          <strong class="card-text">
            <small class="text-muted">-By {author}</small>
          </strong>
        </p>
        <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">
          Click Here to read more...
        </a>
      </div>
    </div>
  );
}

export default Newitems;
