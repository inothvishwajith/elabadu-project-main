import React from "react";
import "./Home.css";
import Product from "./Product";
import main from "./img/home.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={main}
          alt="Logo"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Oculus Gaming VR Set"
            price={65000.00}
            rating={5}
            image="https://ik.imagekit.io/6nc1hxttu/Vrg.png?updatedAt=1680093314762"
          />
          <Product
            id="49538094"
            title="SAMSUNG 52 Smart TV"
            price={99000.00}
            rating={4}
            image="https://ik.imagekit.io/6nc1hxttu/tv.png?updatedAt=1680093316967"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Macbook Pro"
            price={499000.00}
            rating={3}
            image="https://ik.imagekit.io/6nc1hxttu/laptop.png?updatedAt=1680093987066"
          />
          <Product
            id="23445930"
            title="New Apple 14 Pro 256 Gb White Color"
            price={450000.00}
            rating={5}
            image="https://ik.imagekit.io/6nc1hxttu/Apple.png?updatedAt=1680093312993"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={350000.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="New Oculus Virtual Reality Headset"
            price={430000.00}
            rating={3}
            image="https://ik.imagekit.io/6nc1hxttu/drone.png?updatedAt=1680093316186"
          />
          <Product
            id="23445930"
            title="Dji Phantom 4 Pro Drone"
            price={310000.00}
            rating={5}
            image="https://ik.imagekit.io/6nc1hxttu/djid.png?updatedAt=1680094433416"
          />
          <Product
            id="3254354345"
            title="DJI Osmo Pocket Camera"
            price={120000.00}
            rating={4}
            image="https://ik.imagekit.io/6nc1hxttu/djib.png?updatedAt=1680094433237"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="DJI Osmo Mobile 3 Gimbal"
            price={142000.00}
            rating={3}
            image="https://ik.imagekit.io/6nc1hxttu/gimble.png?updatedAt=1680094434076"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={150000.00}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New JBL A4 Wireless Speaker"
            price={45000.00}
            rating={4}
            image="https://ik.imagekit.io/6nc1hxttu/JBL.png?updatedAt=1680093315841"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="JBL Pulse 3 Wireless Bluetooth Speaker Altavoz Bluetooth IPX7 waterproof Stereo Bass Som Jbl Enceinte wireless Speakers"
            price={199.99}
            rating={3}
            image="https://ik.imagekit.io/6nc1hxttu/Bluetooth-Speaker.png?updatedAt=1680093317294"
          />
          <Product
            id="23445930"
            title="Microsoft Surface Guw Bluetooth Wireless On Ear Headphones With Mic Clear"
            price={98.99}
            rating={5}
            image="https://ik.imagekit.io/6nc1hxttu/Headphone1.png?updatedAt=1680093313640"
          />
          <Product
            id="3254354345"
            title="Genuine Solo HD Beats by Dr. Dre Headphones Wired Monochromatic Matte Black"
            price={598.99}
            rating={4}
            image="https://ik.imagekit.io/6nc1hxttu/Headphones.png?updatedAt=1680093317081"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung B7 LED Smart Watch"
            price={18500.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon G Smart Watch | Adroide"
            price={35000.00}
            rating={5}
            image="https://ik.imagekit.io/6nc1hxttu/Watch.png?updatedAt=1680093317023"
          />
          <Product
            id="3254354345"
            title="ROG 5G High Speed Wireless Router - Republic of Gamers"
            price={46000.00}
            rating={5}
            image="https://ik.imagekit.io/6nc1hxttu/Router.png?updatedAt=1680093317073"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Hogwarts Voltermote Magic Fire Wands"
            price={17000.00}
            rating={5}
            image="https://ik.imagekit.io/6nc1hxttu/magic_fire_wand_.jpg?updatedAt=1680095042197"
          />
          <Product
            id="49538094"
            title="Oculus Quest 2 Gaming VR Headset (128GB)"
            price={132000.00}
            rating={4}
            image="https://ik.imagekit.io/6nc1hxttu/vr.png?updatedAt=1680093308465"
          />
      
        </div>
      </div>
    </div>
  );
}

export default Home;