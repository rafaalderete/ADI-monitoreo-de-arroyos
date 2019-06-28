import { Component, OnInit, asNativeElements } from '@angular/core';
import { MedicionesService } from '../../services/mediciones.service';
import { Medicion } from '../../models/medicion';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.component.html',
  styleUrls: ['./mediciones.component.scss']
})
export class MedicionesComponent implements OnInit {

  niveles: number[] = [];
  temperaturas: number[] = [];
  timestamps: String[] = [];
  dataReady = false;

  constructor(private medicionesService: MedicionesService) { }

  ngOnInit() {
    this.getMediciones();
  }

  getMediciones() {
    this.medicionesService.getMediciones()
      .subscribe(res => {
        this.medicionesService.mediciones = res as Medicion[];
        for (var i = 0; i < this.medicionesService.mediciones.length; i++) {
          this.niveles.push(this.medicionesService.mediciones[i].nivel);
          this.temperaturas.push(this.medicionesService.mediciones[i].temperatura);
          let date = new Date(this.medicionesService.mediciones[i].timestamp);
          this.timestamps.push(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() 
            + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        }
        this.dataReady = true;
      });
  }

}
