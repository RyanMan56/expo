// Copyright 2015-present 650 Industries. All rights reserved.

package expo.modules.sensors.services;

import android.content.Context;
import android.hardware.Sensor;

import java.util.Collections;
import java.util.List;

import expo.modules.core.interfaces.InternalModule;

import expo.modules.interfaces.sensors.services.AccelerometerServiceInterface;

public class AccelerometerService extends SubscribableSensorService implements InternalModule, AccelerometerServiceInterface {
  public AccelerometerService(Context reactContext) {
    super(reactContext);
  }

  @Override
  int getSensorType() {
    return Sensor.TYPE_ACCELEROMETER;
  }

  @Override
  public List<Class> getExportedInterfaces() {
    return Collections.<Class>singletonList(AccelerometerServiceInterface.class);
  }
}
