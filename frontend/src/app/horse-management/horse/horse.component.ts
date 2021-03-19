import { Component, OnInit } from '@angular/core';
import { HorseModel } from '../horse.model';
import { HorseService } from '../horse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {
  horseList: Array<HorseModel> =[];
  selectesHorse:HorseModel = new HorseModel();
  heartRate:number;
  rateRecord=[]
  constructor(
    private horseService: HorseService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getAllHorses();
    
  }

  getAllHorses() {
    this.horseService.getAllHorse().subscribe((res: any) => {
      if (res) {
        console.log(res)
        this.horseList = res;
      }
    });
  }

  delete(){
    this.horseService.deleteHorse(this.selectesHorse.id).subscribe(res => {
      if(res){
        this.getAllHorses()
      }
    });
  }

  edit(){
    this.route.navigate(['horse/'+this.selectesHorse.id + '/edit'])
  }

  monitor(){
    this.rateRecord =[]
    this.horseService.getRate().subscribe((rate: number) => {
      this.heartRate = rate;
      this.rateRecord.push(rate)
      if(this.rateRecord.length > 2){
        this.rateRecord.splice(1,0)
        console.log(this.rateRecord)
      }
      
    });
  }

}
