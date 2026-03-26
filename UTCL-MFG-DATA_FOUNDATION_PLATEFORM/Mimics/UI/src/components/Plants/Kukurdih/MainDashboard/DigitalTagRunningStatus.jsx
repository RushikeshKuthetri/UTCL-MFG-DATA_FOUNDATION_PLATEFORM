import {
  getKukurdihMainDashboardTagRunningStatus,
  useColorStatus,
} from "../../../../utils";
import { MotorCircleDigitalTag } from "../../../DigitalTags";

export const DigitalTagRunningStatus = ({ tagDetails }) => {
  const { dotLabel, text } = tagDetails;
  const tagValue = useColorStatus(dotLabel);
  const tagsStatus = getKukurdihMainDashboardTagRunningStatus(tagValue);
  return (
    <>
      {text && <span>{text}: </span>}
      <MotorCircleDigitalTag
        className={`dot digital-tag ${tagValue}`}
        label={dotLabel}
      />
      <span className="ml-2">{tagsStatus}</span> <br></br>
    </>
  );
};
