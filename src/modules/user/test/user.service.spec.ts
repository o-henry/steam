import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserRepository } from '../user.repository';

const mock_user_repository = () => ({
  findOne: jest.fn(),
  find: jest.fn(),
});

const mock_user = {
  username: 'henry',
  age: 30,
  email: 'google@google.com',
  phone: '010-0000-0000',
};

describe('user.service', () => {
  let user_service: UserService;
  let user_repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: UserRepository, useFactory: mock_user_repository },
      ],
    }).compile();

    user_service = module.get(UserService);
    user_repository = module.get(UserRepository);
  });

  describe('get user by username', () => {
    it('should return the user', async () => {
      user_repository.findOne.mockResolvedValue(mock_user);
      const user = await user_service.get_user('henry');
      expect(user).toEqual(mock_user);
    });
  });

  describe('get_users', () => {
    it('should return the users', async () => {});

    it('should fail on exception', async () => {});
  });
});
