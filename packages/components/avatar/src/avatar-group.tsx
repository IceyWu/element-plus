import { computed, defineComponent, nextTick, ref, unref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { ElPopover } from '@element-plus/components/popover'
import { avatarGroupProps } from './avatar-group-props'
import Avatar from './avatar.vue'
import type { AvatarGroupProps } from './avatar-group-props'
import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'AvatarGroup'
const AvatarGroup = defineComponent({
  name: COMPONENT_NAME,
  props: avatarGroupProps,
  setup(props: AvatarGroupProps, { slots, expose }) {
    console.log('🦄-----props-----', props)
    // console.log('🌳-----slots-----', slots)
    const ns = useNamespace('avatar')
    const children = computed(() => slots.default?.()?.[0].children) as any

    const showRenderSlot = () => {
      const { max, shape, size, maxPopoverTrigger, maxPopoverPlacement } = props
      if (children.value.length > max) {
        const content = children.value || []
        const outAvatar = content.slice(0, max) as any
        const allList = slots.default?.()
        const maxItem = slots.maxPart ? (
          // <ElPopover trigger={maxPopoverTrigger}>{slots.maxPart()}</ElPopover>
          slots.maxPart()
        ) : (
          <ElPopover
            trigger={maxPopoverTrigger}
            placement={maxPopoverPlacement}
            v-slots={{
              reference: () => <Avatar>+{max}</Avatar>,
              default: () => allList,
            }}
          ></ElPopover>
        )
        outAvatar.push(maxItem)
        console.log('🌳-----outAvatar-----', outAvatar)
        return outAvatar
      } else {
        return children.value
      }
    }
    return () => {
      return <div class={ns.b('group')}>{showRenderSlot()}</div>
    }
  },
})

export default AvatarGroup
