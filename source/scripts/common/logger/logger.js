import utils from './logger.utils';

const isClient = utils.isClient;
const RUN_PLACE_PREFIX = isClient ? '^' : '_';
const LOG_PREFIX = '#';
const getTimeNow = utils.getTimeNow;
const consoleObjLink = utils.consoleObjLink;

let prevTime = getTimeNow();
let enable = true;

class Logger {

    static enable() {
        enable = true;
    }

    static disable() {
        enable = false;
    }

    constructor(name, opt = {}) {
        this.pos = 0;
        this.name = name;
        this.opt = opt;
    }

    error() {
        showData.call(this, arguments, consoleObjLink.error);
    }

    clear() {
        consoleObjLink.clear && consoleObjLink.clear();
    }

    log() {
        if (canUse.call(this)) {
            showData.call(this, arguments, consoleObjLink.log);
        }
    }

    warn() {
        if (canUse.call(this)) {
            showData.call(this, arguments, consoleObjLink.warn);
        }
    }

    info() {
        if (canUse.call(this)) {
            showData.call(this, arguments, consoleObjLink.info);
        }
    }

    trace() {
        if (canUse.call(this)) {
            showData.call(this, arguments, consoleObjLink.trace);
        }
    }

    dir() {
        if (canUse.call(this)) {
            showData.call(this, arguments, consoleObjLink.dir);
        }
    }

    getTimeInterval(start, end) {
        return utils.getTimeInterval(start, end);
    }

    getTimeNow() {
        return getTimeNow();
    }
}


function showData(args, method) {
    const opt = this.opt;
    if (opt.enable === false) {
        return;
    }

    const nowTime = getTimeNow();

    const firstArg =
        RUN_PLACE_PREFIX +
        LOG_PREFIX +
        this.name + ' [' + utils.getFormattedTime(opt, prevTime, nowTime) + ']: ';

    prevTime = nowTime;

    let showArgs = [firstArg];
    for (let i = 0, l = args.length; i < l; i++) {
        const item = args[i];
        let setItem = item;
        const typeItem = typeof item;
        if (typeItem == 'string') {
            this.pos = i;
            setItem = replaceItem.call(this, item, args, i);
            i = this.pos;

        } else if (typeItem == 'object') {
            if (opt.needStringify) {
                setItem = JSON.stringify(item);
            }
        }
        showArgs.push(setItem);
    }
    args = null;

    method && method.apply(consoleObjLink, showArgs);

    showArgs.length = 0;
    showArgs = null;

}

function replaceItem(item, args, pos) {
    if (item.indexOf('%s') !== -1) {
        pos++;
        this.pos = pos;
        const val = args[pos];
        item = item.replace('%s', val);
        item = replaceItem.call(this, item, args, pos);
    }
    return item;
}

function canUse() {
    if (this.opt.enable === true) {
        return true;
    }
    return enable;
}


export default function (name, opt) {
    return new Logger(name, opt);
}
