import { Controller } from "stimulus"
import { eventBus }   from "../utils/event_bus"

export default class extends Controller {
  registerBooking() {
    eventBus.emit(this.eventName)
  }

  get eventName() {
    return 'booking-registered'
  }
}
