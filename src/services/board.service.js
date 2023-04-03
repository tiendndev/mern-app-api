import { BoardModel } from "~/models/board.model.";

const createNew = async (data) => {
   try {
      console.log(data);
      const result = await BoardModel.createNew(data);
      return result;
   } catch (error) {
      console.log(error);
      throw new Error(error);
   }
};

export const BoardService = { createNew };
