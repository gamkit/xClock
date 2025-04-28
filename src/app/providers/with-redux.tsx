import { Provider } from "react-redux";
import { store } from "@/app/providers/store/store";

export const withRedux = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
