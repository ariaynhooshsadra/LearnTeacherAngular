import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GeneratePassComponent } from './generate-pass/generate-pass.component';
import { CardDPCComponent } from './card-dpc/card-dpc.component';
import { CardDCComponent } from './card-dc/card-dc.component';
import { TypingComponent } from './typing/typing.component';
import { PipComponent } from './pip/pip.component';
import { ConvertmmPipe } from './pipe/convertmm.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneratePassComponent,
    CardDPCComponent,
    CardDCComponent,
    TypingComponent,
    PipComponent,
    ConvertmmPipe,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
