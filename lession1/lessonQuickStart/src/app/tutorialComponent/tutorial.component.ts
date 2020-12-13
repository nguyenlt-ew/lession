import {Component} from '@angular/core';

@Component({
    selector:'lt-tutorial',
    templateUrl:'./tutorial.component.html',
    styleUrls:['./tutorial.component.css']
})

export class TutorialComponent{
    public title:string = "My Angular 2 tutorial binding";
    public cone = true;
    public ctwo = true;
    public style = 'italic';
    public size = "30px";
    Toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}