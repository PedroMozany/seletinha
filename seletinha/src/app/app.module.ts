import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadAlunoComponent } from './professor/cad-aluno/cad-aluno.component';
import { CadAtividadeComponent } from './professor/cad-atividade/cad-atividade.component';
import { HomeComponent } from './professor/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { CadProfessorComponent } from './cad-professor/cad-professor.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { HomePageComponent } from './homePage/homePage.component';
import { LoginAlunoComponent } from './loginAluno/loginAluno.component';
import { AlunoComponent } from './aluno/aluno.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModuleComponent } from './dialog-module/dialog-module.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadAlunoComponent,
    CadAtividadeComponent,
    HomeComponent,
    MenuComponent,
    CadProfessorComponent,
    HomePageComponent,
    LoginAlunoComponent,
    AlunoComponent,
    DialogModuleComponent
   ],
  exports:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatChipsModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
