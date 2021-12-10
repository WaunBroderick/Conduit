import { Document } from 'mongoose';

export interface Department extends Document {
  readonly name: string;
  readonly organization: string;
  readonly subSection: string;
}
