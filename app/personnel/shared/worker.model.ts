import { Person } from '../../root/shared/person.model';

export class Worker extends Person  {
  constructor(id: number, firstName: string, lastName: string) { super (id, firstName, lastName)}
  
  jobTitle: string;
//  yearsEmployed: number;
//  hazardPayLevel: number;
}