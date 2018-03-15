import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  NgZone
} from '@angular/core';

import * as SocialShare from 'nativescript-social-share';
import { TextField } from 'ui/text-field';
import { Image } from 'ui/image';

import { Grocery } from '../../shared/grocery/grocery';
import { GroceryListService } from '../../shared/grocery/grocery-list.service';

import 'rxjs/add/operator/delay';

@Component({
  selector: 'list',
  moduleId: module.id,
  templateUrl: './list.html',
  styleUrls: ['./list-common.css', './list.css'],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  @ViewChild('groceryTextField') groceryTextField: ElementRef;
  @ViewChild('image') image: ElementRef;

  groceryList: Array<Grocery> = [];
  grocery = '';
  isLoading = true;
  listLoaded = false;

  constructor(
    private groceryListService: GroceryListService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.groceryListService
      .load()
      .delay(1000) // added for emphasis
      .subscribe(loadedGroceries => {
        loadedGroceries.forEach(groceryObject => {
          this.groceryList.unshift(groceryObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }

  add() {
    if (this.grocery.trim() === '') {
      alert('Enter a grocery item');
      return;
    }

    // Dismiss the keyboard
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();

    this.groceryListService.add(this.grocery).subscribe(
      groceryObject => {
        this.groceryList.unshift(groceryObject);
        this.grocery = '';
      },
      () => {
        alert({
          message: 'An error occurred while adding an item to your list.',
          okButtonText: 'OK'
        });
        this.grocery = '';
      }
    );
  }

  delete(grocery: Grocery) {
    this.groceryListService.delete(grocery.id).subscribe(() => {
      // Running the array splice in a zone ensures that change detection gets triggered.
      this.zone.run(() => {
        let index = this.groceryList.indexOf(grocery);
        this.groceryList.splice(index, 1);
      });
    });
  }

  share() {
    let listString = this.groceryList
      .map(grocery => grocery.name)
      .join(', ')
      .trim();
    SocialShare.shareText(listString);
  }
}
