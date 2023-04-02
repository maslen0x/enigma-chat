import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as labs from 'vuetify/labs/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

export const ui = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
});
