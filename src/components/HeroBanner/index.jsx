import "./HeroBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BsFillPlayFill } from "react-icons/bs";
import "swiper/css";

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <div className="left">
        <div className="asix-plus-logo-wrapper">LOGO</div>
        <div className="text-version">2.0</div>
      </div>
      <div className="right">
        <Swiper
          className="swipper"
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="item">
            <h2>
              Total <span>Bought Back</span>
            </h2>
            <h3>
              $ 23.057.070 <span>Asix</span>
            </h3>
          </SwiperSlide>
          <SwiperSlide className="item">
            <h2>
              Total <span>Bought Back</span>
            </h2>
            <h3>
              $ 23.057.070 <span>Asix2</span>
            </h3>
          </SwiperSlide>
        </Swiper>
        <div className="text">
          <p>
            MANTRA DAO is a community-governed DeFi platform focused on Staking,
            Lending, Governance, and Decentralized Launchpad services.
          </p>
          <p>
            Its objective is to give financial control back to the people, so
            that as a collective, they may store and grow their wealth together.
            MANTRA DAO aims to leverage crowd wisdom to create a
            community-governed, transparent, and decentralized ecosystem for web
            3.0.
          </p>
          <p>
            Started with the goal of building on Substrate as a Polkadot-first
            project, MANTRA DAO is now a multi-chain ecosystem offering services
            on Ethereum, Binance Smart Chain, and Polygon.
          </p>
        </div>
        <div className="action">
          <button>
            <span>Watch Info</span>
            <BsFillPlayFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
