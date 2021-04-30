import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';

import { IStoreItem } from '@/core/PouchDBHandler/StoreItem.model';

PouchDB.plugin(PouchFind);

const dummyStoreItems = [
  {
    _id: '6001069033613',
    name: 'Yum Yum Peanut butter',
    date_added: new Date(),
    purchase_prize: 50,
    resell_prize: 60,
    quantity: 5,
    category: 'food',
  },
  {
    _id: '6001056662000',
    name: 'Tennis coconut biscuits',
    date_added: new Date(),
    purchase_prize: 15,
    resell_prize: 21.5,
    quantity: 10,
    category: 'food',
  },
  {
    _id: '6001087375108',
    name: 'Axe Gold',
    date_added: new Date(),
    purchase_prize: 20,
    resell_prize: 30,
    quantity: 10,
    category: 'Sanitery',
  },
];

class PouchDBHandler {
  db: PouchDB.Database;
  constructor(db_name: string) {
    this.db = new PouchDB(`${db_name}`);

    this.db.createIndex({
      index: {
        fields: ['action', 'createdAt'],
      },
    });
  }

  getDatabase() {
    return this.db;
  }

  getUser(id: string) {
    return this.db.get(id).then((data) => {
      return data;
    });
  }

  getStoreItem(item_id: string) {
    return this.db.get(item_id).then((data) => {
      return data;
    });
  }

  addStoreItem(data: IStoreItem) {
    return this.db.post(data).then((val) => {
      console.log('Value here', val);
    });
  }

  getTransactions() {
    return this.db
      .find({
        selector: {},
        limit: 10,
      })
      .then(function(result) {
        return result.docs.map((val) => {
          return val;
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  batchUpload(data: any) {
    console.log('Here is ', data);
    this.db
      .bulkDocs(data)
      .then(() => {
        console.log('Data added', data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}


const myDb = new PouchDBHandler('store_database');

myDb.batchUpload(dummyStoreItems);

//console.log(myDb.getTransactions());

export default myDb;
