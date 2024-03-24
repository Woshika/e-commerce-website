function Input({handleChange,value,title,name,color}) {
  return (
    <label className="sidebar-label-container">
    <input onchange={handleChange} type="radio" value={value} name={name}/>
    <span className="checkmark" style={{backgroundColor:color}}></span>{title}
  </label>
  );
}
export default Input;
