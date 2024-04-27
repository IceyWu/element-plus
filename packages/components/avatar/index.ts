import { withInstall } from '@element-plus/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group'

export const ElAvatar = withInstall(Avatar, {
  AvatarGroup,
})
export const ElAvatarGroup = withInstall(AvatarGroup)
export default ElAvatar

export * from './src/avatar'
export type { AvatarInstance } from './src/instance'
