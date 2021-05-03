import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CalendarModule, CardModule, ChartModule, DialogModule, DialogService, DynamicDialogModule, MessageModule, MessagesModule, TableModule, ToastModule } from 'primeng';

@NgModule({
  declarations: [],
  imports: [
    ChartModule,
    CardModule,
    TableModule,
    CalendarModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
  ],
 
  providers:[
   DialogService,
  ],
  exports:[
    CardModule,
    TableModule,
    CalendarModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
  ],
})
export class PrimengModule { }
