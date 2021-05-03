import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng';
import { Book } from '../models/book.model';
import { MessageService } from 'primeng/api';
import { FormMode } from '../models/Enums/formMode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [MessageService]
})
export class BookDetailsComponent implements OnInit {

  public form: FormGroup;
  book: Book;
   isEdit: boolean = false;
  formMode = FormMode
  selectedMode:FormMode;
  submitted = false;
  noPreviewPath = "../../assets/Images/NoImage.png"

  constructor(public ref: DynamicDialogRef,
    private messageService: MessageService,
    private toastr: ToastrService,
    public config: DynamicDialogConfig) {

    this.form = new FormGroup({
      bookId: new FormControl(''),
      bookName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      AuthorName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      catalogId: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      publishDate: new FormControl(),
      coverUrl: new FormControl(''),
    });
    this.setData(this.config.data);
  }

  get f() { return this.form.controls; }

  ngOnInit(): void {
  }

  setData(data: Book): void {
    if (data) {
      this.selectedMode = this.formMode.UPDATE;
      this.book = this.config.data;
      this.form.patchValue(this.book);

      if (this.book.publishDate) {
        this.form.get('publishDate').patchValue(this.formatDate(this.book.publishDate));
      }
    }
    else {
      this.book = new Book();
      this.isEdit = true;
      this.selectedMode = this.formMode.NEW;
    }
  }

  onEdit(): void {
    this.isEdit = !this.isEdit;
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  onSave(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.ref.close({ data: this.form.value, isDeleted: false });
  }

  onDelete(): void {
    this.ref.close({ data: this.form.value, isDeleted: true });
  }

}
