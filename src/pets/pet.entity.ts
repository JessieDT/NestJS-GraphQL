import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // tell typeorm and database what are these fileds 
@ObjectType()
export class Pet {
    @PrimaryGeneratedColumn()
    @Field(type => Int) //which properties of this class is going to be part of the schema
    id: number;

    @Column()
    @Field()
    name: string;

    @Column({nullable: true})
    @Field({nullable: true})
    type?: string;
}