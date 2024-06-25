const EventEmitter = require("events");

class NotificationService extends EventEmitter {
    sendEmailNotification(emailAddress, message) {
        console.log(
            `Sending email notification to ${emailAddress}: ${message}`
        );
        this.emit("email", { emailAddress, message });
    }

    sendSMSNotification(phoneNumber, message) {
        console.log(`Sending SMS notification to ${phoneNumber}: ${message}`);
        this.emit("sms", { phoneNumber, message });
    }

    sendPushNotification(deviceId, message) {
        console.log(
            `Sending push notification to device ${deviceId}: ${message}`
        );
        this.emit("push", { deviceId, message });
    }
}

const notificationService = new NotificationService();

notificationService.on("email", ({ emailAddress, message }) => {
    console.log(
        `Received email notification: ${message} (sent to ${emailAddress})`
    );
});

notificationService.on("sms", ({ phoneNumber, message }) => {
    console.log(
        `Received SMS notification: ${message} (sent to ${phoneNumber})`
    );
});

notificationService.on("push", ({ deviceId, message }) => {
    console.log(
        `Received push notification: ${message} (sent to device ${deviceId})`
    );
});

notificationService.sendEmailNotification(
    "user@example.com",
    "Hello, this is an email notification!"
);
notificationService.sendSMSNotification(
    "+123456789",
    "Hello, this is an SMS notification!"
);
notificationService.sendPushNotification(
    "device123",
    "Hello, this is a push notification!"
);
