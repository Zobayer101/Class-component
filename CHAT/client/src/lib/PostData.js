

const PostData = async (url, ID, setMessage, setProdata=null) => {
  try {
    let token = localStorage.getItem("TOKEN");
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: token,
        
      },
      body: JSON.stringify({ ID }),
    });
    let result = await response.json();
    setMessage(result.message);
    setProdata && setProdata(result.data);
  } catch (error) {
    console.log(error);
  }
};
export default PostData;