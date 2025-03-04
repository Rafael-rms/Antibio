import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from '../screnns/login/Login';
import Home from '../screnns/home/Home';
import Search from '../screnns/search/Search';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({route})=>({
                headerShown: false, // Remove cabeçalho
                tabBarStyle: {
                    backgroundColor: '#17b4a6', // cor do fundo da aba
                    height: 60, //altura da aba
                    borderTopWidth: 0 // remove bordas superiores. 
                },
                tabBarActiveTintColor: '#ffffff', // cor do icone ativo
                tabBarInactiveTintColor: '#b0bec5', // cor do icone inativo
                tabBarLabelStyle: {
                    fontSize: 12, // tamanho da fonte
                    fontWeight: '600', // peso da fonte
                    marginBottom: 5, // espaço entre icone e texto
                },
                tabBarIcon:({ color, size }) => {
                    let iconNome;

                    if (route.name === 'Home') {
                        iconNome = 'home'
                    }else if (route.name === 'Login') {
                        iconNome = 'login'
                    }else if (route.name === 'Search') {
                        iconNome = 'search'
                    }

                    return <Icon name={iconNome} size={size || 24} color={color}/>
                },
            })}
        >
            
            <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    tabBarLabel: 'Entrar', // Texto personalizado para a aba
                  }}
            />
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Início', // Texto personalizado para a aba
                  }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarLabel: 'Buscar', // Texto personalizado para a aba
                  }}
            />
        </Tab.Navigator>
    )
}
