/**
  * @author Marzavec ( https://github.com/marzavec )
  * @summary Saves the config
  * @version 1.0.0
  * @description Writes the current config to disk
  * @module saveconfig
  */

import {
  isAdmin,
  isModerator,
} from '../utility/_UAC.js';
import {
  Errors,
} from '../utility/_Constants.js';

/**
  * Executes when invoked by a remote client
  * @param {Object} env - Environment object with references to core, server, socket & payload
  * @public
  * @return {void}
  */
export async function run({ core, server, socket }) {
  // increase rate limit chance and ignore if not admin
  if (!isAdmin(socket.level)) {
    return server.police.frisk(socket, 20);
  }

  // attempt save, notify of failure
  try {
    await core.appConfig.write();
  } catch (err) {
    return server.reply({
      cmd: 'warn',
      text: 'Failed to save config, check logs.',
      id: Errors.SaveConfig.GENERAL_FAILURE,
      channel: socket.channel, // @todo Multichannel
    }, socket);
  }

  // return success message to moderators and admins
  server.broadcast({
    cmd: 'info', // @todo Add numeric info code as `id`
    text: 'Config saved!',
    channel: false, // @todo Multichannel
  }, { level: isModerator });

  return true;
}

/**
  * Module meta information
  * @public
  * @typedef {Object} saveconfig/info
  * @property {string} name - Module command name
  * @property {string} category - Module category name
  * @property {string} description - Information about module
  * @property {string} usage - Information about module usage
  */
export const info = {
  name: 'saveconfig',
  category: 'admin',
  description: 'Writes the current config to disk',
  usage: `
    API: { cmd: 'saveconfig' }`,
};
