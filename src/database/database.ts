import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import mongoose from "mongoose";

// add your own uri below
const uri = "mongodb://library:library@localhost:27017/library?retryWrites=true&w=majority";


mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

export = mongoose