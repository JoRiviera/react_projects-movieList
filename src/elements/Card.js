import React from "react";

const Card = ( {movie} ) => {
    return(
        <div>
            <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
            <img src={movie.img.src} alt={movie.img.alt} width='200'/>
            <ul>
                <li>{`Distributor: ${movie.distributor}`}</li>
                <li>{`Amount: ${movie.amout}`}</li>
            </ul>
        </div>
    );
};

export default Card;