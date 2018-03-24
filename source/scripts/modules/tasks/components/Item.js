import {h, Component} from 'preact';
import translate from '../../../common/translate';

const Item = ({title, actionBottom, actionFinish, index}) => (
    <div className="task-item">
        <div className="indi"/>
        <div className="title do-bottom">{title}</div>
        <div className="bottom">
            <div className="btn left-btn" data-action={actionBottom} data-value={index}>
                {translate('tasks.btnDown')}
            </div>
            <div className="btn" data-action={actionFinish} data-value={index}>
                {translate('tasks.btnFinish')}
            </div>
        </div>
    </div>
);

export default Item;
