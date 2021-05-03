import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogService, DynamicDialogRef, MessageService } from 'primeng';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { Book } from '../models/book.model';
import { FieldType } from '../models/Enums/fileType.enum';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [MessageService]
})
export class BookListComponent implements OnInit {

  booksArray: Book[] = [];
  FieldTypeEnum = FieldType;
  selectedBook: Book;
  cols: any;
  loading: boolean = false;
  ref: DynamicDialogRef;

  constructor(private bookService: BookService,
    private messageService: MessageService,
    private toastr: ToastrService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.iniTableData();
    this.getBooks();
  }

  private iniTableData(): void {
    this.cols = [
      { field: 'bookId', header: 'Id', fieldType: FieldType.NUMBER },
      { field: 'bookName', header: 'Book Name', fieldType: FieldType.TEXT },
      { field: 'AuthorName', header: 'Author Name', fieldType: FieldType.TEXT },
      { field: 'catalogId', header: 'Catelog Id', fieldType: FieldType.NUMBER },
      { field: 'publishDate', header: 'Publish Date', fieldType: FieldType.DATE },
    ];
  }

  getBooks(): void {
    this.loading = true;
    this.bookService.getBookList().subscribe((books: Book[]) => {
      this.booksArray = books;
      this.loading = false;
    });
  }

  onRowSelect(): void {
    this.ref = this.dialogService.open(BookDetailsComponent, {
      header: 'Book',
      width: '60%',
      contentStyle: { "height": "70vh", "overflow": "hidden","padding":"unset" },
      data: this.selectedBook
    });
    this.ref.onClose.subscribe((result: any) => {
      if (result && !result.isDeleted) {
        var foundIndex = this.booksArray.findIndex(x => x.bookId == result.data.bookId);
        this.booksArray[foundIndex] = result.data;
        this.toastr.success('Updated book successfully!', 'Updated book');
      }
      else if(result && result.isDeleted){
        var foundIndex = this.booksArray.findIndex(x => x.bookId == result.data.bookId);
        this.booksArray.splice(foundIndex, 1);
        this.toastr.success(' Deletion completed successfully!', 'Remove book');
      }
    });
  }

  onAddContact(): void {
    this.ref = this.dialogService.open(BookDetailsComponent, {
      header: 'Add Book',
      width: '70%',
      contentStyle: { "height": "70vh", "overflow": "hidden" ,"padding":"unset" },
    });
    this.ref.onClose.subscribe((result: any) => {
      if (result) {
        const lastIndex = this.booksArray.length + 1
        result.data.bookId = lastIndex;
        this.booksArray.push(result.data);
        this.toastr.success('Added book successfully!', 'Added book');
      }
    });
  }

}
