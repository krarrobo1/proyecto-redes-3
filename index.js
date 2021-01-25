const { http } = require('./app');
const { PORT, TASK_TIME } = require('./config');
const SessionManager = require('./services/SessionManager');



http.listen(PORT, () => {
    console.log(`Welcome, app is running on http://localhost:${PORT}`);
    SessionManager.initSessions();
    // Ask every 5 seconds cpu percentage usage...
    setInterval(() => {
        SessionManager.getProcessorUsagePercent('ubuntu');
        SessionManager.getMemoryUsage('ubuntu');
        SessionManager.getProcessorUsagePercent('windows');
    }, 5000);

    require('./services/socket-manager');
});