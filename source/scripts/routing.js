import {h, render, Component} from 'preact';

import events from './context/event-bus';
import settings from './context/settings';
import Tasks from './modules/tasks/Tasks';
import translate from './common/translate';

class Basic extends Component {

    getChildContext() {
        return {
            // pass to components
            events,
            settings,
        };
    }

    render() {
        return <Tasks/>;
    }
}


export default function () {
    document.title = translate('title');
    render(<Basic/>, document.getElementById('root'));
}

