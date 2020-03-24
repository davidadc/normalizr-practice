import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const normalizeUsers = data => normalize(data, [user]);

export default normalizeUsers;
