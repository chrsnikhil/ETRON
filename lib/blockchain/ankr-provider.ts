import { AnkrProvider } from '@ankr.com/ankr.js';

const ankrProvider = new AnkrProvider(process.env.NEXT_ANKR_API_ENDPOINT ?? '');

export default ankrProvider;
