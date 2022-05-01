import { Scalar } from '@nestjs/graphql';
import { Kind, ASTNode } from 'graphql';
import { ObjectId } from 'mongodb';

/**
 * Scalar to convert between MongoDB ObjectId and string
 */
@Scalar('MongoId')
export default class MongoIdScalar {
  description = 'Mongo ObjectId scalar type';

  parseValue(value: string) {
    return new ObjectId(value);
  }

  serialize(value: ObjectId) {
    return new ObjectId(value).toString();
  }

  parseLiteral(ast: ASTNode) {
    if (ast.kind === Kind.STRING) return new ObjectId(ast.value);

    return null;
  }
}
