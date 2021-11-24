import { priceAero, priceRJd } from './constant';
//АЭРО
export function aeroCheap(distance: number, baggage: number) {
  let result: number = 0;
  if (baggage >= priceAero.cheap.conditionBaggageOutLimit) {
    return result;
  } else if (baggage < priceAero.cheap.conditionBaggage!) {
    result = distance * priceAero.cheap.distancePrice;
    return result;
  } else if (
    baggage >= priceAero.cheap.conditionBaggage! &&
    baggage < priceAero.cheap.conditionBaggageOutLimit
  ) {
    result =
      distance * priceAero.cheap.distancePrice + priceAero.cheap.baggagePrice!;
    return result;
  } else return result;
}

export function aeroMiddle(distance: number, age: number, baggage: number) {
  console.log('in c');
  let result: number = 0;
  if (baggage >= priceAero.middle.conditionBaggageOutLimit) {
    return result;
    //если меньше условия платного багажа
  } else if (
    age > priceAero.middle.conditionWithChildAge! &&
    baggage < priceAero.middle.conditionBaggage!
  ) {
    result = distance * priceAero.middle.distancePrice;
    return result;
  } else if (
    age < priceAero.middle.conditionWithChildAge! &&
    baggage < priceAero.middle.conditionBaggage!
  ) {
    result =
      distance *
      priceAero.middle.distancePrice *
      priceAero.middle.withChildPrice!;
    return result;
  }

  //если больше условия платного багажа
  else if (
    age > priceAero.middle.conditionWithChildAge! &&
    baggage >= priceAero.middle.conditionBaggage!
  ) {
    result =
      distance * priceAero.middle.distancePrice +
      priceAero.middle.baggagePrice!;
    return result;
  } else if (
    age < priceAero.middle.conditionWithChildAge! &&
    baggage >= priceAero.middle.conditionBaggage!
  ) {
    result =
      distance *
        priceAero.middle.distancePrice *
        priceAero.middle.withChildPrice! +
      priceAero.middle.baggagePrice!;
    return result;
  } else return result;
}

export function aeroLux(distance: number, age: number, baggage: number) {
  let result: number = 0;
  if (baggage >= priceAero.lux.conditionBaggageOutLimit) {
    return result;
  } else if (age < priceAero.lux.conditionWithChildAge!) {
    result =
      distance * priceAero.lux.distancePrice * priceAero.lux.withChildPrice!;
    return result;
  } else if (age > priceAero.lux.conditionWithChildAge!) {
    result = distance * priceAero.lux.distancePrice;
    return result;
  } else return result;
}

// РЖД
export function rjdCheap(distance: number, age: number, baggage: number) {
  let result: number = 0;
  if (baggage >= priceRJd.cheap.conditionBaggageOutLimit) {
    return result;
  } else if (
    age < priceRJd.cheap.conditionWithChildAge! &&
    baggage < priceRJd.cheap.conditionBaggage!
  ) {
    result =
      distance * priceRJd.cheap.distancePrice * priceRJd.cheap.withChildPrice!;
    return result;
  } else if (
    age < priceRJd.cheap.conditionWithChildAge! &&
    baggage >= priceRJd.cheap.conditionBaggage! &&
    baggage < priceRJd.cheap.conditionBaggageOutLimit
  ) {
    result =
      distance * priceRJd.cheap.distancePrice * priceRJd.cheap.withChildPrice! +
      distance * priceRJd.cheap.baggagePrice!;
    return result;
  } else if (
    age > priceRJd.cheap.conditionWithChildAge! &&
    baggage < priceRJd.cheap.conditionBaggage!
  ) {
    result = distance * priceRJd.cheap.distancePrice;
    return result;
  } else if (
    age > priceRJd.cheap.conditionWithChildAge! &&
    baggage >= priceRJd.cheap.conditionBaggage! &&
    baggage < priceRJd.cheap.conditionBaggageOutLimit
  ) {
    result =
      distance * priceRJd.cheap.distancePrice +
      distance * priceRJd.cheap.baggagePrice!;
    return result;
  } else return result;
}

export function rjdMiddle(distance: number, age: number, baggage: number) {
  let result: number = 0;
  if (baggage >= priceRJd.middle.conditionBaggageOutLimit) {
    return result;
  } else if (
    age < priceRJd.middle.conditionWithChildAge! &&
    baggage < priceRJd.middle.conditionBaggage!
  ) {
    result =
      distance *
      priceRJd.middle.distancePrice *
      priceRJd.middle.withChildPrice!;
    return result;
  } else if (
    age < priceRJd.middle.conditionWithChildAge! &&
    baggage >= priceRJd.middle.conditionBaggage! &&
    baggage < priceRJd.middle.conditionBaggageOutLimit
  ) {
    result =
      distance *
        priceRJd.middle.distancePrice *
        priceRJd.middle.withChildPrice! +
      distance * priceRJd.middle.baggagePrice!;
    return result;
  } else if (
    age > priceRJd.middle.conditionWithChildAge! &&
    baggage < priceRJd.middle.conditionBaggage!
  ) {
    result = distance * priceRJd.middle.distancePrice;
    return result;
  } else if (
    age > priceRJd.middle.conditionWithChildAge! &&
    baggage >= priceRJd.middle.conditionBaggage! &&
    baggage < priceRJd.middle.conditionBaggageOutLimit
  ) {
    result =
      distance * priceRJd.middle.distancePrice +
      distance * priceRJd.middle.baggagePrice!;
    return result;
  } else return result;
}

export function rjdLux(distance: number, age: number, baggage: number) {
    let result: number = 0;
    if (baggage >= priceRJd.lux.conditionBaggageOutLimit) {
      return result;
    } else if (age < priceRJd.lux.conditionWithChildAge!) {
      result =
        distance * priceRJd.lux.distancePrice * priceRJd.lux.withChildPrice!;
      return result;
    } else if (age > priceRJd.lux.conditionWithChildAge!) {
      result = distance * priceRJd.lux.distancePrice;
      return result;
    } else return result;
  }
