import {Entity, model, property} from '@loopback/repository';

@model()
export class Course extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
  })
  id?: number;


  constructor(data?: Partial<Course>) {
    super(data);
  }
}
