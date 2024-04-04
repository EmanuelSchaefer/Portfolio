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
      projectPicture: 'Pictures (PC mock up).png',
      projectName: 'Join',
      projectLanguages: 'JavaScript | HTML | CSS',
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      projectLive: 'https://darling-sprinkles-3d5027.netlify.app',
      projectGit: 'https://github.com/EmanuelSchaefer/Join.git',
    },
    {
      projectPicture: 'Pollo loco 1.png',
      projectName: 'El Pollo Loco',
      projectLanguages: 'JavaScript | HTML | CSS',
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsabottles to fight against the endboss chicken.',
      projectLive: 'https://playful-nasturtium-6622fa.netlify.app',
      projectGit: 'https://github.com/EmanuelSchaefer/ElPolloLoco.git',
    },
    {
      projectPicture: 'Pictures (PC mock up) (2).png',
      projectName: 'Ring of Fire noch in Verfeinerung',
      projectLanguages: 'Angular | TypeScript | HTML | CSS | Firebase',
      projectDescription: 'Ring of Fire a Card-based drinking game with rule-assigned actions.',
      projectLive: '',
      projectGit: '',
    },
    {
      projectPicture: 'Pictures (PC mock up) (1).png',
      projectName: 'Pokédex',
      projectLanguages: 'JavaScript | HTML | CSS | Api',
      projectDescription: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projectLive: 'https://capable-beijinho-862e37.netlify.app',
      projectGit: 'https://github.com/EmanuelSchaefer/Pokedex.git',
    },
  ]

}