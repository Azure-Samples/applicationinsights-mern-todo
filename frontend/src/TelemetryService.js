import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

class TelemetryService {

    constructor() {
        this.reactPlugin = new ReactPlugin();
        this.reactPlugin.priority = 180;
    }

    initialize(reactPluginConfig) {
        let INSTRUMENTATION_KEY = '4899cc1c-37cc-4765-af41-1ae2e439525e';

        this.appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: INSTRUMENTATION_KEY,
                maxBatchInterval: 1000,
                disableFetchTracking: false,
                enableCorsCorrelation: true,
                autoTrackPageVisitTime: true,
                extensions: [this.reactPlugin],
                extensionConfig: {
                    [this.reactPlugin.identifier]: reactPluginConfig
                }
            }
        });
        this.appInsights.loadAppInsights();


        this.appInsights.addTelemetryInitializer(item => {
            item.tags.push({"ai.cloud.role": "my app"});
        })
    }
}

export let ai = new TelemetryService();