import React from "react";
import "../assets/scss/dashboard.scss";
import img from "../assets/image/profilepicture.png";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="row content">
            <div className="flex-child text">
              <h1>HI!</h1>
              <h2>Your Account is Verified</h2>
            </div>
            <div className="flex-child box-container">
              <img src={img} className="image" />
            </div>
          </div>
          <div className="text-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              nam ut, nostrum dolorum maxime iste, atque cumque officiis ea
              maiores fugit temporibus labore tempore aut deleniti inventore
              mollitia minus deserunt. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Enim consequuntur, voluptatum accusantium
              quisquam quam qui error eos. Odit, aspernatur libero, fugit
              accusamus quae in veniam repellat, laudantium magnam doloremque
              debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minus ea adipisci rerum, velit reprehenderit obcaecati quos optio
              eligendi. Ipsum, eos excepturi. Reiciendis, ipsum. Voluptate illo
              cupiditate illum voluptatibus sapiente repellendus? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Est alias modi
              inventore. Repudiandae soluta ut similique quis delectus a, vel,
              animi esse rerum veritatis recusandae voluptas voluptatem beatae
              distinctio nobis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
