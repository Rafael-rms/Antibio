import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';


import Inicio from '../telas/inicio/Inicio';
import Buscar from '../telas/buscar/Buscar';
import Quiz from '../telas/quiz/Quiz';

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

                    if (route.name === 'Inicio') {
                        iconNome = 'home'
                    }else if (route.name === 'Quiz') {
                        iconNome = 'lightbulb-outline'
                    }else if (route.name === 'Buscar') {
                        iconNome = 'search'
                    }

                    return <Icon name={iconNome} size={size || 24} color={color}/>
                },
            })}
        >
            
            <Tab.Screen
                name='Quiz'
                component={Quiz}
                options={{
                    tabBarLabel: 'Quiz', // Texto personalizado para a aba
                  }}
            />
            <Tab.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    tabBarLabel: 'Início', // Texto personalizado para a aba
                  }}
            />
            <Tab.Screen
                name='Buscar'
                component={Buscar}
                options={{
                    tabBarLabel: 'Buscar', // Texto personalizado para a aba
                  }}
            />
        </Tab.Navigator>
    )
}
