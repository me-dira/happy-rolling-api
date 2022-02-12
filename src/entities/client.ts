import { REST } from '@discordjs/rest';
import { inject, injectable } from 'inversify';
import { ContainerConstants } from 'src/utils/constants';
import { AppBotEnv } from 'src/utils/types/main';

const constants = ContainerConstants.TYPES;

@injectable()
export class Client {
  constructor(
    @inject('APP_ENV') private env: AppBotEnv,
    @inject(constants.DISCORD_JS) private rest: REST,
  ) {}

  // Public methods ----------------------------->

  public async run() {
    const rest = this.getRestClient();
  }

  // Private methods ---------------------------->

  private getRestClient() {
    const token = this.env.BOT_TOKEN;
    const rest = this.rest.setToken(token);

    return rest;
  }
}
