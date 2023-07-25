import { AnalyticsService } from "@chargepoint/manticore-lib";

const useAnalyticsService = (): { analyticsService: AnalyticsService } => {
  if (!AnalyticsService.getInstance().isInitialized) {
    AnalyticsService.getInstance().init(
      import.meta.env.CP_MIXPANEL_PROJECT_TOKEN
    );
  }
  return { analyticsService: AnalyticsService.getInstance() };
};

export default useAnalyticsService;
