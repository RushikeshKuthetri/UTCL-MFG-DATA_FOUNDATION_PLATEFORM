export function Alert({ errMsg }) {
  return (
    <div className="alert alert-danger" role="alert">
      {errMsg}
    </div>
  );
}
