import { configure } from 'vee-validate';

export default defineNuxtPlugin(() => {
  configure({
    generateMessage: (context) => {
      const messages = {
        required: `The field ${context.field} is required.`,
        email: `The field ${context.field} must be a valid email.`,
        // Add more validation messages as needed
      };

      return messages[context.rule.name] || `The field ${context.field} is invalid.`;
    },
  });
});
