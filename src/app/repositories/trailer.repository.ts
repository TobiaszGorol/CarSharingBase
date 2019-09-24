import { Repository } from './repository';
import { Trailer } from '../models/trailer.model';
import { HookType } from '../models/enums.model';

export class TrailerRepository extends Repository<Trailer>{
    public getByHookType(type: HookType): Trailer[] {
        return this.items.filter( l => l.hookType == type );
    }
}