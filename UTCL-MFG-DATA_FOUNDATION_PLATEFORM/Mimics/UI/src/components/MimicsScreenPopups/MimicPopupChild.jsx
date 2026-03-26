import { useSelector } from "react-redux";
import {
  rmhLine1KothpoutliPopup1Payloads,
  rmhLine1KothpoutliPopup2Payloads,
  rmhLine1KothpoutliPopup3Payloads,
} from "../../data/Kotputli/line-1/RawMillHandling/popupPayload/rmhLine1KothpoutliPopupPayloads";
import { CommonPopup } from "./CommonPopup";
// import { useLatestData } from "../../utils";
import * as cementgrindingrpmagdallaPopupPayloads from "../../data/magdalla/cementgrindingrollerpress/popupPayload/cementgrindingrpmagdallaPopupPayloads";
import { bmomagdallaPopup1Payloads } from "../../data/magdalla/ballmilloverview/popupPayload/bmomagdallaPopupPayloads";
import {
  BallMillTotalizerPopup,
  CoalMillParametersHirmiL1Popup1,
  CoolerParametersHirmiL1Popup1,
  KilnParametersHirmiL1Popup,
  KilnParametersHirmiL1Popup2,
} from "../Plants";
import { bmopopup21 } from "../../data/magdalla/ballmilloverview/popupLists/bmopopup2";
import * as crusher1maiharPopupPayloads from "../../data/maihar/Line1And2/crusher1And2/popupPayload/crusher1maiharPopupPayloads";
import * as oldOLBC1maiharPopupPayloads from "../../data/maihar/Line1And2/Old Olbc/popupPayload/oldOLBCmaiharPopupPayloads";
import * as kilnRajshreePopupPayloads from "../../data/rajshree/Kiln/popupPayload/kilnRajshreePopupPayloads";
import * as kilnBurnerRajshreePopupPayloads from "../../data/rajshree/Kilnburner/popupPayload/kilnBurnerRajshreePopupPayloads";
import { RM1Popup1Rajashree } from "../Rajshree/RawMills/RawMill1/PopupRM1RCW/RM1Popup1Rajashree";
import * as blendingSiloFeedingRajshreePopupPayloads from "../../data/rajshree/BlendingSiloFeeding/popupPayload/blendingSiloFeedingRajshreePopupPayloads";
import * as coalTransportRajashreePayloads from "../../data/rajshree/CoalTransport/popupPayload/coalTransportRajshreePopupPayloads";
import { BaikunthCoalMillsObservationPopup } from "../Baikunth/CoalMillsObservationPopup/BaikunthCoalMillsObservationPopup";
import {
  gsmagdallaPopup1Payloads,
  gsmagdallaPopup2Payloads,
} from "../../data/magdalla/grindingsection/popupPayload/gsmagdallaPopupPayloads";
import { useLatestDataNew } from "../../utils";

export const MimicPopupChild = () => {
  const { showPopup } = useSelector((state) => state);
  const { popupName, plant, plantCode } = showPopup;
  // useLatestData(plantCode, plant);
  useLatestDataNew(
    plantCode,
    plant
    //  sectionName, section, tagNames
  );
  return (
    <>
      {/* Kothputli Line1 Popups */}

      {showPopup.popupName === "kothputliLine1RMHPopup1" && (
        <CommonPopup popData={rmhLine1KothpoutliPopup1Payloads} />
      )}
      {showPopup.popupName === "kothputliLine1RMHPopup2" && (
        <CommonPopup popData={rmhLine1KothpoutliPopup2Payloads} />
      )}
      {showPopup.popupName === "kothputliLine1RMHPopup3" && (
        <CommonPopup popData={rmhLine1KothpoutliPopup3Payloads} />
      )}

      {/* Magdalla popup */}
      {/* Cement Grinding */}
      {popupName === "magdallacgrppopup1" && (
        <CommonPopup
          popData={
            cementgrindingrpmagdallaPopupPayloads.cementgrindingrpmagdallaPopup1Payloads
          }
        />
      )}
      {popupName === "magdallacgrppopup2" && (
        <CommonPopup
          popData={
            cementgrindingrpmagdallaPopupPayloads.cementgrindingrpmagdallaPopup2Payloads
          }
        />
      )}
      {popupName === "magdallacgrppopup3" && (
        <CommonPopup
          popData={
            cementgrindingrpmagdallaPopupPayloads.cementgrindingrpmagdallaPopup3Payloads
          }
        />
      )}
      {popupName === "magdallacgrppopup4" && (
        <CommonPopup
          popData={
            cementgrindingrpmagdallaPopupPayloads.cementgrindingrpmagdallaPopup4Payloads
          }
        />
      )}
      {popupName === "magdallacgrppopup5" && (
        <CommonPopup
          popData={
            cementgrindingrpmagdallaPopupPayloads.cementgrindingrpmagdallaPopup5Payloads
          }
        />
      )}
      {popupName === "magdallacgrppopup6" && (
        <CommonPopup
          popData={
            cementgrindingrpmagdallaPopupPayloads.cementgrindingrpmagdallaPopup6Payloads
          }
        />
      )}
      {/* Ball Mill Overview */}
      {popupName === "magdallabmoppopup1" && (
        <CommonPopup popData={bmomagdallaPopup1Payloads} />
      )}
      {popupName === "magdallabmoppopup2" && (
        <BallMillTotalizerPopup popData={bmopopup21} />
      )}
      {/* Grinding Section */}
      {popupName === "magdallafrindingsectionpopup1" && (
        <CommonPopup popData={gsmagdallaPopup1Payloads} />
      )}
      {popupName === "magdallafrindingsectionpopup2" && (
        <CommonPopup popData={gsmagdallaPopup2Payloads} />
      )}
      {/* Maihar Line-1 Popups */}
      {/* Crusher */}
      {popupName === "maiharline1crusherpopup1" && (
        <CommonPopup
          popData={crusher1maiharPopupPayloads.crusher1maiharPopup1Payloads}
        />
      )}
      {popupName === "maiharline1crusherpopup2" && (
        <CommonPopup
          popData={crusher1maiharPopupPayloads.crusher1maiharPopup2Payloads}
        />
      )}
      {/* Old-OLBC */}
      {popupName === "maiharline1oldolbcpopup1" && (
        <CommonPopup
          popData={oldOLBC1maiharPopupPayloads.oldOLBCmaiharPopup1Payloads}
        />
      )}
      {popupName === "maiharline1oldolbcpopup2" && (
        <CommonPopup
          popData={oldOLBC1maiharPopupPayloads.oldOLBCmaiharPopup2Payloads}
        />
      )}

      {/* RAJSHREE POPUPS */}
      {/* Kiln */}
      {popupName === "rajshreeKilnMD1" && (
        <CommonPopup
          popData={kilnRajshreePopupPayloads.kilnRajshreePopup1Payloads}
        />
      )}
      {popupName === "rajshreeKilnMD2" && (
        <CommonPopup
          popData={kilnRajshreePopupPayloads.kilnRajshreePopup2Payloads}
        />
      )}
      {popupName === "rajshreeKilnGB1" && (
        <CommonPopup
          popData={kilnRajshreePopupPayloads.kilnRajshreePopup3Payloads}
        />
      )}
      {popupName === "rajshreeKilnGB2" && (
        <CommonPopup
          popData={kilnRajshreePopupPayloads.kilnRajshreePopup4Payloads}
        />
      )}
      {/* Kiln Burner */}
      {popupName === "rajshreeKilnBurnerPopup1" && (
        <CommonPopup
          popData={
            kilnBurnerRajshreePopupPayloads.kilnBurnerRajshreePopup1Payloads
          }
        />
      )}
      {popupName === "rajshreeKilnBurnerPopup2" && (
        <CommonPopup
          popData={
            kilnBurnerRajshreePopupPayloads.kilnBurnerRajshreePopup2Payloads
          }
        />
      )}
      {popupName === "rajshreeKilnBurnerPopup3" && (
        <CommonPopup
          popData={
            kilnBurnerRajshreePopupPayloads.kilnBurnerRajshreePopup3Payloads
          }
        />
      )}
      {/* Blending Silo Feeding */}
      {popupName === "rajshreeBlendingSiloFeedingPopup1" && (
        <CommonPopup
          popData={
            blendingSiloFeedingRajshreePopupPayloads.blendingSiloFeedingRajshreePopup1Payload
          }
        />
      )}
      {popupName === "rajshreeBlendingSiloFeedingPopup2" && (
        <CommonPopup
          popData={
            blendingSiloFeedingRajshreePopupPayloads.blendingSiloFeedingRajshreePopup2Payload
          }
        />
      )}
      {/* Coal Transport */}
      {popupName === "rajshreeCoalTransportPopup1" && (
        <CommonPopup
          popData={
            coalTransportRajashreePayloads.coalTransportRajshreePopup1Payloads
          }
        />
      )}
      {popupName === "rajshreeCoalTransportPopup2" && (
        <CommonPopup
          popData={
            coalTransportRajashreePayloads.coalTransportRajshreePopup2Payloads
          }
        />
      )}
      {popupName === "rajshreeCoalTransportPopup3" && (
        <CommonPopup
          popData={
            coalTransportRajashreePayloads.coalTransportRajshreePopup3Payloads
          }
        />
      )}
      {popupName === "rajshreeCoalTransportPopup4" && (
        <CommonPopup
          popData={
            coalTransportRajashreePayloads.coalTransportRajshreePopup4Payloads
          }
        />
      )}
      {popupName === "rajshreeCoalTransportPopup5" && (
        <CommonPopup
          popData={
            coalTransportRajashreePayloads.coalTransportRajshreePopup5Payloads
          }
        />
      )}
      {/* Raw mill-1 */}
      {popupName === "rajshreeRM1Popup1" && <RM1Popup1Rajashree />}

      {/* Baikunth Coal Mills */}
      {popupName === "baikunthcoalmills" && (
        <BaikunthCoalMillsObservationPopup />
      )}

      {/* Hirmi Line-1 */}
      {/* Kiln */}
      {popupName === "hirmil1kilnparameterspopup1" && (
        <KilnParametersHirmiL1Popup />
      )}
      {popupName === "hirmil1kilnparameterspopup2" && (
        <KilnParametersHirmiL1Popup2 />
      )}
      {popupName === "hirmil1coalmillparameterspopup1" && (
        <CoalMillParametersHirmiL1Popup1 />
      )}
      {popupName === "hirmil1coolerparameterspopup1" && (
        <CoolerParametersHirmiL1Popup1 />
      )}
    </>
  );
};
