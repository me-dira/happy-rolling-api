import { Container } from 'inversify';

import { SEvent } from 'app/entities/SEvent';
import { Client } from 'app/entities/client';

const container = new Container();

container.bind<SEvent>(SEvent).to(SEvent);
container.bind<Client>(Client).to(Client);

export default container;
