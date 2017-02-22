import React from 'react';
import './buttons.scss';

const Icon = (props) => (<svg aria-hidden="true">
  <use xlinkHref={'symbols.svg#' + props.id} />
</svg>);

export const BaseButton = (props) => (
  <button className={'btn btn--' + props.variant}>{props.children}</button>
);

export const IconButton = (props) => (
  <button className="btn btn--icon">
    <Icon id={props.icon} />
    {props.children}
  </button>
);
