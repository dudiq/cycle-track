import {h, Component} from 'preact';
import translate from '../common/translate/translate';

export default class ThemeSwitch extends Component {
    render() {
        return (
            <div
                onClick={() => {
                    const settings = this.context.settings;
                    const currTheme = settings.theme();
                    settings.theme(currTheme == 'dark' ? 'light' : 'dark');
                    this.forceUpdate();
                }}
            >
                {translate(`theme.${this.context.settings.theme()}`)}
            </div>

        );
    }
}
