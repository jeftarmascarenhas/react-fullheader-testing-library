import styled from 'styled-components'

export const Header = styled.header`
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.bgImg});
`
export const Content = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`
export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.5;
  color: ${props => props.textColor};
`
export const SubTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  color: ${props => props.textColor};
`
export const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
`
