import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Watch from "./components/Watch";

interface Iwatch {
  city: string;
  offset: number;
}

type TwatchArray = Iwatch[];

function App() {
  const start: TwatchArray = [];

  const [form, setForm] = useState<Iwatch>({
    city: "",
    offset: 0,
  });

  const { city, offset } = form;

  const [watchArray, setWatchArray] = useState(start);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handlerAddWatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof city === "string" && city.trim().length && typeof Number(offset) === "number") {
      const newWatch: TwatchArray = [{ city: city, offset: offset }];
      setWatchArray(watchArray.concat(newWatch));

      setForm({
        city: "",
        offset: 0,
      });
    }
  };

  const handlerRemoveWatch = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    </>
  );
}

export default App;
