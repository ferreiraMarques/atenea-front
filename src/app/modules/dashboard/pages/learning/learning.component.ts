import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  id:any;
  lesson:boolean = false;
  listQuestions:any;
  result:any;
  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer'];
  correct:any;
  answers:any[] = [];
  anwserQuestion!: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private question: QuestionService) {
    this.id = this.route.params.pipe(map(p => p['id']));
   }

   showQuestions(){
    
   }

   goNext() {
    console.log('respuesta ', this.anwserQuestion);

    this.router.navigate(['panel/perfil']);
  }

  ngOnInit(): void {
    const answers: any[] = [];
    this.question.showQuestionById(this.id.source._value.id)
      .subscribe((resp:any) => {
        resp.question.map((res:any) => {
          console.log(res.correct);
          this.correct = res.correct;
          answers.push(res.answer);
          console.log(res);
        });
        this.answers = resp.question;
        console.log(resp.question);
        this.listQuestions = resp;
      })
  }

}
