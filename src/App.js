import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=bnvTG3Atu32vCjo0smQPxC3ESxFu3sAlszooktjs_OA&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <span>جستجو : </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" onClick={fetchImage}>
          ارسال
        </button>
      </div>
      <div className="gallery">
        {result &&
          result.map((item) => (
            <img src={item.urls.regular} alt="" key={item.id} />
          ))}
      </div>
    </div>
  );
}

export default App;
