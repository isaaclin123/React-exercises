import { useState } from "react";
function LightBulb() {
  const [isOn, toggle] = useState(false);
//   console.log(isOn);
  return (
    <div >
      <h1>The light bulb</h1>
          <img src={isOn ? "./light-on.png" : "./light-off.png"}
              alt="light bulb"
              onClick={()=>toggle(!isOn)}
          />
          
    </div>
  );
}
export default LightBulb;
