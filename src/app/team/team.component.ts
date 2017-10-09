import {Component, OnInit, ViewEncapsulation} from '@angular/core';


export class TeamMember {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {

  modalOpen = false;
  teamMembers: TeamMember[];
  selectedMember: TeamMember;
  addAnimation = false;

  constructor() {
  }

  ngOnInit() {
    this.teamMembers = [
      {
        id: '1',
        title: 'Carlos',
        subtitle: 'El granjero',
        imageSrc: '../../assets/carlos-min.jpeg',
        description: '¿Qué sería una granja sin granjero? El granjero no tiene horario, su dedicación es completa, él mima y ' +
        'cuida de las gallinas, y que todo funcione a la perfección.Tiene alma de emprendedor, trabaja cada día para ' +
        'que este proyecto de vida personal y profesional sea satisfactorio.'
      },
      {
        id: '3',
        title: 'Las gallinas',
        subtitle: 'Las reinas de la casa',
        imageSrc: '../../assets/gallinas-min.JPG',
        description: 'Son la parte fundamental del proyecto, nos proporcionan  de forma natural un alimento sano y ' +
        'delicioso, que proviene de transformar a través del denominado oviducto, los nutrientes que contiene su propio a' +
        'limento. Se trata de animales excepcionales de cuerpo ligero y plumaje variado, que aprenden rápido, son ' +
        'curiosas y en manada se protegen las unas a las otras.'
      },
      {
        id: '2',
        title: 'Epi & Blas',
        subtitle: 'Los guardianes',
        imageSrc: '../../assets/mastines-min.JPG',
        description: 'Epi y Blas son los encargados de proteger la granja, son hermanos y provienen de perros de guarda ' +
        'en una granja de ovejas de la zona, de raza mastín y aunque todavía son unos cachorros pesan casi 60 kilos. ' +
        'Se encuentran en la zona de entrada a la granja para recibir a quien llega, les encanta jugar uno con el otro,' +
        ' aunque son muy diferentes cada uno tiene su carácter: Blas es inquieto y Epi es mas tranquilo pero con peor genio.'
      },
      {
        id: '4',
        title: 'El apoyo',
        subtitle: 'Sin ellos, no sería lo mismo',
        imageSrc: '../../assets/DSC_2781.JPG',
        description: 'Este granjero no está solo, trabajar en la granja, preparar y comercializar la producción, ' +
        'lleva bastante tiempo y mucho esfuerzo, de manera que el apoyo de las personas que tiene a su alrededor hacen todo mas sencillo.'
      }
    ];
  }

  onImageClicked(member) {
    this.selectedMember = member;
    this.modalOpen = !this.modalOpen;
  }

}
