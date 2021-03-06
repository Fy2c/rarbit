import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faPlay, faShareSquare, 
         faPlus, faAngleDown, faArrowUp,
         faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

library.add(faChevronRight, faPlay, faPlayCircle, faAngleDown,
  faArrowUp, faArrowAltCircleLeft, faShareSquare, faPlus,
  faPowerOff) // Include needed icons

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify)

const CUSTOM_ICONS = {
  signout: { // custom icon I want to use
    component: FontAwesomeIcon,
    props: {
      icon: ['fas', 'power-off']
    }
  },
  arrowUp: {
    component: FontAwesomeIcon,
    props: {
      icon: ['fas', 'arrow-up']
    }
  },
  play: {
    component: FontAwesomeIcon,
    props: {
      icon: ['fas', 'play']
    }
  },
  playCircle: {
    component: FontAwesomeIcon,
    props: {
      icon: ['far', 'play-circle']
    }
  },
  arrowAltCircleLeft: {
    component: FontAwesomeIcon,
    props: {
      icon: ['far', 'arrow-alt-circle-left']
    }
  },
  shareAlt: {
    component: FontAwesomeIcon,
    props: {
      icon: ['fas', 'share-square']
    }
  },
  plus: {
    component: FontAwesomeIcon,
    props: {
      icon: ['fas', 'plus']
    }
  },
  down: {
    component: FontAwesomeIcon,
    props: {
      icon: ['fas', 'angle-down']
    }
  }
}

export default new Vuetify({
  theme: {
    dark: true
  },
  icons: {
    iconfont: 'faSvg',
    values: CUSTOM_ICONS
  }
})
