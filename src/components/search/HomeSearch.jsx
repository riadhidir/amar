import React, { useEffect, useState } from "react";
import Select from "./Select";
import Chainedselect from "./Chainedselect";
import wilayas from "../../data/wilayas.json";
import typeEvenement from "../../data/typeEvenement.json";
import communes from "../../data/communes.json";
const HomeSearch = () => {
    const [wilaya, setWilaya] = useState("");
    const [commune, setCommune] = useState("");
    const [typeEvent, setTypeEvent] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        console.log({ commune, wilaya, date, typeEvent });
    }, [commune, wilaya, date, typeEvent]);
    useEffect(()=>{
        setCommune("")
    },[wilaya]);
    return (
        <form className=" rounded-lg flex gap-5 w-full  p-5">
            <Select
                label="Type d'evenement"
                data={typeEvenement}
                setData={setTypeEvent}
                value={typeEvent}
            />
             
            <Select label="Wilaya" data={wilayas} setData={setWilaya}   value={wilaya} />

            <Chainedselect
                label="Commune"
                data={communes}
                setData={setCommune}
                indexTitle="wilaya_id"
                indexData={wilaya}
                value={commune}
            />

            <input
                type="date"
                placeholder="Type here"
                className="input input-bordered border-black text-black input-lg bg-[rgba(98,238,247,0.56)] w-full"
                onChange={(e) => setDate(e.target.value)}
            />
            <button className="btn btn-lg border-black bg-[rgba(98,238,247,0.56)]">Rechercher</button>
        </form>
    );
};

export default HomeSearch;
