// AuthorCard.jsx
import React from 'react';
import authorImg from "../../assets/user.png";
import { Link } from 'react-router-dom';

const AuthorCard = ({ author }) => {
  return (
    <div className="card">
      <div className="top-container">
        <img src={authorImg} className="img-fluid profile-image" width="70" alt="Author" />
        <div className="ml-3">
          <h5 className="name">{author}</h5>
          <Link to={`/author/${author}`} style={{ textDecoration: 'none', color: 'black' }}>
            Click To Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
