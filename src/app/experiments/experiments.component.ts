import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];
  updatingExperiment: string = null;
  beingEdited: boolean = false;
  inExperiments: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  add(experiment: string){
    let errorMsg = '';
    if(this.experiments.includes(experiment)){
      this.inExperiments = true;
      errorMsg = `${experiment} already on list.`
      // alert(`${experiment} already on list.`)
    }
    if(!this.inExperiments){
      this.experiments.push(experiment);
    }
    this.inExperiments = false;
  }
  remove(experiment: string){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }
  edit(experiment: string){
    this.updatingExperiment = experiment;
  }

  save(experiment: string){
    let index = this.experiments.indexOf(experiment);
    this.experiments[index] = experiment;
    this.beingEdited = false;

  }

}
// Allow user to add Experiments
// Allow user to edit Experiments
// Allow user to remove experiments