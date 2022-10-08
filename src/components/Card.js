import React from "react";

const Card = ({ user }) => {
  // traiter les dates en ISO
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  return (
    <div className="card">
      <img src={user.picture.large} alt={user.name.first} />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
      <p>
        {user.location.country}, {dateParser(user.dob.date)}
      </p>
      <em>Membre depuis : {user.registered.date}</em>
    </div>
  );
};

export default Card;
