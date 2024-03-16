import { useEffect, useState } from "react";




const Landin = () => {
    const [data, setData] = useState(false);

    useEffect(  () => {
        ( async () => {
            if (data) {
                const url = "http://localhost:3300/route/api/link/read";
                const response = await fetch(url, {
                    method: "GET",
                });
                const result = await response.json();
                const Rdata = result.data[0].Link;
                console.log(Rdata);
                location.replace(`${Rdata}`);
                setData(!data)
            }
        })()
    },[data])
   

    return (
        <div>
            <div className="contuner">
                <button onClick={()=>setData(!data)}>Join us</button>
            </div>
        </div>
    )
}


export default Landin;
