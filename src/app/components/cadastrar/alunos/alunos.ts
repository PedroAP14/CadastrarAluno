import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  standalone: false,
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {
  nome: string = "Pedro Américo Parussolo";
  idade: number = 16;
  curso: string = "Desenvovimento de Sistemas";
  email: string = "pamericoparussolo@gmail.com";
  cidade: string = "São Paulo";

}
