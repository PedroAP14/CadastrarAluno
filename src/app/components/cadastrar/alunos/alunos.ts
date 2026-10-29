import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  standalone: false,
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {
  nome: string | null = "Pedro Américo Parussolo";
  idade: number | null = 16;
  curso: string | null = "Desenvovimento de Sistemas";
  email: string | null = "pamericoparussolo@gmail.com";
  cidade: string | null = "São Paulo";

  restaurarDados(): void {
    this.nome = null;
    this.idade = null;
    this.curso = null;
    this.email = null;
    this.cidade = null;
  }

  salvarDados(): void {
    if (!this.nome || this.nome.trim() === '') {
      alert("O campo NOME precisa ser preenchido");
      return;
    }

    if (this.idade == null) {
      alert("O campo IDADE precisa ser preenchido");
      return;
    }

    if (this.idade < 15) {
      alert("O aluno precisa ter no MÍNIMO 15 anos de idade");
      return;
    }

    if (!this.curso || this.curso.trim() === '') {
      alert("O campo CURSO precisa ser preenchido");
      return;
    }

    if (!this.email || this.email.trim() === '') {
      alert("O campo E-MAIL precisa ser preenchido");
      return;
    }

    if (!this.cidade || this.cidade.trim() === '') {
      alert("O campo CIDADE precisa ser preenchido");
      return;
    }

    alert("Dados Salvos");
  }

}
