export const CentralTableLegend = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="px-4">
          <p className="font-weight-bold">For Kiln: </p>
          <div className="d-flex align-items-center">
            <div className="dot green-color mr-3"></div>
            <p>Running: If value is greater than 50</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="dot red-color mr-3"></div>
            <p>Stopped: If value is less than 50</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="dot grey-color mr-3"></div>
            <p>Not Reachable: If no data is received</p>
          </div>
        </div>
        <div className="px-4">
          <p className="font-weight-bold">For Cement Mills: </p>
          <div className="d-flex align-items-center">
            <div className="dot green-color mr-3"></div>
            <p>Running: If value is greater than 10</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="dot red-color mr-3"></div>
            <p>Stopped: If value is less than 10</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="dot grey-color mr-3"></div>
            <p>Not Reachable: If no data is received</p>
          </div>
        </div>
      </div>
    </div>
  );
};
