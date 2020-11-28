import { Message } from 'wechaty'
import {
  ManyToOneRoomConnector,
  matchers,
}                                     from 'wechaty-plugin-contrib'

import {
  DEVELOPERS_ROOM_ID_LIST,
  MIKE_CONTACT_ID,
  DEVELOPERS_ROOM_ID_WXWORK,
  DEVELOPERS_ROOM_ID_ENGLISH,
  HEADQUARTERS_ROOM_ID,
}                             from '../../../../../database'

import { bidirectionalMapper }  from '../../bidirectional-mapper'
import { unidirectionalMapper } from '../../unidirectional-mapper'

const matchEnglish = matchers.languageMatcher('english')

/**
 *
 * Many to One
 *
 */
const ManyToEnglishPlugin = ManyToOneRoomConnector({
  blacklist: [
    MIKE_CONTACT_ID,
  ],
  many: [
    ...DEVELOPERS_ROOM_ID_LIST,
    DEVELOPERS_ROOM_ID_WXWORK,
    HEADQUARTERS_ROOM_ID,
  ],
  map: async (message: Message) => {
    if (message.room()?.id === HEADQUARTERS_ROOM_ID) {
      return unidirectionalMapper(message)
    }

    if (message.type() !== Message.Type.Text) {
      return undefined
    }
    if (!matchEnglish(message.text())) {
      return undefined
    }

    return bidirectionalMapper(message)

  },
  one: DEVELOPERS_ROOM_ID_ENGLISH,
})

export {
  ManyToEnglishPlugin,
}
