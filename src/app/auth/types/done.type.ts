import { User } from '../../../entities/user.entity';

export type Done = (err: Error, user: User) => void;
