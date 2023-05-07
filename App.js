import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SplitPane from "react-split-pane";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <SplitPane split="vertical" minSize={50}>
        <div style={{ backgroundColor: "grey", height: "fit-content" }}>
          <h2>TV MAZE SHOWS</h2>
          <ul>
            <div className="shows">
              {items.map((item) => (
                <li key={item.id}>
                  <img src="american.jpeg" alt="name" />
                  <h3 className="show">Show Name: {item.show.name}</h3>

                  <h4 className="align">Type: {item.show.type}</h4>

                  <h4>
                    Language:{item.show.language} {item.show.premiered}
                  </h4>

                  <h4>Genre: {item.show.genres}</h4>

                  <b>Ratings: {item.show.rating.average}</b>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div style={{ backgroundColor: "grey", height: "max-content" }}>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <h3 className="show">Show Name: {item.show.name}</h3>
                <h3>Summary</h3>
                <p>{item.show.summary}</p>
              </li>
            ))}
          </ul>
          <button>BOOK TICKET</button>
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
