import { GluestackUIProvider, config } from '@gluestack-ui/themed';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import MainNavigation from './src/navigation/MainNavigation';
import dayjs from 'dayjs';
import es from 'dayjs/locale/es-mx';

dayjs.locale(es)

export default function App() {
    return (
        <GluestackUIProvider config={config.theme}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MainNavigation />
                </PersistGate>
            </Provider>
        </GluestackUIProvider>
    );
}


