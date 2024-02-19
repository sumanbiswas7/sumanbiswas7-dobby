import { notifications } from "@mantine/notifications";

/**
 * Displays a success notification with the specified message.
 *
 * @param {string} message - The message to be displayed in the notification.
 * @returns {void} - This function does not return a value.
 *
 * @example
 * // Usage:
 * successNotification("Operation successful!");
 */
export function successNotification(message: string) {
   notifications.show({ message, color: "green", title: "Success!" });
}

/**
 * Displays a success notification with the specified message.
 *
 * @param {string} message - The message to be displayed in the notification.
 * @returns {void} - This function does not return a value.
 *
 * @example
 * // Usage:
 * warnNotification("File deleted!");
 */
export function warnNotification(message: string) {
   notifications.show({ message, color: "yellow", title: "Warning!" });
}

/**
 * Displays a success notification with the specified message.
 *
 * @param {string} message - The message to be displayed in the notification.
 * @returns {void} - This function does not return a value.
 *
 * @example
 * // Usage:
 * errorNotification("Oppssss!");
 */
export function errorNotification(message: string) {
   notifications.show({ message, color: "red", title: "Opps!" });
}
