interface FormProps {
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cityValue: string;
  offsetValue: number;
}

function Form({ handleAdd, handleChange, cityValue, offsetValue }: FormProps) {
  return (
    <form onSubmit={handleAdd}>
      <div className="input-box">
        <label htmlFor="city">Название</label>
        <input
          name="city"
          type="text"
          value={cityValue}
          placeholder = "Введите город"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="offset">Временная зона</label>
        <input
          name="offset"
          type="number"
          value={offsetValue}
          placeholder="Смещение в часах "
          onChange={handleChange}
        />
      </div>
      <button className="submit" type="submit">Добавить</button>
    </form>
  );
}

export default Form;
