import {Entity, model, property} from '@loopback/repository';

@model()
export class Subject extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  duration: number;

  @property({
    type: 'number',
    required: true,
  })
  fees: number;


  constructor(data?: Partial<Subject>) {
    super(data);
  }
}
