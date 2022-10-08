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

  // calculer la différence, membre depuis...
  const dayCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timestamp = Date.parse(date);

    return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
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
      <em>Membre depuis : {dayCalc(user.registered.date)} jours</em>
    </div>
  );
};

export default Card;
