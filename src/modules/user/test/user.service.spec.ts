import { Test } from '@nestjs/testing';
import { UserService } from '../user.service';

describe('The user service', () => {
  let user_service: UserService;
  let find_one: jest.Mock;

  beforeEach(async () => {
    find_one = jest.fn();
    const moudle = await Test.createTestingModule({});
  });
});
