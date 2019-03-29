import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {College} from '../models';
import {CollegeRepository} from '../repositories';

export class CollegeController {
  constructor(
    @repository(CollegeRepository)
    public collegeRepository : CollegeRepository,
  ) {}

  @post('/colleges', {
    responses: {
      '200': {
        description: 'College model instance',
        content: {'application/json': {schema: {'x-ts-type': College}}},
      },
    },
  })
  async create(@requestBody() college: College): Promise<College> {
    return await this.collegeRepository.create(college);
  }

  @get('/colleges/count', {
    responses: {
      '200': {
        description: 'College model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(College)) where?: Where,
  ): Promise<Count> {
    return await this.collegeRepository.count(where);
  }

  @get('/colleges', {
    responses: {
      '200': {
        description: 'Array of College model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': College}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(College)) filter?: Filter,
  ): Promise<College[]> {
    return await this.collegeRepository.find(filter);
  }

  @patch('/colleges', {
    responses: {
      '200': {
        description: 'College PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() college: College,
    @param.query.object('where', getWhereSchemaFor(College)) where?: Where,
  ): Promise<Count> {
    return await this.collegeRepository.updateAll(college, where);
  }

  @get('/colleges/{id}', {
    responses: {
      '200': {
        description: 'College model instance',
        content: {'application/json': {schema: {'x-ts-type': College}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<College> {
    return await this.collegeRepository.findById(id);
  }

  @patch('/colleges/{id}', {
    responses: {
      '204': {
        description: 'College PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() college: College,
  ): Promise<void> {
    await this.collegeRepository.updateById(id, college);
  }

  @put('/colleges/{id}', {
    responses: {
      '204': {
        description: 'College PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() college: College,
  ): Promise<void> {
    await this.collegeRepository.replaceById(id, college);
  }

  @del('/colleges/{id}', {
    responses: {
      '204': {
        description: 'College DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.collegeRepository.deleteById(id);
  }
}
