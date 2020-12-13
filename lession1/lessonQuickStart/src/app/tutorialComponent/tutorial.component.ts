import {Component} from '@angular/core';

@Component({
    selector:'lt-tutorial',
    templateUrl:'./tutorial.component.html',
    styleUrls:['./tutorial.component.css']
})

export class TutorialComponent{
    public title:string = "My Angular 2 tutorial binding";
    
}