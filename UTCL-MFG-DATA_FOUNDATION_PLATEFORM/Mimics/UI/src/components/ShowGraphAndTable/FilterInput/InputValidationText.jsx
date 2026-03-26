export const InputValidationText = ({  validationMessage }) => {
  return (
    <p className="invalid-text mt-1 ml-2 position-absolute">
      {validationMessage}
    </p>
  );
};
