import {DefaultCrudRepository} from '@loopback/repository';
import {College} from '../models';
import {MysqlDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CollegeRepository extends DefaultCrudRepository<
  College,
  typeof College.prototype.id
> {
  constructor(
    @inject('datasources.mysqlDB') dataSource: MysqlDbDataSource,
  ) {
    super(College, dataSource);
  }
}
