import {
  baikunthKMOverviewList1,
  baikunthKMOverviewList2,
  baikunthKMOverviewList3,
  baikunthKMOverviewList4,
} from "../../../data/baikunth/coalMills/coalmillsObservation/baikunthKMOverviewList";
import { TextColumn } from "../../index";
export const BaikunthCoalMillsObservationPopup = () => {
  return (
    <div className="p-2 overflow-auto">
      <div className="row mx-0">
        <div className="col-4 pr-1 pl-1">
          <div className="CGRnBox p-1">
            <div className="text-white text-center bb-1">
              <button>OVERVIEW</button>
            </div>
            <div className="cgreentext"> SOUND LVL </div>
            <div className="cgreentext"> EXH FAN SPEED </div>

            <div className="cgreentext"> DYNSEPRPM </div>

            <div className="cgreentext"> OL TEMP </div>

            <div className="cgreentext"> IL TEMP </div>

            <div className="cgreentext"> CSG TEMP </div>

            <div className="cgreentext"> IL DRAFT </div>

            <div className="cgreentext"> OL DRAFT </div>

            <div className="cgreentext"> DC DIFF PRESS </div>

            <div className="cgreentext"> HOPPER1 TEMP </div>

            <div className="cgreentext"> HOPPER2 TEMP </div>

            <div className="cgreentext"> FINE COAL HOP TEMP </div>

            <div className="cgreentext"> ILBRG TEMP </div>

            <div className="cgreentext"> OLBRG TEMP </div>

            <div className="cgreentext"> DYNSEP TOP TEMP </div>

            <div className="cgreentext"> DYNSEP BOT TEMP </div>

            <div className="cgreentext"> IL OIL PRESS </div>

            <div className="cgreentext"> OL OLI PRESS </div>
          </div>
        </div>
        <div className="col-2 pr-1 pl-1">
          <TextColumn
            useClass="CGRnBox p-1"
            list={baikunthKMOverviewList1}
            text="COAL MILL 1"
            text2Class="text-white text-center bb-1"
          />
        </div>
        <div className="col-2 pr-1 pl-1">
          <TextColumn
            useClass="CGRnBox p-1"
            list={baikunthKMOverviewList2}
            text="COAL MILL 2"
            text2Class="text-white text-center bb-1"
          />
        </div>
        <div className="col-2 pr-1 pl-1">
          <TextColumn
            useClass="CGRnBox p-1"
            list={baikunthKMOverviewList3}
            text="COAL MILL 3"
            text2Class="text-white text-center bb-1"
          />
        </div>
        <div className="col-2 pr-1 pl-1">
          <TextColumn
            useClass="CGRnBox p-1"
            list={baikunthKMOverviewList4}
            text="COAL MILL 4"
            text2Class="text-white text-center bb-1"
          />
        </div>
      </div>
    </div>
  );
};
