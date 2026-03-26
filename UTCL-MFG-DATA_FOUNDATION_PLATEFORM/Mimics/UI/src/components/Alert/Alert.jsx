export function Alert({ errMsg }) {
  return (
    <div className="alert alert-danger mt-1" role="alert">
      {errMsg}
    </div>
  );
}
