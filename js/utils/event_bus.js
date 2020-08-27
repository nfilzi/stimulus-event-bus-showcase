class EventBus {
  get element() {
    return document.querySelector('[stimulus-event-bus]')
  }

  emit(name, details = {}) {
    event = new CustomEvent(name)
    this.element.dispatchEvent(event, details)
  }
}

export const eventBus = new EventBus()
