import { getLineCards } from "../../../utils";
import { CardList } from "../../index";
// import "./NathdwaraMill.scss";

export const NathdwaraMill = ({ plantSection, lineHeading }) => {
  const lineCards = getLineCards(plantSection, lineHeading);

  return (
    <>

    <h2 className="text-[18px] font-semibold text-[var(--title)] mb-2">Sections</h2>
      {lineCards.map(({ heading, lineSectionData }, index) => (
        <section key={index} className="mb-2 last:mb-0">
          
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-[17px] font-medium text-[var(--text-color)] whitespace-nowrap">
              {heading}
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
 
          <div className="pb-2">
            <CardList cardlist={lineSectionData} />
          </div>
        </section>
      ))}
    </>
  );
};
