import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';

export type ToDosDocument = ToDos & Document;
@Schema()
export class ToDos {
  @Prop({
    type: mongoose.Types.ObjectId,
    auto: true,
    required: false,
    default: function () {
      return new mongoose.Types.ObjectId();
    },
  })
  _id: mongoose.Types.ObjectId;

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
  })
  assignmentId: mongoose.Types.ObjectId;

  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: Array,
  })
  tasks: [];

  @Prop({
    type: Boolean,
  })
  completion: boolean;
}

export const ToDosSchema = SchemaFactory.createForClass(ToDos);
