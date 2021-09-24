import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/services/ciclo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {


  ciclos:Ciclo[]=[];
  usuarios:Usuario[]=[];

  disponibilidad: Disponibilidad={
    ciclo:{
      idCiclo: -1
    },
    usuario:{
      idUsuario:-1
    }
  };

  constructor(private usuarioService:UsuarioService, private disponibilidadService: DisponibilidadService,
    private cicloService: CicloService) { 

      usuarioService.listaUsuario().subscribe(
        (usuarios) => this.usuarios = usuarios
      );
      cicloService.listaCiclo().subscribe(
        (ciclos) => this.ciclos = ciclos
      );
    }

   registra(){
      this.disponibilidadService.registraDisponibilidad(this.disponibilidad).subscribe(
        response => {
          console.log(response.mensaje);
          alert(response.mensaje);
        },
        error =>{
          console.log(error);
        },
      );
     }
  
  ngOnInit(): void {
  }

}
