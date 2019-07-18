import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  @ViewChild("barCanvas") barCanvas: ElementRef;

  private barChart: Chart;

  constructor() {}

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: [,,,,,,],
        datasets: [
          {
            label: "# Thula",
            data: [4, 19, 17, 77, 17, 100],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}