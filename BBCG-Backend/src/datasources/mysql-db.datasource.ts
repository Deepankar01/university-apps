import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mysql-db.datasource.json';

export class MysqlDbDataSource extends juggler.DataSource {
  static dataSourceName = 'mysqlDB';

  constructor(
    @inject('datasources.config.mysqlDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
