/**
 * An object returned by [`authenticateAsync`](#localauthenticationauthenticateasyncoptions) method.
 */
export declare type LocalAuthenticationResult = {
    /**
     * A boolean indicating whether or not the authentication was successful.
     */
    success: boolean;
    /**
     * The error code in the case when authentication fails.
     */
    error?: string;
};
export declare enum AuthenticationType {
    /**
     * Indicates fingerprint support.
     */
    FINGERPRINT = 1,
    /**
     * Indicates facial recognition support.
     */
    FACIAL_RECOGNITION = 2,
    /**
     * __Android-only.__ Indicates iris recognition support.
     */
    IRIS = 3
}
export declare enum SecurityLevel {
    /**
     * Indicates no enrolled authentication.
     */
    NONE = 0,
    /**
     * Indicates non-biometric authentication (e.g. PIN, Pattern).
     */
    SECRET = 1,
    /**
     * Indicates biometric authentication.
     */
    BIOMETRIC = 2
}
export declare type LocalAuthenticationOptions = {
    /**
     * A message that is shown alongside the TouchID or FaceID prompt.
     */
    promptMessage?: string;
    /**
     * Allows to customize the default `Cancel` label shown.
     */
    cancelLabel?: string;
    /**
     * After several failed attempts the system will fallback to the device passcode. This setting
     * allows you to disable this option and instead handle the fallback yourself. This can be
     * preferable in certain custom authentication workflows. This behaviour maps to using the iOS
     * [LAPolicyDeviceOwnerAuthenticationWithBiometrics](https://developer.apple.com/documentation/localauthentication/lapolicy/lapolicydeviceownerauthenticationwithbiometrics?language=objc)
     * policy rather than the [LAPolicyDeviceOwnerAuthentication](https://developer.apple.com/documentation/localauthentication/lapolicy/lapolicydeviceownerauthentication?language=objc)
     * policy. Defaults to `false`.
     */
    disableDeviceFallback?: boolean;
    /**
     *  **iOS only.** Allows to customize the default `Use Passcode` label shown after several failed
     *  authentication attempts. Setting this option to an empty string disables this button from
     *  showing in the prompt.
     */
    fallbackLabel?: string;
};
