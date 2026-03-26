import { useEffect } from "react";
import { CardList, NathdwaraMill, NotFound } from "../index";
import { accesslogshistory } from "../../utils";

export const MillsDashboardComponent = ({ plantSection, searchedPlant }) => {
  useEffect(() => {
    accesslogshistory({plant: searchedPlant?.id });
  },[])
  return plantSection ? (
    plantSection.length > 0 ? (
      searchedPlant.plantLines ? (
        <NathdwaraMill
          plantSection={plantSection}
          lineHeading={searchedPlant.lineHeading}
        />
      ) : (
        <CardList cardlist={plantSection} plant={searchedPlant.id} />
      )
    ) : (
      <NotFound
        heading="PAGE NOT FOUND!!"
        message="This page is not found or you don't have permission to access this page. Please contact to your admin."
      />
    )
  ) : (
    <NotFound
      heading="No sections are added yet!"
      message="The sections for this plant is not added yet. We are still working on it."
    />
  );
};
