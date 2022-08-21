import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/core/services/session-storage/session-storage.service';
import { CourseService } from 'src/app/services/course.service';
import { ProfileService } from 'src/app/services/profile.service';
import { QuizService } from 'src/app/services/quiz.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  SESSION_TOKEN:any = environment.sessionToken;
  dataListProfile!: any;
  questionsList!: any;
  listCategory!:any;
  courseData!:any;
  constructor(private sessionStorage: SessionStorageService,
    private profile: ProfileService,
    private course: CourseService,
    private quiz: QuizService) { }

  get auth(){
    return this.sessionStorage.getJsonValue(this.SESSION_TOKEN)
  }

  routerRedirect(value: number) {
    return ['quiz', value];
  }

  addCourse(id:number, name:string){
    Swal.fire({
      title: 'Desea agregar este curso?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: 'rgba(90, 55, 180, 0.7);',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const res:any ={
          "name": name
        }
        this.quiz.addQuiz(this.auth.userID, id, res)
          .subscribe(resp => {
            console.log(resp);
          })
      }
    })
  }

  ngOnInit(): void {
    this.profile.showProfile(this.auth.userID)
      .subscribe((resp:any) => {
        this.dataListProfile = resp;
      });

    this.course.showCourses()
      .subscribe(resp => {
        console.log(resp);
        this.courseData = resp;
      })

  }

}
