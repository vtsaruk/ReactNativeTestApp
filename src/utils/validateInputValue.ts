export interface IValidateInput {
  len?: number;
  minLen?: number;
  maxLen?: number;
  max?: number;
  min?: number;
  message?: string;
  pattern?: RegExp;
  required?: boolean;
  type?: string;
}

const VALIDATE_MAPPER = {
  len: (val: string, maxLen: number): boolean => {
    return val.length !== maxLen;
  },
  minLen: (val: string, minLen: number): boolean => {
    return val.length < minLen;
  },
  maxLen: (val: string, maxLen: number): boolean => {
    return val.length > maxLen;
  },
  max: (val: string, maxNumber: number): boolean => {
    return val.length < maxNumber;
  },
  min: (val: string, minNumber: number): boolean => {
    return val.length < minNumber;
  },
  pattern: (val: string, pattern: RegExp): boolean => {
    return !pattern.test(val);
  },
  required: (val: string): boolean => {
    return !val;
  },
  type: (val: string, type: string): boolean => {
    let result = false;
    switch (type) {
      case 'string': {
        result = !Number(val);
        break;
      }
      case 'number': {
        result = !!Number(val);
        break;
      }
      case 'decimal': {
        result = !!Number(val) && val.includes('.');
        break;
      }

      default:
        result = String(val) === val;
    }

    return result;
  },
};

const validateInputValue = (
  value: string,
  rules: IValidateInput[],
): string | void => {
  // @ts-ignore
  return rules.reduce((errorMessage, rule) => {
    const {message, ...rest} = rule;
    // @ts-ignore
    const error = Object.keys(rest).reduce((acc, key, index) => {
      if (index === 0) {
        // @ts-ignore
        const res = VALIDATE_MAPPER[key](value, rest[key]);
        return res ? message : acc;
      }
      return acc;
    }, '');

    return error ? message : errorMessage;
  }, '');
};

export default validateInputValue;
