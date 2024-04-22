import { computed, defineComponent, nextTick, ref, unref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { avatarGroupProps } from './avatar-group-props'
import type { AvatarGroupProps } from './avatar-group-props'

const COMPONENT_NAME = 'AvatarGroup'
const AvatarGroup = defineComponent({
  name: COMPONENT_NAME,
  props: avatarGroupProps,
  setup(props: AvatarGroupProps, { slots, expose }) {
    // console.log('🦄-----props-----', props)
    // console.log('🌳-----slots-----', slots)
    // const ns = useNamespace('avatar')
    // const slotLength = computed<number>(
    //   () => slots.default?.()?.[0].children?.length || 0
    // )
    // const { max } = props
    // // 超出max的数量，显示max+的数量
    // const showRender = () => {
    //   const isOverMax = slotLength.value > max
    //   return isOverMax ? `${max}+` : slotLength.value
    // }
    // const showRenderSlot = () => {
    //   if (slotLength.value > max) {
    //     // 截取
    //     return slots.default?.()?.[0].children.slice(0, max)
    //   } else {
    //     return slots.default?.()?.[0].children
    //   }
    // }
    // return () => {
    //   return (
    //     <div class={ns.b('group')}>
    //       {showRenderSlot()}
    //       {slotLength.value > max && (
    //         <div class={ns.e('count')}>{showRender()}</div>
    //       )}
    //     </div>
    //   )
    // }
  },
})

export default AvatarGroup
