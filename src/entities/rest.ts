import { REST } from '@discordjs/rest';

const token = (process.env as any).BOT_TOKEN;

const config = {
  version: '9',
};

export class Rest {
  private rest!: REST;

  private constructor(rest: REST) {
    this.rest = rest;
  }

  // eslint-disable-next-line no-use-before-define
  private static instance: Rest;

  static getREST() {
    if (!Rest.instance) {
      const rest = new REST(config);
      Rest.instance = new Rest(rest);
    }

    return Rest.instance.rest;
  }
}
