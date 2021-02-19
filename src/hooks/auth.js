import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function requestStoragedData() {
      const [
        [, storagedUser],
        [, storagedToken],
      ] = await AsyncStorage.multiGet([
        AuthStoragedKeys.USER,
        AuthStoragedKeys.TOKEN,
      ]);
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
      // TODO: Remover Timeout
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    requestStoragedData();
  }, []);

  const signIn = useCallback(async (email, password) => {
    // const response = await api.post('api/section', { email, password });
    // const { user, access_token } = response.data;
    // api.defaults.headers.Authorization = `Bearer ${access_token}`;
    // await AsyncStorage.setItem(AuthStoragedKeys.TOKEN, access_token);
    // setUser(user);
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return true;
}
