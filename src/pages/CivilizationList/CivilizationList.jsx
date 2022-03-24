import { useEffect, useState } from "react";
import { getAllCivilizations } from "../../Services/aoe-api";
import { Link } from "react-router-dom";

const CivilizationList = () => {
  const [civs, setCivs] = useState([])

  useEffect(()=> {
    getAllCivilizations()
    .then(civData => setCivs(civData.civilizations))
  },[])

  return ( 
    <>
    {civs.map(civ => {
      <h1>{civ.name}</h1>
    })}
    </>
   );
}
 
export default CivilizationList;