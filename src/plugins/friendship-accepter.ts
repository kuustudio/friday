import {
  FriendshipAccepter,
  FriendshipAccepterConfig,
}                               from 'wechaty-plugin-contrib'

const config: FriendshipAccepterConfig = {
  greeting: [
    `Hi there, my name is Friday, I'm a Chatbot built by Wechaty and for Wechaty.`,
    `I'm open-sourced, please feel free to visit https://github.com/wechaty/friday if you want to know me more.`,
    `Currently, I'm in charge of managing some developers' WeChat group: if you know any secret words, please send to me, then I'll be able to invite you to join!`,
  ],
  // keyword: '42',
}

export const FriendshipAccepterPlugin = FriendshipAccepter(config)
