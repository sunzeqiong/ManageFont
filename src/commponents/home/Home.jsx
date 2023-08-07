import React, { useEffect, useState } from "react";
// import Silder from "./Slider.jsx";
// import Upfile from "./Upfile.jsx";
import { Button, notification } from "antd";

const Home = () => {
    // 定义倒计时时间
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   openNotification();
  //   let time = setTimeout(() => {
  //     setCount(count - 1);
  //   }, 1000);
  //   if (count === 0) {
  //     clearTimeout(time);
  //   }
  // }, [count]);
  
  // const openNotification = () => {
  //   notification.destroy();
  //   notification.open({
  //     message: `${count}`,
  //   });
  // };
const handClick=()=>{
  setCount(count+1);
}
  return <>
  <div>
    <button onClick={handClick}>+</button>
  </div>
  </>;
};
export default Home;
