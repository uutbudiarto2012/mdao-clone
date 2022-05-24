import "./Support.scss";

const Support = () => {
  return (
    <div className="support container mx-auto py-5">
      <div className="section-header">
        <h2 className="title text-center">
          Blockchain Agnostic For Multi-Chain Support
        </h2>
      </div>
      <p className="text-center w-[95%] md:w-[80%] mx-auto">
        To support its ecosystem of financial products, MANTRA DAO runs its DeFi
        services on a number of different blockchains. Started with the goal of
        building on Substrate as a Polkadot-first project, MANTRA DAO now also
        offers its services on Ethereum, Binance Smart Chain, and Polygon.
        Moving forward, it will one day be available on HECO, Solana and more!
      </p>
      <div className="grid p-2 grid-cols-2  md:grid-cols-4 gap-2 md:gap-5 bg-white my-10">
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/binance.svg" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">BNB Chain</h2>
          </div>
        </div>
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/eth.svg" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">Ethereum</h2>
          </div>
        </div>
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/polygon.svg" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">Polygon</h2>
          </div>
        </div>
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/polkadot.svg" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">Polkadot</h2>
          </div>
        </div>
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/solona.svg" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">Solona</h2>
          </div>
        </div>
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/astar.png" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">Astar</h2>
          </div>
        </div>
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/doge.png" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">Doge Coin</h2>
          </div>
        </div>
        <div className="suport-item p-5">
          <div className="image-container">
            <img src="/image/chainlink.png" alt="item" className="img-item" />
          </div>
          <div className="info">
            <h2 className="text-xl font-bold my-3 text">ChainLink</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
