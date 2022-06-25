import PushNotification from 'react-native-push-notification';





class NotificationManager {

setNavegador(novoNavegador){
  navegador = novoNavegador
}

  // Configuração orientada pela documentação do React Native Push Notification
  // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] onRegister token:', token);
      },
      onNotification: function (notification) {
        console.log('[NotificationManager] onNotification:', notification);
        navegador.navigate("Redirect")
      },
    });
  };

  // É aqui que nossa notificação para o Android é construida
  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  showNotificationSchedule = () => {


    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 10,
      title: "CUPOM DISPONIVEL",
      message: "Está na hora de usar um cupom!", // (required)
      date: new Date(Date.now() + 10 * 1000), // A PRIMEIRA VAI SER DISPARADA NOS 10 SEGUNDOS
      //allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      channelId: 'gesto-id',
      /* Android Only Properties */
      repeatType: "time",
      repeatTime: 5 * 60 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });

    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 11,
      title: "Venha comer com  a gente",
      message: "Está na hora de fazer um lanchinho na melhor lancheria de canoas", // (required)
      date: new Date(Date.now() + 10 * 1000), // A PRIMEIRA VAI SER DISPARADA NOS 10 SEGUNDOS
      //allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      channelId: 'gesto-id',
      /* Android Only Properties */
      repeatType: "time",
      repeatTime:  5 * 60 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });

    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 12,
      title: "Comida barata??",
      message: "Temosas melhoras comidas com os melhores preços!!", // (required)
      date: new Date(Date.now() + 10 * 1000), //A PRIMEIRA VAI SER DISPARADA NOS 10 SEGUNDOS
      //allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      channelId: 'gesto-id',
      /* Android Only Properties */
      repeatType: "time",
      repeatTime: 5 * 60 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });


  };

  // Fução que exibe a notificação
  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      /* Propriedades do Android */
      ...this.buildAndroidNotification(id, title, message, data, options),

      /* Propriedades do Android e iOS */
      channelId: 'gesto-id',
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  };

  // Função que cancela todas notiificações e limpa as que estão no centro de notificações
  cancelAllLocalNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'gesto-id', // (required)
        channelName: 'Notificações por gesto', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };
}

export const notificationManager = new NotificationManager();
