import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Visit } from "./visits.models";

@Injectable({ providedIn:'root'})
export class VisitService {
private readonly visits$ = new BehaviorSubject<Visit[]>([
    {
      id: crypto.randomUUID(),
      dateIso: new Date().toISOString(),
      doctorName: 'Dr. Rossi',
      department: 'General',
      reason: 'Initial consultation',
      notes: 'Patient reported mild headaches. No HTML stored here.',
    }
  ]);

  list() {
    return this.visits$.asObservable();
  }

  add(visit: Visit){
    this.visits$.next([visit, ...this.visits$.value])
  }

}