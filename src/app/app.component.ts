import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import clientDetails from './vereport-ma-client.json';


export interface Client {
  date: string;
  user: string;
  kpiName: string;
  kpiData: Detail[];
}

export interface Detail {
  customerId: String,
  name1: String,
  product: String,
  fil: string;
  name: string;
  produkt: string;
  bestand: number;
  nettoneuakquisition: number;
  aktueller: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'layout2';
  clients:Client=clientDetails;

  details:Detail[]=clientDetails.kpiData;


  datasource:Detail[]=this.details;
  displayedColumns: string[] = ['fil', 'name', 'produkt', 'bestand', 'nettoneuakquisition', 'aktueller'];
  dataSource = new MatTableDataSource(this.details);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
