import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorialComponent/tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lessionQuickStart';

  public agree: number = 0;
  public disagree: number = 0;
  public names = ['Mr A', 'Mr B', 'Mr C', 'Mr D'];

  @ViewChild(TutorialComponent, {static: false})
  private tutorialComponent: TutorialComponent;

  parentVote(agree: boolean) {
    if (agree)
      this.agree++;
    else
      this.disagree++;
  }

  changeName(){
    this.tutorialComponent.setName("This is set name from parent component");
  }
}
