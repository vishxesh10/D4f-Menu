import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./components/Page";
import { Instagram, Phone, MapPin, QrCode } from "lucide-react";
import "./App.css";

const App = () => {
  const bookRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: 400,
    height: 600,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setDimensions({
          width: w * 0.95,
          height: Math.min(window.innerHeight * 0.85, 700),
        });
      } else {
        setDimensions({
          width: 450,
          height: 650,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <div className="book-wrapper">
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={200}
          maxWidth={1000}
          minHeight={300}
          maxHeight={1533}
          showCover={true}
          mobileScrollSupport={true}
          className="menu-book"
          ref={bookRef}
        >
          {/* Page 1: Cover */}
          <Page>
            <div className="cover-page">
              <img
                src="/logo.jpeg"
                alt="D4F Logo Background"
                className="cover-bg-image fade-in"
              />
              <div className="cover-overlay"></div>
              <div className="cover-content fade-in">
                <h3 className="cover-subtitle">FOOD MENU</h3>
              </div>
            </div>
          </Page>

          {/* Page 2: All Burgers */}
          <Page number="1">
            <h2 className="menu-section-title">Burgers</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <img
                src="/images/items/veg_burger.png"
                alt="Burger"
                className="menu-item-image fade-in"
                style={{ width: "60px", height: "60px" }}
              />
              <img
                src="/images/items/chicken_burger.png"
                alt="Chicken Burger"
                className="menu-item-image fade-in"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className="menu-items">
              <div className="sub-category">VEG BURGERS</div>
              <MenuItem name="Allo Patty Slam" price="₹59" />
              <MenuItem name="Veggie Delight" price="₹79" />
              <MenuItem name="Cheezila Burger" price="₹99" />
              <MenuItem name="Burger-E-Paneer" price="₹129" />
              <MenuItem name="D4F iiconic" price="₹199" />

              <div className="sub-category">NON-VEG BURGERS</div>
              <MenuItem name="Chicken Kick" price="₹69" />
              <MenuItem name="Double Chicken" price="₹149" />
              <MenuItem name="Chicken Fried" price="₹119" />
              <MenuItem name="D4F iiconic (NV)" price="₹209" />
            </div>
          </Page>

          {/* Page 3: Pasta */}
          <Page number="2" centered>
            <h2 className="menu-section-title">Pasta</h2>
            <img
              src="/images/items/pasta.png"
              alt="Pasta"
              className="menu-item-image large-image fade-in"
            />
            <div className="menu-items">
              <div className="sub-category">VEG PASTA</div>
              <MenuItem name="Alfredo Bliss" price="₹169" />
              <MenuItem name="Rosso Pasta" price="₹179" />
              <MenuItem name="Tangy Tangle" price="₹189" />
              <div className="sub-category">NON-VEG PASTA</div>
              <MenuItem name="Creamy Chicken" price="₹189" />
              <MenuItem name="Roma Roast" price="₹209" />
              <MenuItem name="Pink Temptation" price="₹229" />
            </div>
          </Page>

          {/* Page 4: Fries & Poutine */}
          <Page number="3" centered>
            <h2 className="menu-section-title">Fries</h2>
            <img
              src="/images/items/fries.png"
              alt="Fries"
              className="menu-item-image large-image fade-in"
            />
            <div className="menu-items">
              <div className="sub-category">CRISPY FRIES</div>
              <MenuItem name="Masala Bomb" price="₹99" />
              <MenuItem name="Cheesy Dust" price="₹129" />
              <MenuItem name="Fries Gone Cheesy" price="₹149" />
              <MenuItem name="iiconic Phase 1" price="₹199" />
              <div className="sub-category">NON-VEG & POUTINE</div>
              <MenuItem name="iiconic Phase 2" price="₹249" />
              <MenuItem
                name="NV Poutine"
                price="₹269"
                description="Canadian Speciality"
              />
            </div>
          </Page>

          {/* Page 5: Popusas & Fried Rice */}
          <Page number="4" centered>
            <h2 className="menu-section-title">Specialities</h2>
            <img
              src="/images/items/specialities.png"
              alt="Specialities"
              className="menu-item-image large-image fade-in"
            />
            <div className="menu-items">
              <div className="sub-category">POPUSAS</div>
              <MenuItem name="Pupusas (Veg)" price="₹199" />
              <MenuItem name="Pupusas (NV)" price="₹249" />
              <div className="sub-category">FRIED RICE</div>
              <MenuItem name="Fried Rice" price="₹99" />
              <MenuItem name="Rice with Paneer" price="₹159" />
              <MenuItem name="Chicken Fried Rice" price="₹159" />
            </div>
          </Page>

          {/* Page 6: Momos & Chicken */}
          <Page number="5" centered>
            <h2 className="menu-section-title">Momos & Wings</h2>
            <img
              src="/images/items/momos_wings.png"
              alt="Momos and Wings"
              className="menu-item-image large-image fade-in"
            />
            <div className="menu-items">
              <MenuItem name="Veg Momos" price="₹79" />
              <MenuItem name="Paneer Momos" price="₹129" />
              <MenuItem name="Chicken Momos" price="₹129" />
              <div className="sub-category">CHICKEN WINGS</div>
              <MenuItem name="Wings (6pcs)" price="₹159" />
              <MenuItem name="KFC Style (6pcs)" price="₹199" />
            </div>
          </Page>

          {/* Page 7: Mojitos */}
          <Page number="6" centered>
            <h2 className="menu-section-title">Drinks</h2>
            <img
              src="/images/items/mojito.png"
              alt="Mojito"
              className="menu-item-image large-image fade-in"
            />
            <div className="menu-items">
              <MenuItem name="Mint Mojito" price="₹59" />
              <MenuItem name="Watermelon" price="₹59" />
              <MenuItem name="Pineapple" price="₹79" />
              <MenuItem name="Blue Lagoon" price="₹99" />
              <MenuItem name="Bubblegum" price="₹79" />
              <MenuItem name="Peach Tea" price="₹69" />
            </div>
          </Page>

          {/* Final Page: Thank You */}
          <Page>
            <div className="final-page">
              <h2 className="menu-section-title" style={{ fontSize: "2.5rem" }}>
                THANK YOU
              </h2>
              <img
                src="/logo.jpeg"
                alt="D4F Logo"
                className="logo fade-in"
                style={{ width: "100px", margin: "1.5rem 0" }}
              />
              <p
                style={{
                  color: "var(--d4f-green)",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                }}
              >
                VISIT US AGAIN
              </p>
              <div className="contact-info">
                <div className="info-item">
                  <Instagram size={28} />
                  <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                    d4f.food
                  </span>
                </div>
              </div>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>
      <div className="controls-hint mobile-only">
        <span>Swipe to explore the menu</span>
      </div>
      <div className="controls-hint desktop-only">
        <span>Click or drag corners to flip</span>
      </div>
    </div>
  );
};

const MenuItem = React.memo(({ name, price, description }) => (
  <div className="menu-item-container fade-in">
    <div className="menu-item">
      <span className="item-name">{name}</span>
      <span className="item-price">{price}</span>
    </div>
    {description && (
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--d4f-green)",
          fontStyle: "italic",
          marginTop: "2px",
          opacity: 0.9,
          textAlign: "center",
        }}
      >
        {description}
      </p>
    )}
  </div>
));

export default App;
