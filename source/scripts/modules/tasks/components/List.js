import {h, Component} from 'preact';

const List = ({children, onClick}) => (
    <div className="task-list" onClick={onClick}>
        {children}
    </div>
);

export default List;
