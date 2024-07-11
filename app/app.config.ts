declare module '@nuxt/schema' {
  interface AppConfigInput {
    Base?: {
      /** Project name */
      name?: string
    }
  }
}

export default defineAppConfig({
  Base: {
    name: 'Hello from App Layer!',
  },
});
