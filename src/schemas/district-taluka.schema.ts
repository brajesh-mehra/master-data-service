import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Taluka {
  @Prop({ required: true })
  name: string;
}

@Schema({ timestamps: true })
export class District extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ name: String }], default: [] })
  talukas: Taluka[];
}

export const DistrictSchema = SchemaFactory.createForClass(District);