

const PostData = async (url, ID, setMessage) => {
    try {
        
        let token = localStorage.getItem("TOKEN");
        let response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            TOKEN: token,
            mode: "no-cors",
          },
          body: JSON.stringify({ID}),
        });
        let result = await response.json();
        setMessage(result);
        
    } catch (error) {
        console.log(error);
    }
}
export default PostData;