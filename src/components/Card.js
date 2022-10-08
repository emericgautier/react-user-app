import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.picture.large} alt={user.name.first} />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
      <p>
        {user.location.country}, {user.dob.date}
      </p>
      <em>Membre depuis : {user.registered.date}</em>
    </div>
  );
};

export default Card;
