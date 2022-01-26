import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("the Hello stimulus controller was connnected")

    this.element.textContent = "Hello World!"
  }
}
