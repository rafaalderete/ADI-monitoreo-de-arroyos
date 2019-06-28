import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.layout.html',
  styleUrls: ['./line-chart.layout.scss']
})
export class LineChartLayout implements OnChanges {

  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() series: string[] = [];
  @Input() legend: boolean;
  @Input() stacked: boolean;
  @Input() type: string;

  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartOptions: any;
  lineChartColors: any;

  lineChartLegend;
  lineChartType = 'line';

  ngOnChanges() {
    this.configureOptions();
    const finalData: any = [];
    if (Array.isArray(this.data)) {
        const line = {
          data: this.data,
          fill: 'origin'
        };
        finalData.push(line);
    }
    this.lineChartLabels = this.labels;
    this.lineChartData = finalData;
    this.lineChartLegend = this.legend;
    this.lineChartColors = this.getColor(this.type);
  }

  private configureOptions () {
    this.lineChartOptions = {
      responsive: true
    };
  }

  private getColor(type: string): any {
    if (type === 'nivel') {
      return [
        {
          backgroundColor: 'rgba(7,53,211,0.2)',
          borderColor: 'rgba(7,53,211,1)',
          pointBackgroundColor: 'rgba(7,53,211,1)',
          pointBorderColor: 'rgba(7,53,211)',
          pointHoverBackgroundColor: 'rgba(7,53,211)',
          pointHoverBorderColor: 'rgba(7,53,211,0.8)'
        }
      ];
    }
    if (type === 'temperatura') {
      return [
        {
          backgroundColor: 'rgba(221,58,26,0.2)',
          borderColor: 'rgba(221,58,26,1)',
          pointBackgroundColor: 'rgba(221,58,26,1)',
          pointBorderColor: 'rgba(221,58,26)',
          pointHoverBackgroundColor: 'rgba(221,58,26)',
          pointHoverBorderColor: 'rgba(221,58,26,0.8)'
        }
      ];
    }
  }

}