
import { maiharL4CrusherCBADataTextcolumn9 } from "../../../../../data/maihar/line-4/Crusher/maiharL4CrusherTextcolumn";
import { BlackContainer } from "../../../../index";


export const CBADataLine4 = () => {
    return (
        <div className="table-responsive border AwarpurCBAMines CBA_kukurdih CBA_pali">
            <table className="table text-center mb-0">
                <thead>
                    <tr>
                        <th className="th_bg text-center">CBA PARAMETERS</th>
                        <th className="th_bg text-center">CBA PRVS PILE</th>
                        <th className="th_bg text-center">CBA 10 MINUTES</th>
                        <th className="th_bg text-center">CBA 60 MINUTES</th>
                        <th className="th_bg text-center">CURRENT PILE</th>
                    </tr>
                </thead>
                <tbody>
                    {maiharL4CrusherCBADataTextcolumn9.map(({ element, tags }, index) => {
                        return (
                            <tr key={index}>
                                <td>{element}</td>
                                {tags.map(({ blackTextClass, blackTextLabel }, index) => {
                                    return (
                                        <td key={index}>
                                            <BlackContainer
                                                data={{
                                                    label: blackTextLabel,
                                                    useClass: blackTextClass,
                                                    unit: "",
                                                    unitColor: "unitColor",
                                                }}
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

