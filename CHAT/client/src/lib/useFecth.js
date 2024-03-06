import { useEffect } from "react";

const useFecth = (url, setList) => {
  useEffect(() => {
    let token = localStorage.getItem("TOKEN");
    (async () => {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          TOKEN: token,
        },
      });
      let result = await response.json();
      setList(result);
    })();

    return () => {};
  }, [url, setList]);
};
export default useFecth;
