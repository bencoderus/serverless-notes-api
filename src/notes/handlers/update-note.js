import { parseRequest, validateRequest } from "../../common/utils/request";
import { respond } from "../../common/utils/response";
import { updateNoteSchema } from "../request-schemas/note.schema";
import { updateNote } from "../services/note-service";

export const handler = async (event) => {  
    const { params, userId, body } = parseRequest(event);
    const { id } = params;
  
    const validation = await validateRequest(updateNoteSchema, body);

    if (validation.error) {
      return respond(400, "Validation error", validation.error);
    }

    await updateNote(userId, id, body);
  
    return respond(200, "Note updated successfully.",);
  };
  