import {customerRequired} from './staticData'
import {message} from './message'

export const checkRequired = (rule, value, callback) => {
  if (!value) {
    let fieldName = rule.field
    let itemName = customerRequired[fieldName]
    callback(new Error(message.required + itemName))
  } else {
    callback()
  }
}
