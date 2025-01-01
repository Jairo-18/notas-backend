import { Test, TestingModule } from '@nestjs/testing';
import { TypeIdentificationController } from './type_identification.controller';

describe('TypeIdentificationController', () => {
  let controller: TypeIdentificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeIdentificationController],
    }).compile();

    controller = module.get<TypeIdentificationController>(TypeIdentificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
