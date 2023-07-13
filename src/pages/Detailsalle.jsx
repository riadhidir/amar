import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detailsalle = () => {
  const [salle, setSalle] = useState(null);
  let { salleId } = useParams();
    useEffect(()=>{

        const fetchSalle = async ()=>{
            try {
                const response = await axios.get(`http://localhost:3000/api/salle/${salleId}`,{withCredentials:true});
                setSalle(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSalle();
    },[]);
  return (
    <div>Detailsalle</div>
  )
}

export default Detailsalle