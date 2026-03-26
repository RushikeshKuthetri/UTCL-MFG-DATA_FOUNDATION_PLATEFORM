export const FilterLabel = ({ filtername, mandatory }) => {
  return (
    <label className="mb-2">
      {filtername}
      {mandatory && <span className="text-danger">*</span>}
    </label>
  );
};
