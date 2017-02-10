# ng-rx

## Creating a store

```ts
import { Store, provideStore } from '@ngrx/store';

@NgModule({
  imports:      [ StoreModule.provideStore({ ... }) ],
  declarations: [ ... ],
  providers:    [ ... ],
  exports:      [ ... ],
  bootstrap:    [ ... ]
})
export class AppModule {  }
```

---

## Creating an action

```ts
export class PeopleActions {
  static ADD_PERSON = 'ADD_PERSON';
  static REMOVE_PERSON = 'REMOVE_PERSON';
  addPerson(): Action {
    return {
          type: PeopleActions.ADD_PERSON
      };
  }
  removePerson(): Action {
      return {
          type: PeopleActions.REMOVE_PERSON
      };
  }
}
```

---

## Creating a reducer

```ts
export const people = (state = [], action) => {
  switch (action.type) {
    case PeopleActions.ADD_PERSON:
      return [ ...state, action.payload ];
    case PeopleActions.REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload);
    ...
    default:
      return state;
  }
}
```
---

## Adding the reducer into the store

```ts
import { Store, provideStore } from '@ngrx/store';
import { people } from './people';

@NgModule({
  imports:      [ ..., StoreModule.provideStore({ people }) ],
  declarations: [ ... ],
  providers:    [ ... ],
  exports:      [ ... ],
  bootstrap:    [ ... ]
})
export class AppModule {  }
```
---

## Using the store to dispatch actions

```ts
import { Store } from '@ngrx/store';
import { people } from './people';

@Component({
    selector: 'person-input',
    template: `
      <input #personName type="text" />
      <button (click)="add(personName)">Add Person</button>
    `
})
export class PersonInputComponent {
    constructor(private _store: Store<any>) { }

    add(personInput) {
        let person = {
            name: personInput.value,
            id: 0
        };

        this._store.dispatch({ type: 'ADD_PERSON', payload: person })
        personInput.value = '';
    }
}
```