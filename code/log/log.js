var util = require('../lib/util.js');


var logLevel = {
    'verbose': 'V',
    '1': 'V',
    'debug': 'D',
    '2': 'D',
    'info': 'I',
    '3': 'I',
    'error': 'E',
    '4': 'E'
};

var LOG_LEVEL_VERBOSE = '1';
exports.LOG_LEVEL_VERBOSE = LOG_LEVEL_VERBOSE;
var LOG_LEVEL_DEBUG = '2';
exports.LOG_LEVEL_DEBUG = LOG_LEVEL_DEBUG;
var LOG_LEVEL_INFO = '3';
exports.LOG_LEVEL_INFO = LOG_LEVEL_INFO;
var LOG_LEVEL_ERROR = '4';
exports.LOG_LEVEL_ERROR = LOG_LEVEL_ERROR;

function log(level, topic, msg) {
    var timeString = util.formatDate();
    console.log('[%s] [%s] [%s] %s', timeString, logLevel[level], topic, msg);
}
exports.log = log;

exports.logVerbose = function logVerbose(topic, msg){
    log(LOG_LEVEL_VERBOSE, topic, msg);
};

exports.logDebug = function logDebug(topic, msg){
    log(LOG_LEVEL_DEBUG, topic, msg);
};

exports.logInfo = function logInfo(topic, msg){
    log(LOG_LEVEL_INFO, topic, msg);
};

exports.logError = function logError(topic, msg){
    log(LOG_LEVEL_ERROR, topic, msg);
};