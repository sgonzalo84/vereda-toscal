import {Component, OnInit} from '@angular/core';

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
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  modalOpen = false;
  teamMembers: TeamMember[];
  selectedMember: TeamMember;

  constructor() {
  }

  ngOnInit() {
    this.teamMembers = [
      {
        id: '1',
        title: 'Carlos',
        subtitle: 'El granjero',
        imageSrc: '../../assets/carlos-min.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' +
        ' eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
        ' mollit anim id est laborum.'
      },
      {
        id: '3',
        title: 'Las gallinas',
        subtitle: 'Las reinas de la casa',
        imageSrc: '../../assets/gallinas-min.JPG',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' +
        ' eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
        ' mollit anim id est laborum.'
      },
      {
        id: '2',
        title: 'Epi & Blas',
        subtitle: 'Los guardianes',
        imageSrc: '../../assets/mastines-min.JPG',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' +
        ' eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
        ' mollit anim id est laborum.'
      },
      {
        id: '4',
        title: 'El soporte',
        subtitle: 'Sin ellos, no sería lo mismo',
        imageSrc: '../../assets/DSC_2781.JPG',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' +
        ' eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
        ' mollit anim id est laborum.'
      }
    ];
  }

  onImageClicked(member) {
    this.selectedMember = member;
    this.modalOpen = !this.modalOpen;
  }

}
