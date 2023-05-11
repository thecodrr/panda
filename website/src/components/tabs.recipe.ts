import { tabsAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(tabsAnatomy.build())

export const tabsRecipe = defineRecipe({
  name: 'tabs',
  description: 'A tabs style',
  base: parts({
    root: {
      overflowX: 'auto',
      overflowY: 'hidden',
      overscrollBehaviorX: 'contain'
    },
    tablist: {
      position: 'relative',
      mt: 4,
      display: 'flex',
      w: 'max',
      minW: 'full',
      borderBottom: '1px solid token(colors.gray.200)',
      pb: '1px',
      _dark: { borderColor: 'neutral.800' }
    },
    trigger: {
      mr: 2,
      roundedTop: 'md',
      p: 2,
      fontWeight: 'medium',
      lineHeight: '1.25rem',
      transitionProperty: 'colors',
      mb: '-0.5',
      userSelect: 'none',
      borderBottom: '2px solid',
      borderColor: 'transparent',
      color: 'gray.600',
      _hover: {
        borderColor: 'gray.200',
        color: 'black'
      },
      _dark: {
        borderColor: 'neutral.800',
        color: 'neutral.200',
        _hover: {
          color: 'white'
        }
      },
      _selected: {
        borderColor: 'primary.500',
        color: 'primary.600'
      }
    },
    indicator: {
      height: '2px',
      bottom: '-1px',
      background: { base: 'neutral.500', _dark: 'gray.200' }
    },
    content: {
      rounded: 'md',
      pt: 6
    }
  })
})