import React from 'react'

import * as S from './styled'

function Main({ title, subtitle }) {
  return (
    <S.Header data-testid="header">
      {title && <S.Title data-testid="title">{title}</S.Title>}
      {subtitle && (
        <S.SubTitle data-testid="subtitle">React Testing Librar</S.SubTitle>
      )}
    </S.Header>
  )
}

export default Main
