import { UnavailabilityError } from '@unimodules/core';

import ExpoAmplitude from './ExpoAmplitude';

// @needsAudit @docsMissing
export interface AmplitudeTrackingOptions {
  disableAdid?: boolean;
  /**
   * Disable tracking of the device's carrier.
   */
  disableCarrier?: boolean;
  /**
   * Disable tracking of the user's city.
   */
  disableCity?: boolean;
  /**
   * Disable tracking of the user's country.
   */
  disableCountry?: boolean;
  /**
   * Disable tracking of the device brand.
   */
  disableDeviceBrand?: boolean;
  /**
   * Disable tracking of the device manufacturer.
   */
  disableDeviceManufacturer?: boolean;
  /**
   * Disable tracking of the device model.
   */
  disableDeviceModel?: boolean;
  /**
   * Disable tracking of the user's DMA.
   */
  disableDMA?: boolean;
  /**
   * Disable tracking of the user's IDFV.
   */
  disableIDFV?: boolean;
  /**
   * Disable tracking of the user's IP address.
   */
  disableIPAddress?: boolean;
  /**
   * Disable tracking of the device's language.
   */
  disableLanguage?: boolean;
  /**
   * Disable tracking of the user's current latitude and longitude coordinates.
   */
  disableLatLng?: boolean;
  /**
   * Disable tracking of the device's OS name.
   */
  disableOSName?: boolean;
  /**
   * Disable tracking of the device's OS version.
   */
  disableOSVersion?: boolean;
  /**
   * Disable tracking of the device's platform.
   */
  disablePlatform?: boolean;
  /**
   * Disable tracking of the user's region.
   */
  disableRegion?: boolean;
  /**
   * Disable tracking of the app version the user is on for your app.
   */
  disableVersionName?: boolean;
}

// @needsAudit
/**
 * Initializes Amplitude with your Amplitude API key. If you're having trouble finding your API key,
 * see [step 4 of these instructions](https://amplitude.zendesk.com/hc/en-us/articles/207108137-Introduction-Getting-Started#getting-started).
 * @param apiKey Your Amplitude application's API key.
 */
export async function initializeAsync(apiKey: string): Promise<void> {
  if (!ExpoAmplitude.initializeAsync) {
    throw new UnavailabilityError('Amplitude', 'initializeAsync');
  }
  return await ExpoAmplitude.initializeAsync(apiKey);
}

// @needsAudit
/**
 * Assign a user ID to the current user. If you don't have a system for user IDs you don't need to
 * call this. See [this page](https://amplitude.zendesk.com/hc/en-us/articles/206404628-Step-2-Assign-User-IDs-and-Identify-your-Users)
 * for details.
 * @param userId User ID for the current user.
 */
export async function setUserIdAsync(userId: string): Promise<void> {
  if (!ExpoAmplitude.setUserIdAsync) {
    throw new UnavailabilityError('Amplitude', 'setUserIdAsync');
  }
  return await ExpoAmplitude.setUserIdAsync(userId);
}

// @needsAudit
/**
 * Set properties for the current user. See [here for details](https://amplitude.zendesk.com/hc/en-us/articles/207108327-Step-4-Set-User-Properties-and-Event-Properties).
 * @param userProperties A map of custom properties.
 */
export async function setUserPropertiesAsync(userProperties: Record<string, any>): Promise<void> {
  if (!ExpoAmplitude.setUserPropertiesAsync) {
    throw new UnavailabilityError('Amplitude', 'setUserPropertiesAsync');
  }
  return await ExpoAmplitude.setUserPropertiesAsync(userProperties);
}

// @needsAudit
/**
 * Clear properties set by [`setUserPropertiesAsync()`](#amplitudesetuserpropertiesasyncuserproperties).
 */
export async function clearUserPropertiesAsync(): Promise<void> {
  if (!ExpoAmplitude.clearUserPropertiesAsync) {
    throw new UnavailabilityError('Amplitude', 'clearUserPropertiesAsync');
  }
  return await ExpoAmplitude.clearUserPropertiesAsync();
}

// @needsAudit
/**
 * Log an event to Amplitude. For more information about what kind of events to track,
 * [see here](https://amplitude.zendesk.com/hc/en-us/articles/206404698-Step-3-Track-Events-and-Understand-the-Actions-Users-Take).
 * @param eventName The event name.
 */
export async function logEventAsync(eventName: string): Promise<void> {
  if (!ExpoAmplitude.logEventAsync) {
    throw new UnavailabilityError('Amplitude', 'logEventAsync');
  }
  return await ExpoAmplitude.logEventAsync(eventName);
}

// @needsAudit
/**
 * Log an event to Amplitude with custom properties. For more information about what kind of events
 * to track, [see here](https://amplitude.zendesk.com/hc/en-us/articles/206404698-Step-3-Track-Events-and-Understand-the-Actions-Users-Take).
 * @param eventName The event name.
 * @param properties A map of custom properties.
 */
export async function logEventWithPropertiesAsync(
  eventName: string,
  properties: Record<string, any>
): Promise<void> {
  if (!ExpoAmplitude.logEventWithPropertiesAsync) {
    throw new UnavailabilityError('Amplitude', 'logEventWithPropertiesAsync');
  }
  return await ExpoAmplitude.logEventWithPropertiesAsync(eventName, properties);
}

// @needsAudit
/**
 * Add the current user to a group. For more information, see here for [iOS](https://github.com/amplitude/Amplitude-iOS#setting-groups)
 * and see here for [Android](https://github.com/amplitude/Amplitude-Android#setting-groups).
 * @param groupType The group name, e.g. "sports".
 * @param groupNames An array of group names, e.g. ["tennis", "soccer"].
 * > **Note:** The iOS and Android Amplitude SDKs allow you to use a string or an array of strings. We
 * only support an array of strings. Just use an array with one element if you only want one group
 * name.
 */
export async function setGroupAsync(groupType: string, groupNames: string[]): Promise<void> {
  if (!ExpoAmplitude.setGroupAsync) {
    throw new UnavailabilityError('Amplitude', 'setGroupAsync');
  }
  return await ExpoAmplitude.setGroupAsync(groupType, groupNames);
}

// @needsAudit
/**
 * By default, the Amplitude SDK will track several user properties such as carrier and city. You
 * can use this method to customize and disable individual fields.
 * > **Note:** These configurations will prevent default properties from being tracked on newly
 * created projects, where data has not yet been sent. Please contact [platform@amplitude.com](mailto:platform@amplitude.com)
 * if you would like default properties blocked (moving forward) on projects with existing data.
 * @param options Options object for what should not be tracked. The table below describes what
 * properties the object may contain. All properties are expected to be booleans. For example,
 * passing `disableCarrier: true` disables tracking the device's carrier.
 */
export async function setTrackingOptionsAsync(options: AmplitudeTrackingOptions): Promise<void> {
  if (!ExpoAmplitude.setTrackingOptionsAsync) {
    throw new UnavailabilityError('Amplitude', 'setTrackingOptionsAsync');
  }
  return await ExpoAmplitude.setTrackingOptionsAsync(options);
}
