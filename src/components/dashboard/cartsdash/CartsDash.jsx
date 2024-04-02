import React from 'react'
import { cardsData } from "../../../data/cardsData";
import Card from '../carddash/Card';
import "./cards.css";
export default function CartsDash() {
    return (
        <div className="Cards">
            {cardsData.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}> 
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                );
            })}
        </div>
    )
}
