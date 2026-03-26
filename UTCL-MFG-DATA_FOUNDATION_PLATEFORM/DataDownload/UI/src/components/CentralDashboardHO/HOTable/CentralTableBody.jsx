import { useSelector } from "react-redux";
import { CentralTableRows } from "./CentralTableRows";

export const CentralTableBody = () => {
  const { centralisedDashboardData } = useSelector((state) => state);
  return (
    <tbody>
      {centralisedDashboardData.north.map((value, index) => {
        return (
          <CentralTableRows
            value={value}
            key={index}
            lengthCondition={
              index + 1 === centralisedDashboardData.north.length
            }
          />
        );
      })}
      {centralisedDashboardData.central.map((value, index) => {
        return (
          <CentralTableRows
            value={value}
            key={index}
            lengthCondition={
              index + 1 === centralisedDashboardData.central.length
            }
          />
        );
      })}
      {centralisedDashboardData.east.map((value, index) => {
        return (
          <CentralTableRows
            value={value}
            key={index}
            lengthCondition={index + 1 === centralisedDashboardData.east.length}
          />
        );
      })}
      {centralisedDashboardData.vidharbha.map((value, index) => {
        return (
          <CentralTableRows
            value={value}
            key={index}
            lengthCondition={
              index + 1 === centralisedDashboardData.vidharbha.length
            }
          />
        );
      })}
      {centralisedDashboardData.west.map((value, index) => {
        return (
          <CentralTableRows
            value={value}
            key={index}
            lengthCondition={index + 1 === centralisedDashboardData.west.length}
          />
        );
      })}
      {centralisedDashboardData.south.map((value, index) => {
        return (
          <CentralTableRows
            value={value}
            key={index}
            lengthCondition={
              index + 1 === centralisedDashboardData.south.length
            }
          />
        );
      })}
    </tbody>
  );
};
