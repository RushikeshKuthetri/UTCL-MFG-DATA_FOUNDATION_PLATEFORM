import { Card } from "../index";

export const CardList = ({ cardlist, plant }) => {
  return (
    <ul className="row ml-0 mr-0">
      {cardlist.map((tag, index) => {
        return (
          <Card
            key={index}
            data={tag}
            view="View the Section"
            plantId={plant}
          />
        );
      })}
    </ul>
  );
};
