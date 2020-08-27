import { Controller } from "stimulus"
import { eventBus }   from "../utils/event_bus"

export default class extends Controller {
  connect() {
    eventBus.element.addEventListener('booking-registered', this.incrementBookingsCount.bind(this))
  }

  incrementBookingsCount() {
    this.currentCount = this.currentCount + 1
  }

  set currentCount(value) {
    this.data.set('current-count', value)
    this.element.innerText = value
  }

  get currentCount() {
    return parseInt(this.data.get('current-count'))
  }
}
