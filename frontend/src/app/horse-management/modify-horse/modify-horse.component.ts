import { Component, OnInit } from '@angular/core';
import { HorseModel } from '../horse.model';
import { HorseService } from '../horse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-horse',
  templateUrl: './modify-horse.component.html',
  styleUrls: ['./modify-horse.component.scss']
})
export class ModifyHorseComponent implements OnInit {
  horseInfo: HorseModel = new HorseModel()
  constructor(
    private horseService:HorseService,
    private route: Router,
    private router:ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.router.snapshot.params.id){
      this.getHorseById(this.router.snapshot.params.id)
    }
  }

  save(){
    if(this.horseInfo.id){
      this.update()
    }else{
      this.horseService.createHorse(this.horseInfo).subscribe(res => {
        if(res){
          this.route.navigate(['./horse'])
          this.horseInfo = new HorseModel()
        }
      })
    }
  }

  update(){
    this.horseService.updateHorse(this.horseInfo).subscribe(res => {
      if(res){
        this.route.navigate(['./horse'])
      }
    })
  }

  getHorseById(id){
    this.horseService.getHorseById(id).subscribe(res => {
      if(res){
        this.horseInfo = res;
        console.log(res)
      }
    })
  }

}
