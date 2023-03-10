// Copyright (c) 2013, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

part of dart.math;

/// A utility class for representing two-dimensional positions.
///
/// Example:
/// ```dart
/// var leftTop = const Point(0, 0);
/// var rightBottom = const Point(200, 400);
/// ```
class Point<T extends num> {
  final T x;
  final T y;

  /// Creates a point with the provided [x] and [y] coordinates.
  const Point(T x, T y)
      : this.x = x,
        this.y = y;

  String toString() => 'Point($x, $y)';

  /// Whether [other] is a point with the same coordinates as this point.
  ///
  /// Returns `true` if [other] is a [Point] with [x] and [y]
  /// coordinates equal to the corresponding coordinates of this point,
  /// and `false` otherwise.
  ///
  /// Example:
  /// ```dart
  /// var result = const Point(0, 0) == const Point(0, 0); // true
  /// result = const Point(1.0, 0) == const Point(-1.0, 0); // false
  /// ```
  bool operator ==(Object other) =>
      other is Point && x == other.x && y == other.y;

  int get hashCode => SystemHash.hash2(x.hashCode, y.hashCode);

  /// Add [other] to `this`, as if both points were vectors.
  ///
  /// Returns the resulting "vector" as a Point.
  ///
  /// Example:
  /// ```dart
  /// var point = const Point(10, 100) + const Point(10, 10); // Point(20, 110)
  /// point = const Point(-10, -20) + const Point(10, 100); // Point(0, 80)
  /// ```
  Point<T> operator +(Point<T> other) {
    return Point<T>((x + other.x) as T, (y + other.y) as T);
  }

  /// Subtract [other] from `this`, as if both points were vectors.
  ///
  /// Returns the resulting "vector" as a Point.
  ///
  /// Example:
  /// ```dart
  /// var point = const Point(10, 100) - const Point(10, 10); // Point(0, 90)
  /// point = const Point(-10, -20) - const Point(100, 100); // Point(-110, -120)
  /// ```
  Point<T> operator -(Point<T> other) {
    return Point<T>((x - other.x) as T, (y - other.y) as T);
  }

  /// Scale this point by [factor] as if it were a vector.
  ///
  /// **Important Note**: This function accepts a `num` as its argument only so
  /// that you can scale `Point<double>` objects by an `int` factor. Because the
  /// `*` operator always returns the same type of `Point` as it is called on,
  /// passing in a double [factor] on a `Point<int>` _causes_ _a_
  /// _runtime_ _error_.
  ///
  /// Example:
  /// ```dart
  /// // Integer values.
  /// var point = const Point(10, 100) * 10; // Point(100, 1000)
  /// point = const Point(-10, -100) * 5; // Point(-50, -500)
  /// // Double values.
  /// var doublePoint = Point(10.0, 100.0) * 1.5; // Point(15.0, 150.0)
  /// // Runtime error due the invalid type cast.
  /// var newPoint = const Point(10, 100) * 1.5; // Throws.
  /// ```
  Point<T> operator *(num /*T|int*/ factor) {
    return Point<T>((x * factor) as T, (y * factor) as T);
  }

  /// Get the straight line (Euclidean) distance between the origin (0, 0) and
  /// this point.
  ///
  /// Example:
  /// ```dart
  /// var magnitude = const Point(0, 0).magnitude; // 0.0
  /// magnitude = const Point(10, 0).magnitude;  // 10.0
  /// magnitude = const Point(0, -10).magnitude; // 10.0
  /// magnitude = const Point(10, 10).magnitude;  // 14.142135623730951
  /// ```
  double get magnitude => sqrt(x * x + y * y);

  /// Returns the distance between `this` and [other].
  /// ```dart
  /// var distanceTo = const Point(0, 0).distanceTo(const Point(0, 0)); // 0.0
  /// distanceTo = const Point(0, 0).distanceTo(const Point(10, 0)); // 10.0
  /// distanceTo = const Point(0, 0).distanceTo(const Point(0, -10)); // 10.0
  /// distanceTo = const Point(-10, 0).distanceTo(const Point(100, 0)); // 110.0
  /// ```
  double distanceTo(Point<T> other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }

  /// Returns the squared distance between `this` and [other].
  ///
  /// Squared distances can be used for comparisons when the actual value is not
  /// required.
  ///
  /// Example:
  /// ```dart
  /// var squaredDistance =
  ///     const Point(0, 0).squaredDistanceTo(const Point(0, 0)); // 0.0
  /// squaredDistance =
  ///     const Point(0, 0).squaredDistanceTo(const Point(10, 0)); // 100
  /// squaredDistance =
  ///     const Point(0, 0).squaredDistanceTo(const Point(0, -10)); // 100
  /// squaredDistance =
  ///     const Point(-10, 0).squaredDistanceTo(const Point(100, 0)); // 12100
  /// ```
  T squaredDistanceTo(Point<T> other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return (dx * dx + dy * dy) as T;
  }
}
