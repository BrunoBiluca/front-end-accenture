import { Component } from '@angular/core';
import { Demand } from '../models/demand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data: Demand[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartColors: any[] = [
    {
      backgroundColor: ["#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF", "#7CB7EF"]
    }];

  public barChartData: any[];

  public isMenuMaximized: boolean = true;

  constructor() {
    this.data = [];
    this.data.push(new Demand('Demanda 1', '2018-01-05', 50, 40, 35));
    this.data.push(new Demand('Demanda 2', '2018-02-05', 56, 40, 35));
    this.data.push(new Demand('Demanda 3', '2018-03-05', 52, 40, 35));
    this.data.push(new Demand('Demanda 4', '2018-04-05', 30, 40, 35));
    this.data.push(new Demand('Demanda 5', '2018-05-05', 54, 40, 35));
    this.data.push(new Demand('Demanda 6', '2018-06-05', 12, 40, 35));
    this.data.push(new Demand('Demanda 7', '2018-07-05', 67, 40, 35));
    this.data.push(new Demand('Demanda 8', '2018-08-05', 52, 40, 35));
    this.data.push(new Demand('Demanda 9', '2018-09-05', 50, 40, 35));
    this.data.push(new Demand('Demanda 10', '2018-10-05', 10, 40, 35));
    this.data.push(new Demand('Demanda 11', '2018-11-05', 20, 40, 35));
    this.data.push(new Demand('Demanda 12', '2018-12-05', 56, 40, 35));
    this.data.push(new Demand('Demanda 13', '2018-01-05', 55, 40, 35));
    this.data.push(new Demand('Demanda 14', '2018-02-05', 59, 40, 35));
    this.data.push(new Demand('Demanda 15', '2018-03-05', 70, 40, 38));
    this.data.push(new Demand('Demanda 16', '2018-04-05', 10, 40, 7));

    this.setChart();
  }

  public setChart() {
    this.barChartData = [];

    let demandPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.data.forEach((val, idx) => {
      let demandDate = new Date(val.date);
      demandPerMonth[demandDate.getMonth()] += val.capacity - val.fulfilledAttendance;
    })
    this.barChartData.push({ data: demandPerMonth, label: 'Demandas atendidas por mês' })
  }

  public minimizeMenu() {

    this.isMenuMaximized = false;
  }

  public maximizeMenu() {
    this.isMenuMaximized = true;
  }
}
