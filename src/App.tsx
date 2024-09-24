import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Watch from "./components/Watch";
// import Uncorrect from "./components/Uncorrect";

interface Iwatch {
  city: string;
  offset: number;
}

// interface IwatchForm {
//   city: string;
//   offset: string;
// }

type TwatchArray = Iwatch[];

function App() {
  const start: TwatchArray = [];

  const [form, setForm] = useState<Iwatch>({
    city: "",
    offset: 0,
  });

  const { city, offset } = form;

  const [watchArray, setWatchArray] = useState(start);

  // const [uncorrect, setUncorrect] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handlerAddWatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(typeof city);
    console.log(typeof Number(offset));

    if (typeof city === "string" && city.trim().length && typeof Number(offset) === "number") {
      const newWatch: TwatchArray = [{ city: city, offset: offset }];
      setWatchArray(watchArray.concat(newWatch));

      console.log(watchArray);
      console.log(newWatch);
      console.log("new data:", form);

      setForm({
        city: "",
        offset: 0,
      });
    } else {
      // setUncorrect(true);
      // setForm((prevForm) => ({
      //   ...prevForm,
      //   offset: 0,
      // }));
      // console.log(uncorrect)
    }
  };

  const handlerRemoveWatch = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
    if (watchArray.length > 0) {
      setWatchArray(
        watchArray.filter(
          (item) => item.city != (e.target as HTMLButtonElement).name
        )
      );
    }
  };

  return (
    <>
      <Form
        handleAdd={handlerAddWatch}
        handleChange={handleChange}
        cityValue={city}
        offsetValue={offset}
      />
      <div className="watch-container">
        {watchArray.map((w) => (
          <div key={w.city}>
            <Watch
              city={w.city}
              offset={w.offset}
              handleClose={handlerRemoveWatch}
            />
          </div>
        ))}
      </div>
      {/* {uncorrect && <Uncorrect
      callback1={console.log('aaaaaaaaaaaaaa')}

      // callback={setUncorrect(false)}
      /> } */}
    </>
  );
}

export default App;
