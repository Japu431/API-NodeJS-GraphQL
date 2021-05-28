import { ObjectType , Field } from "type-graphql";

@ObjectType()
class Category {
    @Field()
    name: String;
    @Field()
    description: String;
    @Field()
    _id: string;
}

export default Category;