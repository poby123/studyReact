//버튼이나 검색창이 들어가는 모든 곳에 Card 컴포넌트를 사용할 것이다.
//Card 컴포넌트는 둥근 모서리의 박스에 입체감을 주기 위한 그림자를 포함하고 있다.

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import Spacing, { propTypes as spacingPropTypes } from './Spacing';

class Card extends React.PureComponent {
  render() {
    const { children, styles, ...spacingProps } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <Spacing {...spacingProps}>{children}</Spacing>
      </div>
    );
  }
}

Card.propTypes = {
  ...spacingPropTypes,
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ depth, unit, color }) => ({
  wrapper: {
    ...depth.level1,
    borderRadius: unit,
    backgroundColor: color.white,
    display: 'flex',
    overflow: 'hidden',
    marginBottom: unit * 4,
  },
}))(Card);
