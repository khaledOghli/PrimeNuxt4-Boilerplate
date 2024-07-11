import { v4 as uuidv4 } from 'uuid';

export function generateID(id: string) {
  return id || uuidv4();
}
