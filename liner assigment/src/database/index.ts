import Sequelize from 'sequelize';
import config from '../config';
import themes from '../models/themes.model';
import pages from '../models/pages.model';
import highlights from '../models/highlights.model';
import users from '../models/users.model';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize.Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  dialect: config[env].dialect,
  pool: config[env].pool,
  logQueryParameters: env === 'development',
  timezone : "+09:00",
  benchmark: true,
});

const DB = {
  users: users(sequelize),
  pages: pages(sequelize),
  themes: themes(sequelize),
  highlights: highlights(sequelize),
  sequelize, 
  Sequelize, 
};

//users : highlights = 1 : N
DB.users.hasMany(DB.highlights,{
  foreignKey : "userId"
})

DB.highlights.belongsTo(DB.users, {
  foreignKey : "userId"
})

//pages : highlights = 1 : N
DB.pages.hasMany(DB.highlights, {
  foreignKey : "pageId"
})

DB.highlights.belongsTo(DB.pages,{
  foreignKey : "pageId"
})

//users : pages = 1 : N

DB.users.hasMany(DB.pages, {
  foreignKey : "userId"
})

DB.pages.belongsTo(DB.users, {
  foreignKey : "userId"
})

//users : themes = 1 : 1
DB.users.hasOne(DB.themes,{
  foreignKey : "themeId"
})

DB.themes.belongsTo(DB.users, {
  foreignKey : "themeId"
})


export default DB;
