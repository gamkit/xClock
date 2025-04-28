// shared/lib/redux/types.ts
import { store } from '@/app/providers/store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;