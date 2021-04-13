import { v4 as uuid } from 'uuid';

export abstract class BaseComponent {
    protected identifier = uuid();
}
