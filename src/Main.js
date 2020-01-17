import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

function Main({ title, subtitle, bgColor, textColor, bgImg, video }) {
  return (
    <S.Header data-testid="header" bgColor={bgColor} bgImg={bgImg}>
      <S.Content>
        {!!title && (
          <S.Title data-testid="title" textColor={textColor}>
            {title}
          </S.Title>
        )}
        {!!subtitle && (
          <S.SubTitle data-testid="subtitle" textColor={textColor}>
            React Testing Librar
          </S.SubTitle>
        )}
      </S.Content>
      {!!video && (
        <S.Video src={video} data-testid="video" autoPlay muted loop />
      )}
    </S.Header>
  )
}

Main.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  bgImg: PropTypes.string,
  video: PropTypes.string,
}
export default Main
