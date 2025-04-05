import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ManageCompany extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: true }) 
  isActive: boolean;
}

const ManageCompanySchema = SchemaFactory.createForClass(ManageCompany);

ManageCompanySchema.set('toJSON', {
  transform: function (doc, ret) {
      delete ret.isActive;
      delete ret.isDeleted;
      delete ret.createdAt;
      delete ret.updatedAt;
      delete ret.__v;
      return ret;
  }
});

export { ManageCompanySchema };