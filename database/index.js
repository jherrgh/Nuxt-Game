import { Database } from '@vuex-orm/core';

import Team from '@/models/Team';
import Player from '@/models/Player';
import Ratings from '@/models/Ratings';
import Stats from '@/models/Stats';
import League from '@/models/League';

const database = new Database();

database.register(Team);
database.register(Player);
database.register(Ratings);
database.register(Stats);
database.register(League);

export default database;
