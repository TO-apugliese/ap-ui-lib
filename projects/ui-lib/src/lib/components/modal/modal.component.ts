import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../shared/base-component";

declare var M: any;

@Component({
  templateUrl: './modal.component.html',
})
export class ModalComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll(`.${this.id}`);
      M.Modal.init(elems);
    });
  }
}
