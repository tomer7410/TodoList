import { celebrate, SchemaOptions, Modes, Segments, Joi } from "celebrate";
export const validate = (schema: SchemaOptions) =>
  celebrate(
    schema,
    {
      abortEarly: false, // validate all fields in the segment
    },
    {
      mode: Modes.FULL, // validate all segments (body, query, etc.)
    }
  );
const email = Joi.string().email().required();

// NOTE instead of prehashing passwords with SHA256, we could limit
// them to 72 bytes (important: not characters) like so: .max(72, 'utf8')
// However, this would likely leak our password algorithm (i.e. bcrypt).
const password = Joi.string().max(256).required(); // TODO password strength

export const loginSchema = {
  [Segments.BODY]: Joi.object().keys({
    email,
    password,
  }),
};

export const registerSchema = {
  [Segments.BODY]: Joi.object().keys({
    email,
    password,
  }),
};