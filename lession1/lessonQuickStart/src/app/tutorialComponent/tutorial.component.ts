import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'lt-tutorial',
    templateUrl:'./tutorial.component.html',
    styleUrls:['./tutorial.component.css']
})

export class TutorialComponent{
    public title:string = "This is child component";
    @Input() name:string;
    @Output() onVote = new EventEmitter<boolean>();
    setName(name:string){
        this.name = name;
    }
    public voted:boolean = false;
    vote(agree:boolean){
        this.voted = true;
        this.onVote.emit(agree);
    }
}