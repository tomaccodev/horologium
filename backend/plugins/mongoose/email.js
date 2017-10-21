/**
 * @param {Mongoose.Schema} schema
 * @param {string} field
 * @param {boolean} required
 * @param {boolean} unique
 * @param {RegExp} match
 * @param {string} doesNotMatchMessage
 */
module.exports = (schema, {
  field = 'email',
  required = true,
  unique = true,
  match = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
  doesNotMatchMessage = `Value for '${field}' is not a valid email`,
} = {}) => {
  const fieldDescription = {
    [field]: {
      type: String,
      required,
      unique,
    },
  };

  if (match) {
    fieldDescription[field].match = [match, doesNotMatchMessage];
  }

  schema.add(fieldDescription);
};
