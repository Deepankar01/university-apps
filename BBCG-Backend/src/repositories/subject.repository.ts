import {DefaultCrudRepository} from '@loopback/repository';
import {Subject} from '../models';
import {MysqlDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SubjectRepository extends DefaultCrudRepository<
  Subject,
  typeof Subject.prototype.id
> {
  constructor(
    @inject('datasources.mysqlDB') dataSource: MysqlDbDataSource,
  ) {
    super(Subject, dataSource);
  }
}
