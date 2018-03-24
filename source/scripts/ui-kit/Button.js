import {h, Component} from 'preact';

const BUTTON_SHAPES = {
    circle: 'circle',
    square: 'square',
};

const Button = ({className, shape = BUTTON_SHAPES.square, icon, onClick}) => (
    <div
        className={`btn-shape-${shape} ${className && className}`}
        onClick={onClick}
    >
        <div className="btn-icon">{icon}</div>
    </div>

);

export {BUTTON_SHAPES};
export default Button;
