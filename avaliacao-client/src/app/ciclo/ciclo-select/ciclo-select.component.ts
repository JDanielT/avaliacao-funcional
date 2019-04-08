import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ciclo} from '../../core/model/ciclo';
import {CicloService} from '../../core/service/ciclo.service';

@Component({
  selector: 'app-ciclo-select',
  templateUrl: './ciclo-select.component.html',
  styleUrls: ['./ciclo-select.component.css']
})
export class CicloSelectComponent implements OnInit {

  ciclos: Ciclo[];
  @Output() emitter = new EventEmitter();

  constructor(private cicloService: CicloService) {
  }

  ngOnInit() {
    this.cicloService.findAll().subscribe(data => {
      this.ciclos = data;
    });
  }

  change(cicloId: number): void {
    this.emitter.emit({id: cicloId});
  }

}
