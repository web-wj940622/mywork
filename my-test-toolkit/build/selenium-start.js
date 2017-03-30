const selenium = require('selenium-standalone');
const seleniumConfig = require('./selenium-conf.js');

selenium.start({
    drivers: seleniumConfig.driver
}, function (err, child) {
    if (err) throw new Error(`Selenium 启动失败: ${err}`);
    console.log(`Selenium 已手工启动，进程 PID: ${child.pid}`);
    console.log('当不再需要运行 Selenium 时可关闭此 PID 进程.')
});