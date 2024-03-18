import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-potfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule],
  templateUrl: './potfolio.component.html',
  styleUrl: './potfolio.component.scss'
})
export class PotfolioComponent {

  portfolio: any = [
    {
      projectPicture: 'join photo.png',
      projectName: 'Join',
      projectLanguages: 'JavaScript | HTML | CSS',
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      projectLive: '',
      projectGit: '',
    },
    {
      projectPicture: '',
      projectName: 'El Pollo Loco',
      projectLanguages: 'JavaScript | HTML | CSS',
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsabottles to fight against the endboss chicken.',
      projectLive: '',
      projectGit: '',
    },
    {
      projectPicture: '',
      projectName: 'Ring of Fire',
      projectLanguages: 'Angular | TypeScript | HTML | CSS | Firebase',
      projectDescription: 'Ring of Fire a Card-based drinking game with rule-assigned actions.',
      projectLive: '',
      projectGit: '',
    },
    {
      projectPicture: 'Pokédex photo.png',
      projectName: 'Pokédex',
      projectLanguages: 'JavaScript | HTML | CSS | Api',
      projectDescription: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projectLive: '',
      projectGit: '',
    },
  ]

}