import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
v1:string="nasser";
prop:boolean=true;
message:string=''
show(){
  this.message='Abdenasser'
}
v2:string="bonjour Nasser"

}
