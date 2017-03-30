const seleniumConfig = require('./build/selenium-conf');
const path = require('path');

module.exports = (function (settings) {

    // 告诉 Nightwatch 我的 Selenium 在哪里。
    settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`

    // 设置 Chrome Driver, 让 Selenium 有打开 Chrome 浏览器的能力。
    settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`

    return settings;
})(require('./nightwatch.json'));
/*
 *  Nightwatch 会从 nightwatch.json 中读取配置。
 *  不过如果存在 nightwatch.conf.js，将会变为首先从后者中读取配置。
 *  nightwatch.conf.js 存在的意义是使用 JavaScript 动态生成配置信息。
 *  如果配置信息是不需要代码修改的，直接使用 nightwatch.json 就可以啦。
 */