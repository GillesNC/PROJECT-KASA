import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

function ContentHousing () {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl)

    return (
        
        <article>
            <div className="housing__title">
                <h2>{flatExist.title}</h2>
                <p>{flatExist.location}</p>
            </div>

            <div className="housing__tag">
                <span>{flatExist.tags}</span>
            </div>

            <div className="housing__star">
                <span>{flatExist.rating}</span>
                <div className="housing__profil">
                    <p>{flatExist.host.name}</p>
                    <img src={flatExist.host.picture} alt={flatExist.host.name} />
                </div>
            </div>
        </article>
    )
}

export default ContentHousing;