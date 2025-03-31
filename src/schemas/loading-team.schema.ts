import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LoadingTeamDocument = LoadingTeam & Document;

@Schema({ timestamps: true })
export class LoadingTeam {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true })
    mobileNo: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: false })
    isDeleted: boolean;
}

const LoadingTeamSchema = SchemaFactory.createForClass(LoadingTeam);

LoadingTeamSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.isActive;
        delete ret.isDeleted;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
    }
});

export { LoadingTeamSchema };