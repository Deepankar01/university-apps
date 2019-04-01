import {DefaultCrudRepository} from '@loopback/repository';
import {Course} from '../models';
import {MysqlDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CourseRepository extends DefaultCrudRepository<
  Course,
  typeof Course.prototype.id
> {
  constructor(
    @inject('datasources.mysqlDB') dataSource: MysqlDbDataSource,
  ) {
    super(Course, dataSource);
  }
}
