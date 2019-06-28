import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicionesComponent } from './components/mediciones/mediciones.component';
import { LineChartLayout } from './layout/line-chart/line-chart.layout';

@NgModule({
  declarations: [
    AppComponent,
    MedicionesComponent,
    LineChartLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
