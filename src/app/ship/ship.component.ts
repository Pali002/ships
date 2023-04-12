import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-emp',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  ships !: any;
  shipForm !: FormGroup;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.getShips();
    this.shipForm = this.formBuilder.group({
      id: [''],
      name: [''],
      lenght: [''],
      price: [''],
      person: [''],
      trailer: ['']
    });
  }

  getShips() {
    this.api.getShips().subscribe({
      next: (response:any) => {
        console.log(response)
        this.ships = response;
      },
      error: () => {}
    });
  }

  onClickSaveButton(){

    let ship ={
      name: this.shipForm.value.name,
      lenght: this.shipForm.value.lenght,
      price: this.shipForm.value.price,
      person: this.shipForm.value.person,
      trailer: this.shipForm.value.trailer
    }
    this.api.addShip(ship).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: () => {}
    });
  }

}