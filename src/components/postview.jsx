import "../styles/post_view.css";
import { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Postview() {
  const [arr, setArr] = useState([]);
  const [gif, setGif] = useState(true);

  useEffect(() => {
    setGif(true);
    axios
      .get("https://instaclonebackkend.onrender.com")
      .then(function (response) {
        console.log(response);
        setArr(response.data);
        setGif(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (gif) {
    return (
        <div id="postview-img">
        </div>
    );
  }
  return (
    <>
      <div className="main">
        <div>
          <Link to="/">
            <img src= {require('../Images/home.png')} className="home" alt="home"/>
          </Link>
        </div>
        {arr.map((data, index) => {
          
          const base64String = btoa(
            new Uint8Array(data.PostImage.data.data).reduce(function (
              data,
              byte
            ) {
              return data + String.fromCharCode(byte);
            },
            "")
          );
          
          return (
            <>
              <section className="container" key={data._id}>
                <div className="one">
                  <div className="nav">
                    <h4 className="name">{data.name}</h4>
                  </div>
                  <p className="med">{data.location}</p>
                </div>

                <img
                  className="img"
                  src={`data:image/png;base64,${base64String}`}
                  alt=""
                />
                <div className="two">
                  <div className="likes">
                  </div>
                  <p className="med">{data.Date}</p>
                </div>
                <div className="three">
                  <p className="med">{data.likes} Likes</p>
                  <h4 className="name">{data.description}</h4>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Postview;
