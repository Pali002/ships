// * File: about.component.ts
// * Author: Zentai Pál
// * Copyright: 2023, Zentai Pál
// * Group: Szoft-II-N
// * Date: 2023-04-12
// * Github: https://github.com/Pali002
// * Licenc: GNU GPL

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  constructor() {}

  ngOnInit(): void { }

  name = 'Zentai Pál';
  class = 'Szoft-II-N';
  date = '2023-04-12';

}
