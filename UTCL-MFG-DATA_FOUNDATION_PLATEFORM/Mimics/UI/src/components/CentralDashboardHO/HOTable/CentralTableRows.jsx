import { CMTableRow, KilnTableRow } from "../index";
export const CentralTableRows = ({ value, lengthCondition }) => {
  return (
    <tr className={lengthCondition ? "cluster-last-row" : ""}>
      <th scope="row">{value.Cluster}</th>
      <th scope="row">{value.Type}</th>
      <th scope="row">{value.Plant_Full_Name}</th>
      <td className="text-center">
        {value["Kiln-1"]?.tagName ? (
          <KilnTableRow
            tagname={value["Kiln-1"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Kiln-1"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Kiln-2"]?.tagName ? (
          <KilnTableRow
            tagname={value["Kiln-2"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Kiln-2"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Kiln-3"]?.tagName ? (
          <KilnTableRow
            tagname={value["Kiln-3"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Kiln-3"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Kiln-4"]?.tagName ? (
          <KilnTableRow
            tagname={value["Kiln-4"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Kiln-4"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Cement Mill-1"]?.tagName ? (
          <CMTableRow
            tagname={value["Cement Mill-1"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Cement Mill-1"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Cement Mill-2"]?.tagName ? (
          <CMTableRow
            tagname={value["Cement Mill-2"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Cement Mill-2"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Cement Mill-3"]?.tagName ? (
          <CMTableRow
            tagname={value["Cement Mill-3"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Cement Mill-3"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Cement Mill-4"]?.tagName ? (
          <CMTableRow
            tagname={value["Cement Mill-4"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Cement Mill-4"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Cement Mill-5"]?.tagName ? (
          <CMTableRow
            tagname={value["Cement Mill-5"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Cement Mill-5"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
      <td className="text-center">
        {value["Cement Mill-6"]?.tagName ? (
          <CMTableRow
            tagname={value["Cement Mill-6"].tagName}
            plant={value["Generic Code"]}
            taguid={value["Cement Mill-6"].tagUid}
          />
        ) : (
          <div></div>
        )}
      </td>
    </tr>
  );
};
