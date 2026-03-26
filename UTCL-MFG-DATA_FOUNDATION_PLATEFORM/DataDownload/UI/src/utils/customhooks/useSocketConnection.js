import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { SOCKET_URL_PROD } from "../../base";

const CHUNK_SIZE = 32768; // 32 kb

// This is for web socket connection
export const useSocketConnection = (tagList, liveDataStatusCondition) => {
  const dispatch = useDispatch();

  const displayTagNames = tagList
    .filter((item) => item.IsDisplay)
    .map((item) => ({
      propertyId: item.propertyId || item.PropertyId,
      assetId: item.assetId || item.AssetId,
      key: item.key || item.TagName,
      value: null,
    }));

  // const { token } = JSON.parse(localStorage.getItem("login"));
  const ws = useRef(null);

  const socketFunction = async () => {
    const webSocket = new WebSocket(`${SOCKET_URL_PROD}`);
    ws.current = webSocket;

    // ws.current.onopen = () => {
    //   console.debug("connected Event Server");
    //   const body = {
    //     action: "sendSitewise",
    //     tagList,
    //   };
    //   // if ([plantcode].flat().length === 1) {
    //   //   ws.current.send(JSON.stringify([plantcode]));
    //   // } else {
    //   //   ws.current.send(JSON.stringify(plantcode));
    //   // }
    //   if (tagList?.length) {
    //     ws.current.send(JSON.stringify(body));
    //   }
    // };

    let messageResponse = [...displayTagNames];

    ws.current.onopen = () => {
      console.debug("connected Event Server");
      if (displayTagNames?.length) {
        const chunks = splitPayloadIntoChunks(displayTagNames);
        for (const item of chunks) {
          const body = {
            action: "sendSitewise",
            tagList: item,
          };
          ws.current.send(JSON.stringify(body));
        }
      }
    };

    ws.current.onerror = () => {
      console.debug("connection to Event Server failed");
    };

    ws.current.onclose = (event) => {
      console.debug("connection closed", event);
    };

    // ws.current.onmessage = (message) => {
    //   if (message.data !== "Connected") {
    //     const iotData = JSON.parse(message.data);
    //     // console.log("iotData", iotData);
    //     // if (Object.keys(iotData).every((key) => plantcode.includes(key))) {
    //     //   Object.values(iotData).flat().length !== 0 &&
    //     dispatch({
    //       type: "SOCKET_DATA",
    //       payload: iotData,
    //     });
    //     // }
    //   }
    // };

    ws.current.onmessage = (message) => {
      if (message.data !== "Connected") {
        const iotData = JSON.parse(message.data);
        // dispatch({
        //   type: "SOCKET_DATA",
        //   payload: iotData,
        // });
        if (iotData?.length) {
          const updatedArray = messageResponse.map((item) => {
            const matchingItem = iotData.find((obj) => obj.key === item.key);
            return matchingItem ? matchingItem : item;
          });
          messageResponse = updatedArray;
          if (updatedArray?.length) {
            dispatch({
              type: "SOCKET_DATA",
              payload: updatedArray,
            });
          }
        }
      }
    };
  };

  const splitPayloadIntoChunks = (payload) => {
    const chunks = [];
    let currentChunk = [];
    let currentChunkSize = 0;

    for (let i = 0; i < payload.length; i++) {
      // Estimate the size of the current item (for example, if it's a string, use the length)
      const itemSize = new TextEncoder().encode(
        JSON.stringify(payload[i])
      ).length;

      // Check if adding this item will exceed the chunk size
      if (currentChunkSize + itemSize <= CHUNK_SIZE) {
        currentChunk.push(payload[i]);
        currentChunkSize += itemSize;
      } else {
        // If it exceeds, push the current chunk and start a new one
        chunks.push(currentChunk);
        currentChunk = [payload[i]];
        currentChunkSize = itemSize;
      }
    }

    // Push any remaining items in the last chunk
    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }

    return chunks;
  };

  useEffect(() => {
    // console.debug("before interval socket");
    // console.log(ws.current);

    let intervalId;

    if (tagList?.length && liveDataStatusCondition) {
      socketFunction();
      intervalId = setInterval(() => {
        // console.debug("running interval");
        if (ws.current) {
          // console.debug("stopping the socket");
          // ws.current.close(); // Stop the socket
          // if (tagList?.length) {
          //   const body = {
          //     action: "sendSitewise",
          //     tagList,
          //   };
          //   ws.current.send(JSON.stringify(body));
          // }
          if (`${ws?.current?.readyState}` === `${WebSocket.OPEN}`) {
            if (displayTagNames?.length) {
              const chunks = splitPayloadIntoChunks(displayTagNames);
              for (const item of chunks) {
                const body = {
                  action: "sendSitewise",
                  tagList: item,
                };
                ws.current.send(JSON.stringify(body));
              }
            }
          } else {
            console.log(
              "WebSocket is not open. Current state: ",
              ws?.current?.readyState
            );
            socketFunction();
          }
        }

        // console.debug("restarting the socket");
        // socketFunction();
      }, 60000); // 1 minutes in milliseconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (`${ws?.current?.readyState}` !== `${WebSocket.CLOSED}`) {
        ws?.current?.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(tagList), liveDataStatusCondition]);
};
