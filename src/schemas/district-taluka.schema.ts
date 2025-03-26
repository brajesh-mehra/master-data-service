import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Taluka {
  @Prop({ required: true })
  name: string;
}

@Schema({ timestamps: true })
export class District extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop({ type: [{ name: String }], default: [] })
  talukas: Taluka[];
}

const DistrictSchema = SchemaFactory.createForClass(District);

DistrictSchema.set('toJSON', {
  transform: function (doc, ret) {
      delete ret.isActive;
      delete ret.isDeleted;
      delete ret.createdAt;
      delete ret.updatedAt;
      delete ret.__v;
      return ret;
  }
});

export { DistrictSchema };