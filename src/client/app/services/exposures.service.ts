import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { URL_BASE } from './services.config';
import { Exposure } from '../models/index';

@Injectable()
export class ExposuresService {

  private _exposures$: Subject<Exposure[]>; 
  private dataStore: {
    exposures: Exposure[]
  };

  constructor(private http: Http) {
    this.dataStore = { exposures: [] };
    this._exposures$ = <Subject<Exposure[]>>new Subject();

    this.loadAllExposures();
  }

  get exposures$(): Observable<Exposure[]> {
    return this._exposures$.asObservable();
  }

  loadAllExposures(): void {
    this.http.get('app/data/exposures.json').map(response => response.json()).subscribe(data => {
      this.dataStore.exposures = data;
      this._exposures$.next(this.dataStore.exposures);
    }, error => console.log('Could not load exposures.'));
  }

  loadExposure(id: string) {
    this.http.get('app/data/exposures.json').map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.exposures.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.exposures[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.exposures.push(data);
      }

      this._exposures$.next(this.dataStore.exposures);
    }, error => console.log('Could not load exposure.'));
  }

  create(exposure: Exposure) {
    this.dataStore.exposures.push(exposure);
    this._exposures$.next(this.dataStore.exposures);
    /*
    this.http.post('app/data/exposures.json', JSON.stringify(exposure))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.exposures.push(data);
        this._exposures$.next(this.dataStore.exposures);
      }, error => console.log('Could not create exposure.'));
    */
  }


  applyActions(exposures: Exposure[], action: string){
    exposures.forEach(exposure => {
      this.applyAction(exposure, action);
    });
  }


  applyAction(exposure: Exposure, action: string){

    if (action == 'PRICE'){
      exposure.status = "PRICED";      
    }
    else if (action == 'VALIDATE'){
      exposure.status = "VALIDATED";      
    }
    else if (action == 'ALLOCATE'){
      exposure.status = "ALLOCATED";      
    }
    else if (action == 'EXECUTE'){
      exposure.status = "EXECUTED";      
    }
    else if (action == 'CANCEL'){
      exposure.status = "CANCELED";      
    }

    this.update(exposure);
  }




  update(exposure: Exposure) {
    //Offline Only
    this.dataStore.exposures.forEach((exposure, i) => {
      if (exposure.id === exposure.id) { this.dataStore.exposures[i] = exposure; }
    });

    this._exposures$.next(this.dataStore.exposures);
    /*
    this.http.put('app/data/exposures.json', JSON.stringify(exposure))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.exposures.forEach((exposure, i) => {
          if (exposure.id === data.id) { this.dataStore.exposures[i] = data; }
        });

        this._exposures$.next(this.dataStore.exposures);
      }, error => console.log('Could not update exposure.'));
    */
  }

  remove(id: string) {
    this.http.delete('app/data/exposures.json').subscribe(response => {
      this.dataStore.exposures.forEach((exposure, i) => {
        if (exposure.id === id) { this.dataStore.exposures.splice(i, 1); }
      });

      this._exposures$.next(this.dataStore.exposures);
    }, error => console.log('Could not delete exposure.'));
  }










/*
  getAll(): any {
   return this.http.get(URL_BASE + 'exposures')
   .map((res: Response) => {
     return res.json();
   });
  }

  getOneById(id: string): Observable<any> {
    console.log(URL_BASE + 'exposures/' + id);
   return this.http.get(URL_BASE + 'exposures/' + id)
   .map((res: Response) => {
     return res.json();
   });
  }

  getUnderlyingsByExposureId(id: string): Observable<any> {
    console.log(URL_BASE + 'exposures/' + id + '/underlyings');
   return this.http.get(URL_BASE + 'exposures/' + id + '/underlyings')
   .map((res: Response) => {
     return res.json();
   });
  }
*/

  getAll(): any {
   return this.http.get('app/data/exposures.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  getUnderlyingsByExposureId(id: string): any {
   return this.http.get('app/data/underlyings.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  getOneById(id: string): Observable<any> {
   return this.http.get('app/data/exposures.json')
   .map((res: Response) => {
     let item: any;
     res.json().forEach((s: any) => {
       if (s.id == id) {
         item = s;
       }
     });
     return item;
   });
  }




  
}
