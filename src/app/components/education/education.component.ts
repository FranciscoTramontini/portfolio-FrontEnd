import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  public educations: Education[] = [];
  public editEducation!: Education;
  public deleteEducation!: Education;

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.getEducations();
  }

  public getEducations(): void {
    this.educationService.getEducations().subscribe({
      next: (response: Education[]) => {
        this.educations = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onAddEducation(addForm: NgForm): void {
    document.getElementById("add-education-form")!.click();
    this.educationService.addEducation(addForm.value).subscribe({
      next: (response: Education) => {
        console.log(response);
        this.getEducations();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    });
  }

  public onEditEducation(education: Education): void {
    this.educationService.updateEducation(education).subscribe({
      next: (response: Education) => {
        console.log(response);
        this.getEducations();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onDeleteEducation(educationId: number): void {
    this.educationService.deleteEducation(educationId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducations();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenModal(education: Education, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none'
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEducationModal');
    }
    if (mode === 'edit') {
      this.editEducation = education;
      button.setAttribute('data-bs-target', '#editEducationModal');
    }
    if (mode === 'delete') {
      this.deleteEducation = education;
      button.setAttribute('data-bs-target', '#deleteEducationModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
