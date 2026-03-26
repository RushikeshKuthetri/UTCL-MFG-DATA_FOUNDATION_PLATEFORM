export const FormInput = ({
  validationErrorMsg,
  value,
  setValue,
  placeholder,
  type,
}) => {
  return (
    <div className="input-group input-group-outline my-3 d-flex flex-column">
      <input
        type={type}
        className={`form-control w-100 ${
          validationErrorMsg && "invalid-form-control"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {validationErrorMsg && (
        <div className="invalid-text mt-1 ml-2">{validationErrorMsg}</div>
      )}
    </div>
  );
};
