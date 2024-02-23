type TCheckAreAllFields = (
  defaultValues: Record<string, null>,
  currentValues: Record<string, string | null>,
) => boolean;

const checkAreAllFields: TCheckAreAllFields = (defaultValues, currentValues) =>
  Object.keys(defaultValues)
    .map(key => currentValues[key])
    .filter(value => value !== null).length ===
  Object.keys(defaultValues).length;

export default checkAreAllFields;
