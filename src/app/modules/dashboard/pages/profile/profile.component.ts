import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private categoria: CategoryService,
    private question: QuestionService) { }

  ngOnInit(): void {

    this.categoria.showCategory()
      .subscribe(resp => {
        console.log(resp);
      });

    this.question.showQuestion()
      .subscribe(resp => {
        console.log(resp);
      });

    this.question.showQuestionById(4)
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
