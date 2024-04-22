import { withInstall } from '@element-plus/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group'

export const ElAvatar = withInstall(Avatar)
export default ElAvatar
export const ElAvatarGroup = withInstall(AvatarGroup)

export * from './src/avatar'
export type { AvatarInstance } from './src/instance'
