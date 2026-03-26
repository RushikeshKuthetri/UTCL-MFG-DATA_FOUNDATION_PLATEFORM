export const findKilnShutdownStatus = (taguid, centralisedDashboardData) => {
  return centralisedDashboardData.kilnShutdownStatusData?.find(
    ({ Id }) => Id === taguid
  );
};
export const findCMShutdownStatus = (taguid, centralisedDashboardData) => {
  return centralisedDashboardData.cmShutdownStatusData?.find(
    ({ Id }) => Id === taguid
  );
};
