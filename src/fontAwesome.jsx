//Fontawesome icons
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHouse, faArrowUp} from '@fortawesome/free-solid-svg-icons'

export const fontAwesome = () => {
    library.add(faHouse, faArrowUp)
}

fontAwesome();