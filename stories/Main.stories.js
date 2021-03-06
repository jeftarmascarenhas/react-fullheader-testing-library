import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import FullHeader from '../src/Main'
const stories = storiesOf('FullHeader', module).addDecorator(withKnobs)

stories
  .add('with title', () => <FullHeader title={text('title', 'TDD on React')} />)
  .add('with title and subtitle', () => (
    <FullHeader
      title={text('title', 'TDD on React')}
      subtitle={text('subtitle', 'Using Testing Ribrary React')}
    />
  ))
  .add('with title, subtitle and bgColor', () => (
    <FullHeader
      title={text('Title', 'TDD on React')}
      subtitle={text('subtitle', 'Using Testing Ribrary React')}
      bgColor={color('bgColor', '#3299BB')}
    />
  ))
  .add('with title, subtitle, bgColor and textColor', () => (
    <FullHeader
      title={text('title', 'TDD on React')}
      subtitle={text('subtitle', 'Using Testing Ribrary React')}
      bgColor={color('bgColor', '#3299BB')}
      textColor={color('textColor', '#fff')}
    />
  ))
  .add('with title, subtitle, textColor bgImg', () => (
    <FullHeader
      title={text('title', 'TDD on React')}
      subtitle={text('subtitle', 'Using Testing Ribrary React')}
      textColor={color('textColor', '#fff')}
      bgImg={text(
        'bgImg',
        'http://www.htmldrive.net/edit_media/2011/201107/20110719/Full-background-webdevtuts/images/image1.jpg',
      )}
    />
  ))
  .add('with title, subtitle, video, textColor', () => (
    <FullHeader
      title={text('title', 'TDD on React')}
      subtitle={text('subtitle', 'Using Testing Ribrary React')}
      textColor={color('textColor', '#fff')}
      video={text(
        'video',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      )}
    />
  ))
