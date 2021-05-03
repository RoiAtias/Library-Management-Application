import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule, MessageService } from 'primeng';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Shared/Templates/header/header.component';
import { FooterComponent } from './Shared/Templates/footer/footer.component';
import { AppLayoutComponent } from './Shared/Templates/app-layout/app-layout.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
     MessagesModule,
     MessageModule,
     ToastModule,
     ButtonModule,
     ToastrModule.forRoot(),
  ],

  bootstrap: [AppComponent],
  providers:[MessageService,
          ],
})
export class AppModule { }
