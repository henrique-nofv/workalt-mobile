import React from 'react';

import * as S from './styles';

function Button(props) {
  const {title, backgroundColor, style, ...buttonProps} = props;
  return (
    <S.Button backgroundColor={backgroundColor} style={style} {...buttonProps}>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}

export default Button;
