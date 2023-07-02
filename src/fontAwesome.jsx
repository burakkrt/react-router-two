//Fontawesome icons
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faHouse,
    faArrowUp,
    faSpinner,
    faUser,
    faBasketball,
    faPeopleGroup
} from '@fortawesome/free-solid-svg-icons'

export const fontAwesome = () => {
    library.add(faHouse, faArrowUp, faSpinner, faUser, faBasketball, faPeopleGroup)
}

fontAwesome();