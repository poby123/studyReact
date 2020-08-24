/*
    공간을 만들어주는 컴포넌트 만들기
    리액트에서는 공간을 위한 컴포넌트를 프로퍼티로 전달하여 컴포넌트들 사이의 공간을 
    규격화하여 구성할 수 있다.
*/
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from './withStyles';
import { unit } from './Theme';

export const propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
};

class Spacing extends PureComponent {
  render() {
    const { children, top, left, right, bottom, vertical, horizontal } = this.props;
    const computedTop = top ? top : vertical;
    const computedBottom = bottom ? bottom : vertical;
    const computedLeft = left ? left : horizontal;
    const computedRight = right ? right : horizontal;

    const computedStyles = {
      flex: 1,
      ...(computedTop && { marginTop: computedTop * unit }),
      ...(computedBottom && { marginBottom: computedBottom * unit }),
      ...(computedLeft && { marginLeft: computedLeft * unit }),
      ...(computedRight && { marginRight: computedRight * unit }),
    };

    return <div {...css(computedStyles)}>{children}</div>;
  }
}

Spacing.propTypes = propTypes;

export default Spacing;
