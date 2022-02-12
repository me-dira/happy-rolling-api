import { Container } from 'inversify';
import { REST } from '@discordjs/rest';

import { ContainerConstants } from 'src/utils/constants';
import { AppBotEnv } from 'src/utils/types/main';
import { SEvent } from 'src/entities/seevent';
import { Client } from 'src/entities/client';
import { Rest } from 'src/entities/rest';

const constants = ContainerConstants.TYPES.DISCORD_JS;
const env = process.env as unknown as AppBotEnv;
const container = new Container();
const rest = Rest.getREST();

// Constant values
container.bind<AppBotEnv>('APP_ENV').toConstantValue(env);
container.bind<REST>(constants).toConstantValue(rest);

container.bind<SEvent>(SEvent).to(SEvent);
container.bind<Client>(Client).to(Client);

export default container;
