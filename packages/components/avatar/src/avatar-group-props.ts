import { avatarProps } from './avatar'

import type { ExtractPropTypes } from 'vue'

export const avatarGroupProps = {
  options: {
    type: Array,
    default: () => [],
  },
  max: {
    type: Number,
    default: 4,
  },
  // type: avatarProps.type,
} as const
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
