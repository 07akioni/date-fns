import addDays from '../addDays/index'
import toDate from '../toDate/index'
import { WeekFnOptions } from '../types.js'

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - The options object
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
export default function setDay(
  dirtyDate: Date | number,
  day: number,
  options: WeekFnOptions = {}
) {
  const weekStartsOn =
    options.weekStartsOn ?? options.locale?.options?.weekStartsOn ?? 0

  const date = toDate(dirtyDate)
  const currentDay = date.getDay()

  const remainder = day % 7
  const dayIndex = (remainder + 7) % 7

  const delta = 7 - weekStartsOn
  const diff =
    day < 0 || day > 6
      ? day - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7)
  return addDays(date, diff)
}