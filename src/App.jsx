// src/App.jsx
import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  let totalStrength;
  let totalAgility;
  let message;
  const handleAddFighter = (fighter) => {
    setTeam([...team, fighter]);

    setZombieFighters(
      zombieFighters.filter((thisFighter) => thisFighter.id !== fighter.id)
    );
    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((thisFighter) => thisFighter.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  return (
    <>
      <div className="notice">Total Money: ${money}</div>
      <div className="notice">{message}</div>
      <div>
        <ul>
          {zombieFighters.map((fighter, idx) => (
            <ol key={idx}>
              {money < fighter.price ? <div>Not Enough Money!</div> : null}
              <img src={fighter.img} />
              <p>Fighter Name: {fighter.name}</p>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>

              <button onClick={() => handleAddFighter(fighter)}>
                Add Fighter
              </button>
            </ol>
          ))}
        </ul>
      </div>
      {team.length === 0 ? (
        <div className="notice">Pick some team members!</div>
      ) : (
        <div className="notice"> YOUR FIGHTING TEAM! </div>
      )}
      <div className="notice">
        Team Strength:{" "}
        {
          (totalStrength = team.reduce(
            (acc, fighter) => acc + fighter.strength,
            0
          ))
        }
      </div>

      <div className="notice">
        Team Agility:{" "}
        {
          (totalAgility = team.reduce(
            (acc, fighter) => acc + fighter.agility,
            0
          ))
        }{" "}
      </div>
      <div>
        <ul>
          {team.map((fighter, idx) => (
            <ol key={idx}>
              <img src={fighter.img} />
              <p>Fighter Name: {fighter.name}</p>
              <p>${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove Fighter
              </button>
            </ol>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
