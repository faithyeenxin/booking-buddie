'use strict';

/**
 * package-transaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::package-transaction.package-transaction');
