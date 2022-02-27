import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserRepository } from '../user.repository';

const mockUserRepository = () => ({
  findOne: jest.fn(),
});
describe('The user service', () => {
  let user_service: UserService;
  let user_repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
      ],
    }).compile();

    user_service = module.get(UserService);
    user_repository = module.get(UserRepository);
  });
  describe('get_user', () => {
    it('should return the user', async () => {});

    it('should fail on exception', async () => {});
  });
});
