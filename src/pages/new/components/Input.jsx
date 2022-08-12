const Input = ({ place, name, type }) => {
  return (
    <div className="formInput">
      <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>
      <input id={name} type={type} placeholder={place || ""} />
    </div>
  );
};

export default Input;
