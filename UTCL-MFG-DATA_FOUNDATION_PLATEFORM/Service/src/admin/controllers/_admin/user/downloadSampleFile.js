const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: process.env.NODE_ENV_AWS_REGION,
});

const bucketName = "process-opt-export-data-bucket";
const fileName = "Admin_Bulk_Upload_Sample_File.xlsx"

module.exports = {
  downloadSampleFile: async (req, res, next) => {
    try {
      const getObjCommand = new GetObjectCommand({
        Bucket: bucketName,
        Key: fileName,
      });
      const signedUrl = await getSignedUrl(s3Client, getObjCommand, {
        expiresIn: 3600,
      });
      return res.status(200).json({
        code: 200,
        url: signedUrl,
        status: "success",
      });
    } catch (error) {
      next(error)
    }
  },
};
