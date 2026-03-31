// export const MillRunningStatusTable = ({ section, data }) => {
//   const { running, stopped, unreachable, total } = data;
//   return (
//     <div className="table-responsive col-6">
//       <table className="table cd_table fix-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th className="th_bg">Running</th>
//             <th className="th_bg">Stopped</th>
//             <th className="th_bg">Not Reachable</th>
//             <th className="th_bg">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{section}</td>
//             <td>{running}</td>
//             <td>{stopped}</td>
//             <td>{unreachable}</td>
//             <td>{total}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };






export const MillRunningStatusTable = ({ section, data }) => {
  const { running, stopped, unreachable, total } = data;
  return (
    <div className="table-responsive col-6">
      <table className="border-[var(--card-border)] border">
        <thead>
          <tr>
            <th className="border-[var(--card-border)]   "></th>
            <th className="bg-gradient-to-r from-orange-400 to-orange-300 text-black   ">Running</th>
            <th className="bg-gradient-to-r from-orange-400 to-orange-300 text-black ">Stopped</th>
            <th className="bg-gradient-to-r from-orange-400 to-orange-300 text-black ">Not Reachable</th>
            <th className="bg-gradient-to-r from-orange-400 to-orange-300 text-black ">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-[var(--card-border)] border">{section}</td>
            <td className="border-[var(--card-border)] border">{running}</td>
            <td className="border-[var(--card-border)] border">{stopped}</td>
            <td className="border-[var(--card-border)] border">{unreachable}</td>
            <td className="border-[var(--card-border)] border">{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
