import constants from '../constants'

export default (count = 0, action) => {
    switch (action.type) {
        case constants.INCREMENT:
            return count + 1
    }

    return count
}
