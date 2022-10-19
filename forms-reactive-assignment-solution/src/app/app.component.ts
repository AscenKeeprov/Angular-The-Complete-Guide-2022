import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

enum ProjectStatus {
  Stable = 'Stable',
  Critical = 'Critical',
  Finished = 'Finished',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _invalidProjectNames: string[] = ['Test'];
  _projectStatusSelectOptions: string[] = [];
  projectForm: FormGroup;

  ngOnInit(): void {
    this._projectStatusSelectOptions = Object.keys(ProjectStatus);

    this.projectForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl(null, [
        Validators.required,
        // this.projectNameValidator.bind(this)
      ], this.projectNameAsyncValidator.bind(this)),
      status: new FormControl(undefined)
    });
  }

  isProjectNameInvalid(projectName: string) {
    return this._invalidProjectNames.some(i => projectName?.toUpperCase() === i.toUpperCase());
  }

  onFormSubmit(form: FormGroup) {
    console.log('Submitted form value: ', form.value);
  }

  projectNameAsyncValidator(formControl: FormControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return new Promise<ValidationErrors>((resolve, reject) => {
      setTimeout(() => {
        if (this.isProjectNameInvalid(formControl.value)) {
          resolve({ projectName: true });
        }

        resolve(null);
      }, 500);
    });

  }

  projectNameValidator(formControl: FormControl): ValidationErrors {
    if (this.isProjectNameInvalid(formControl.value)) {
      return { projectName: true };
    }

    return null;
  }
}
