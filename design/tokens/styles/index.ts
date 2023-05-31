import scrollStyles from './scroll'
import inputStyles from './input'
import toastStyles from './toast'

export default {
  global: {
    body: {
      color: '#000',
      height: '100%',
    },
    html: {
      scrollBehavior: 'smooth',
      height: '100%',
    },
    ...scrollStyles,
    ...inputStyles,
    ...toastStyles
  },
}