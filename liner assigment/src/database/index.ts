import Sequelize from 'sequelize';
import config from '../config';
import colors from '../models/colors.model';
import pages from '../models/pages.model';
import texts from '../models/texts.model';
import users from '../models/users.model';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize.Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  dialect: config[env].dialect,
  pool: config[env].pool,
  logQueryParameters: env === 'development',
  benchmark: true,
});

const DB = {
  users: users(sequelize),
  pages: pages(sequelize),
  colors: colors(sequelize),
  texts: texts(sequelize),
  sequelize, 
  Sequelize, 
};

//users : pages = 1 : N
DB.users.hasMany(DB.pages,{
  foreignKey : "users_userId"
})

DB.pages.belongsTo(DB.users,{
  foreignKey : "userId"
})

//pagges : texts = 1 : N
DB.pages.hasMany(DB.texts, {
  foreignKey : "pages_pageId"
})

DB.texts.belongsTo(DB.pages,{
foreignKey : "pagesId"
})
 
//texts : colors = 1 : N
DB.texts.hasMany(DB.colors, {
  foreignKey : "pages_highlightId"
})

DB.colors.belongsTo(DB.texts,{
  foreignKey : "highlightId"
})


export default DB;
