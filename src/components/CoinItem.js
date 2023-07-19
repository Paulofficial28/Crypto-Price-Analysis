import React from 'react'

import './Coins.css'

const CoinItem = (props) => {
    const volumeInMillions = (props.coins.total_volume / 1000000).toFixed(2);
    const marketCapInMillions = (props.coins.market_cap / 1000000).toFixed(2);
    
    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>${volumeInMillions}M</p>
            <p className='hide-mobile'>${marketCapInMillions}M</p>
        </div>
    )
}

export default CoinItem
