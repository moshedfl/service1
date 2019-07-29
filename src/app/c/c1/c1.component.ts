import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../users.service';

@Component({
  selector: 'c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(public svc:UsersService) { }

  ngOnInit() {
  }

}
