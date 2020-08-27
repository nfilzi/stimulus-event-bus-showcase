import { Application } from "stimulus"

import FlatCardController        from "./js/controllers/flat_card_controller"
import BookingsCounterController from "./js/controllers/bookings_counter_controller"

const application = Application.start()
application.register("flat-card",        FlatCardController)
application.register("bookings-counter", BookingsCounterController)
