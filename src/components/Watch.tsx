import { useState, useEffect } from "react";

interface WatchProps {
  city: string;
  offset: number;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Watch({ city, offset, handleClose }: WatchProps) {
  const timezoneOffset = new Date().getTimezoneOffset() * 6 * 10 ** 4;
  const dateValue = () => {
    return new Date(Date.now() + timezoneOffset + offset * (3.6 * 10 ** 6));
  };

  const [timeCurrent, setTimeCurrent] = useState(dateValue());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeCurrent(dateValue());
      console.log("+1");
    }, 1000);

    return () => clearInterval(id);
  });

  return (
    <div className="watch">
      <div className="watch-city">{city}</div>
      <div className="face">
        <div className="hour-hand" style={{transform: `rotate(${timeCurrent.getHours()%12*30}deg)`}}>
          <div className="arrow"></div>
          <div className="line"></div>
        </div>
        <div className="minute-hand" style={{transform: `rotate(${timeCurrent.getMinutes()*6}deg)`}}>
          <div className="arrow"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* <div>
        {timeCurrent.getHours()}:{timeCurrent.getMinutes()}:
        {timeCurrent.getSeconds()}
      </div> */}
      <button name={city} className="watch-close" onClick={handleClose}>
        x
      </button>
    </div>
  );
}

export default Watch;
