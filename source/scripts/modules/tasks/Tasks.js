import {h, Component} from 'preact';

import Button, {BUTTON_SHAPES} from '../../ui-kit/Button';
import EmptyBlock from '../../ui-kit/EmptyBlock';

import Item from './components/Item';
import List from './components/List';
import ThemeSwitch from '../../ui-kit/ThemeSwitch';
import utils from '../../common/common.utils';
import taskLangs from './tasks.langs';
import log from '../../common/logger';
import translate from '../../common/translate';

import './tasks.styles';
import taskModel from './model/taskModel';

translate.addBlock(taskLangs);

const logger = log('Tasks.js');

class Tasks extends Component {

    getChildContext() {
        return {
            ...this.context,
            taskModel,
        };
    }

    componentWillMount() {
        this.context.events.on('taskChanges', this.onChanges, this);
    }

    componentWillUnmount() {
        this.context.events.off('taskChanges', this.onChanges, this);
    }

    onChanges(msg, data) {
        // update state
        this.forceUpdate();
    }

    onListClick = (ev) => {
        const struct = utils.getAction(ev.target);
        const method = taskModel[struct.action];
        method && method(struct.value);
    };

    render() {
        const taskList = taskModel.taskGetList();
        return (
            <div
                className="tasks-module"
            >
                <List
                    onClick={this.onListClick}
                >
                    {taskList.length ?
                        taskList.map((item, index) => {
                            return (
                                <Item
                                    actionBottom="taskToBottom"
                                    actionFinish="taskFinish"
                                    index={index}
                                    title={item && item.title}
                                />
                            );
                        }) :
                        <EmptyBlock>
                            {translate('tasks.empty')}
                        </EmptyBlock>}
                </List>
                <Button
                    shape={BUTTON_SHAPES.circle}
                    icon="+"
                    className="is-edge-btn"
                    onClick={taskModel.taskAdd}
                />
                <ThemeSwitch/>
            </div>
        );
    }
}

export default Tasks;

