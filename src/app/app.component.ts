import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
})
export class AppComponent {
  messagseRef: AngularFireList<any>;
  messages: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.messagseRef = db.list('messages');
    this.itemsRef = db.list('items');
    // Use snapshotChanges().map() to store the key
    this.messages = this.messagseRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }

  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }

  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }


  deleteEverythingItem() {
    this.messagseRef.remove();
  }
 

  addMessage(newName: string) {
    this.messagseRef.push({ text: newName });
  }

  updateMessage(key: string, newText: string) {
    this.messagseRef.update(key, { text: newText });
  }

  deleteMessage(key: string) {    
    this.messagseRef.remove(key); 
  }



  deleteEverythingMessage() {
    this.messagseRef.remove();
  }


  deleteEverything()
  {
    this.messagseRef.remove();
    this.itemsRef.remove();
  }
}