// const { executeKustoQuery } = require('../helpers/kustoHelper'); // old ADX code
const { getTagMetadataForUIDs } = require('../../helpers/dynamoDB');
const { getSiteWiseDataAvgFilled } = require('../../helpers/iotSitewise');

const filterbyUIDAvgGCW = async (req, res) => {
  try {
    const { plant, startDate, endDate, interval, uids, useCreatedTimestamp } = req.body;

    if (!plant || !startDate || !endDate || !interval || !uids || uids.length === 0) {
      return res.status(400).json({ error: 'Missing required parameters.' });
    }

    // Step 1: Fetch tag metadata from DynamoDB (plant-specific TagMaster table)
    const tagMetadata = await getTagMetadataForUIDs(plant, uids);

    if (!tagMetadata || tagMetadata.length === 0) {
      return res.status(404).json({ error: 'No matching tags found in TagMaster.' });
    }

    // Step 2: Get filled and averaged SiteWise data based on timestamp type
    const siteWiseData = await getSiteWiseDataAvgFilled({
      tagMetadata,
      startDate,
      endDate,
      interval,
      useCreatedTimestamp: useCreatedTimestamp === true,
    });

    // Step 3: Respond with the data
    res.json(siteWiseData);

  } catch (err) {
    console.error('Error in filterbyUIDAvgGCW:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

module.exports = filterbyUIDAvgGCW;

/*
-------------------------
ADX Version (Preserved)
-------------------------
.create-or-alter function  fn_API_MltUid_WithAvg_TimeInterval_filler(...) {
  Tag_Master
  | join ... IotLiveData ...
  | make-series  Value=avg(Value) default = long(null) on Timestamp ...
  | extend series_fill_forward(Value,int(null))
  | project ...
}

.create-or-alter function  fn_API_MltUid_WithAvg_TimeInterval_filler_Createdtime(...) {
  Tag_Master
  | join ... IotLiveData ...
  | make-series  Value=avg(Value) default = long(null) on Created_Timestamp ...
  | extend series_fill_forward(Value,int(null))
  | project ...
}
*/
