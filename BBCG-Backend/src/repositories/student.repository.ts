import {DefaultCrudRepository} from '@loopback/repository';
import {Student} from '../models';
import {MysqlDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id
> {
  constructor(
    @inject('datasources.mysqlDB') dataSource: MysqlDbDataSource,
  ) {
    super(Student, dataSource);
  }
}
