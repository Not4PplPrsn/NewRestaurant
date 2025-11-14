// hooks/useTabBarInactivity.ts
import { useNavigation } from 'expo-router';
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { customTabBarStyle } from './Styling/tabBarStyling'; 

export function useTabBarInactivity() { /**(W3Schools, 2025) */
  const navigation = useNavigation(); /**Will be used to restore the navigations functions */
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); /**Set the time out variable to an empty item */

  const hideTabBar = () => { /**Will hide tab bar when the an activity is performed either scrolling or pressing on the screen */
    navigation.setOptions({ //Sets it to its standard form where there are now touch activities with the custom style you made in 
      tabBarStyle: {
        ...customTabBarStyle,
        opacity: 0,
        pointerEvents: 'none',
      },
    });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => { // will count the amount of time in left and will return after the time has lapsed
      navigation.setOptions({
        tabBarStyle: {
          ...customTabBarStyle,
          opacity: 1,
          pointerEvents: 'auto',
        },
      });
    }, 7000); // 7 seconds
  };

  useEffect(() => {
    navigation.setOptions({ /**this is the styling of the tab bar being called again  */
      tabBarStyle: {
        ...customTabBarStyle,
        opacity: 1,
        pointerEvents: 'auto',
      },
    });

    const subscription = AppState.addEventListener('change', (state) => { /**This is the state change for when the event is active */
      if (state === 'active') {
        navigation.setOptions({
          tabBarStyle: {
            ...customTabBarStyle,
            opacity: 1,
            pointerEvents: 'auto',
          },
        });
      }
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      subscription.remove(); /**This is the logic for when the tab bar need to come back */
    };
  }, []);

  return { onTouch: hideTabBar } /**Signals the action for the timer to start  */;
} /**(W3Schools, 2025) */
