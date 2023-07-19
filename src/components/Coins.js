import React, { useState } from 'react';
import CoinItem from './CoinItem';
import Coin from '../routes/Coin';
import { Link } from 'react-router-dom';

import './Coins.css';

const Coins = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = props.coins.filter((coin) =>
    coin.symbol.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div className='container'>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '500px',
          }}>
            <input
              type='text'
              placeholder='Search coins...'
              value={searchTerm}
              onChange={handleSearch}
              style={{
                flex: '1',
                border: 'none',
                outline: 'none',
                padding: '5px',
                fontSize: '16px',
              }}
              className='search-input'
            />
            <i className='fas fa-search' style={{ marginLeft: '5px', color: '#888', cursor: 'pointer' }}></i>
          </div>
        </div>

        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {filteredCoins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <CoinItem coins={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;
