import ls from '../../../common/local-storage';
import events from '../../../context/event-bus';
import translate from '../../../common/translate';

const KEY_TASKS = 'tasks';

const data = ls(KEY_TASKS) || [];

function saveData() {
    ls(KEY_TASKS, data);
}

const model = {
    taskGetList: () => {
        return data;
    },
    taskAdd: () => {
        const res = window.prompt(translate('tasks.add'), '');
        if (res !== null) {
            const item = {
                title: res,
            };
            data.splice(0, 0, item);
            saveData();
            events.trig('taskChanges');
        }
    },
    taskToBottom: (pos) => {
        const node = data[pos];
        if (window.confirm(translate('tasks.bottom', node.title))) {
            data.splice(pos, 1);
            data.push(node);
            saveData();
            events.trig('taskChanges');
        } else {
            // onCancel && onCancel();
        }
    },
    taskFinish: (pos) => {
        const node = data[pos];
        if (window.confirm(translate('tasks.finish', node.title))) {
            data.splice(pos, 1);
            saveData();
            events.trig('taskChanges');
        }
    },
};

export default model;
