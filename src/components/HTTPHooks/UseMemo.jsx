import { useMemo, useState } from "react";

export const ArrayList = () => {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
    const [query, setquery] = useState("");
    const [clicks, setClicks] = useState(0); 

    const filteredPlanets = useMemo(() => planets.filter(planet => planet.includes(query)), [planets, query]);

    return (
        <>
            <button onClick={()=> setClicks(clicks + 1)}>Number of clicks: {clicks}</button>
             <ul>
            {filteredPlanets.map(planet => (
                <li key={planet}>
                  {planet}
                </li>
            ))}
        </ul>
        </>
    )
}
  