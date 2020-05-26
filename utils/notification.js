import { AsyncStorage } from "react-native";
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';

const FLASHCARD_NOTIFICATION_KEY = 'Flashcard:notifications'

function clearLocalNotification () {
    return AsyncStorage.removeItem(FLASHCARD_NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: 'Play your quiz today!',
        body: "Don't forget to play your quiz for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification () {
    AsyncStorage.getItem(FLASHCARD_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(18)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                        repeat: 'day',
                        }
                    )

                    AsyncStorage.setItem(FLASHCARD_NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}

export function setNextNotification(){
    clearLocalNotification()
        .then(setLocalNotification);
}