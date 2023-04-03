import Joi from "joi";
import { ObjectId } from "mongodb";
import { getDB } from "~/config/mongodb";
import { env } from "~/config/environtment";

/* Define Column collection */
const columnCollectionName = "columns";
const columnCollectionSchema = Joi.object({
   boardId: Joi.string().required(),
   title: Joi.string().required().min(3).max(20).trim(),
   cardOrder: Joi.array().items(Joi.string()).default([]),
   createdAt: Joi.date().timestamp().default(Date.now()),
   updatedAt: Joi.date().timestamp().default(null),
   _destroy: Joi.boolean().default(false),
});

const validateSchema = async (data) => {
   return await columnCollectionSchema.validateAsync(data, {
      abortEarly: false,
   });
};

const createNew = async (data) => {
   try {
      const value = await validateSchema(data);
      const result = await getDB()
         .collection(columnCollectionName)
         .insertOne(value);
      return result;
   } catch (error) {
      console.log(error);
   }
};

const update = async (id, data) => {
   try {
      const result = await getDB()
         .collection(columnCollectionName)
         .findOneAndUpdate( 
            { _id: new ObjectId(id) },
            { $set: data },
            { returnOriginal: false }
         );
      console.log(result.value);
      return result.value;
   } catch (error) {
      throw new Error(error);
   }
};

export const ColumnModel = { createNew, update };
