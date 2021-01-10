import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import path from "path";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  user: "postgres",
  type: "postgresql",
  password: "amit",
  host: "localhost",
  port: 5432,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
