import { computed, defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { ElPopover } from '@element-plus/components/popover'
import { ElSpace } from '@element-plus/components/space'
import { isNumber } from '@element-plus/utils'
import { avatarGroupProps } from './avatar-group-props'
import ElAvatar from './avatar.vue'

const COMPONENT_NAME = 'ElAvatarGroup'
const AvatarGroup = defineComponent({
  name: COMPONENT_NAME,
  props: avatarGroupProps,
  setup(props, { slots }) {
    const ns = useNamespace('avatar')
    const children = computed(() => slots.default?.()?.[0].children) as any

    const showRenderSlot = () => {
      const {
        max,
        size,
        shape,
        maxPopoverTrigger,
        maxPopoverPlacement,
        maxStyle,
      } = props
      const maxCount = isNumber(max) ? max : 5
      if (children.value.length > maxCount) {
        const content = children.value || []

        const slotsDefaultTemp = content.map((element) => {
          element.props.size = size
          element.props.shape = shape
          return element
        })

        const outAvatar = content.slice(0, max) as any
        // 加上size和shape

        const allList = <ElSpace wrap={true}>{slotsDefaultTemp}</ElSpace>
        const maxItem = slots.maxPart ? (
          <ElPopover
            trigger={maxPopoverTrigger}
            placement={maxPopoverPlacement}
            width="210"
            v-slots={{
              reference: () => slots.maxPart?.(),
              default: () => allList,
            }}
          ></ElPopover>
        ) : (
          <ElPopover
            trigger={maxPopoverTrigger}
            placement={maxPopoverPlacement}
            width="210"
            v-slots={{
              reference: () => (
                <ElAvatar size={size} shape={shape} style={maxStyle}>
                  +{maxCount}
                </ElAvatar>
              ),
              default: () => allList,
            }}
          ></ElPopover>
        )
        outAvatar.push(maxItem)
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
