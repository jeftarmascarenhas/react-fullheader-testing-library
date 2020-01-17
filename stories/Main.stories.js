import React from 'react'
import { storiesOf } from '@storybook/react'

import FullHeader from '../src/Main'
import video from '../src/assets/video/demo.mp4'

storiesOf('FullHeader', module)
  .add('with title', () => <FullHeader title="TDD in React" />)
  .add('with title and subtitle', () => (
    <FullHeader title="TDD on React" subtitle="Using Testing Ribrary React" />
  ))
  .add('with title, subtitle and bgColor', () => (
    <FullHeader
      title="TDD on React"
      subtitle="Using Testing Ribrary React"
      bgColor="#3299BB"
    />
  ))
  .add('with title, subtitle, bgColor and textColor', () => (
    <FullHeader
      title="TDD on React"
      subtitle="Using Testing Ribrary React"
      bgColor="#3299BB"
      textColor="#fff"
    />
  ))
  .add('with title, subtitle, bgImg', () => (
    <FullHeader
      title="TDD on React"
      subtitle="Using Testing Ribrary React"
      bgImg="http://www.htmldrive.net/edit_media/2011/201107/20110719/Full-background-webdevtuts/images/image1.jpg"
    />
  ))
  .add('with title, subtitle, video', () => (
    <FullHeader
      title="TDD on React"
      subtitle="Using Testing Ribrary React"
      video={video}
    />
  ))
