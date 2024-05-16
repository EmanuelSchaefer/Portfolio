import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-potfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule],
  templateUrl: './potfolio.component.html',
  styleUrl: './potfolio.component.scss'
})
export class PotfolioComponent {

  /**
   * Constructor that injects the TranslationService for language management.
   * @param translationText Service for managing language translations.
   */
  constructor(public translationText: TranslationService) { }

  // Array that stores the details of each project in the portfolio.
  portfolio: any = [
    {
      projectPicture: 'Pictures (PC mock up).png',
      projectName: 'Join',
      projectLanguages: 'JavaScript | HTML | CSS',
      projectDescription: {
        EN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        DE: 'Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mittels Drag-and-Drop-Funktionen, und weisen Sie Benutzern und Kategorien zu.',
      },
      projectLive: 'https://join-page.netlify.app',
      projectGit: 'https://github.com/EmanuelSchaefer/Join.git',
    },
    {
      projectPicture: 'Pollo loco 1.png',
      projectName: 'El Pollo Loco',
      projectLanguages: 'JavaScript | HTML | CSS',
      projectDescription: {
        EN: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the endboss chicken.',
        DE: 'Ein einfaches Jump-and-Run-Spiel, basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Salsabottles zu finden, um gegen das Endboss-Huhn zu kämpfen.',
      },
      projectLive: 'https://el-pollo-loco.netlify.app',
      projectGit: 'https://github.com/EmanuelSchaefer/ElPolloLoco.git',
    },
    {
      projectPicture: 'ringoffire-img.png',
      projectName: 'Ring of Fire',
      projectLanguages: 'Angular | TypeScript | HTML | CSS | Firebase',
      projectDescription: {
        EN: 'Ring of Fire a Card-based drinking game with rule-assigned actions.',
        DE: 'Ring of Fire, ein kartenbasiertes Trinkspiel mit zugewiesenen Regeln für Aktionen.',
      },
      projectLive: 'https://ring-of-fire-game.netlify.app',
      projectGit: 'https://github.com/EmanuelSchaefer/Ring-of-Fire.git',
    }
  ]

  /**
   * Returns the project description in the current language.
   * @param descriptionObj Object containing language versions of the description.
   * @returns {string} The project description in the current language.
   */
  getProjectDescription(descriptionObj: any): string {
    const currentLang = this.translationText.getCurrentLanguage();
    return descriptionObj[currentLang] || '';
  }

}