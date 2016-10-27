import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Test = new Mongo.Collection('test');
let schema = new SimpleSchema({

});
Test.attachSchema(schema);

export default Test;
