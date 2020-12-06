const { http } = require('./app');
const { PORT } = require('./config');


http.listen(PORT, () => {
    console.log(`Welcome, app is running on http://localhost:${PORT}`);
});