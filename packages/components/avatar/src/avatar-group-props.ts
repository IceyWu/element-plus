import { useTooltipTriggerProps } from '@element-plus/components/tooltip'
import { avatarProps } from './avatar'

import type { ExtractPropTypes } from 'vue'

export const avatarGroupProps = {
  /**
   * @description maximum number of avatars.
   */
  max: {
    type: Number,
    default: 4,
  },
  /**
   * @description avatar shape.
   */
  shape: avatarProps.shape,
  /**
   * @description the source of the image for an image avatar.
   */
  size: avatarProps.size,
  /**
   * @description How should the tooltip be triggered (to show)
   */
  maxPopoverTrigger: useTooltipTriggerProps.trigger,
  /**
   * @description the placement of the tooltip
   */
  maxPopoverPlacement: useTooltipTriggerProps.placement,
  /**
   * @description the placement of the tooltip
   */
  maxStyle: {
    type: Object,
    default: () => ({}),
  },
} as const
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
