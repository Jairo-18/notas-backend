import { Test, TestingModule } from '@nestjs/testing';
import { TypeIdentificationService } from './type_identification.service';

describe('TypeIdentificationService', () => {
  let service: TypeIdentificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeIdentificationService],
    }).compile();

    service = module.get<TypeIdentificationService>(TypeIdentificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
