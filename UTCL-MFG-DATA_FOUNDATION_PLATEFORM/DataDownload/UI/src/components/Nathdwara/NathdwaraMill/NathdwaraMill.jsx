import { getLineCards } from "../../../utils";
import { CardList } from "../../index";
import "./NathdwaraMill.scss";

export const NathdwaraMill = ({ plantSection, lineHeading }) => {
  const lineCards = getLineCards(plantSection, lineHeading);

  return (
    <>
      {lineCards.map(({ heading, lineSectionData },index) => {
        return (
          <section key={index}>
            <h4 className="line-heading">{heading}</h4>
            <CardList cardlist={lineSectionData} />
          </section>
        );
      })}
    </>
  );
};
