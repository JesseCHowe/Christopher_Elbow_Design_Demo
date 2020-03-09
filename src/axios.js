import axios from "axios";

const instance = axios.create({
  baseURL: "https://christopher-elbow-demo.firebaseio.com/"
});

export default instance;
